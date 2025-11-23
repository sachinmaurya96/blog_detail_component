export interface ExtractedHeading {
  id: string;
  title: string;
  level: number;
}

/**
 * Extracts headings (h2, h3, h4) from HTML string and generates TOC items
 * Handles HTML parsing and generates unique IDs for each heading
 */
export function extractHeadingsFromHTML(htmlContent: string): ExtractedHeading[] {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, 'text/html');
  
  const headings: ExtractedHeading[] = [];
  const headingElements = doc.querySelectorAll('h2, h3, h4, h5, h6');
  
  headingElements.forEach((element, index) => {
    const tagName = element.tagName.toLowerCase();
    const level = parseInt(tagName.charAt(1));
    const title = element.textContent || '';
    
    // Generate ID from heading text or use index as fallback
    let id = element.id;
    if (!id && title) {
      id = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
    }
    if (!id) {
      id = `heading-${index}`;
    }
    
    // Set ID on the original element if not present
    if (!element.id) {
      element.id = id;
    }
    
    headings.push({
      id,
      title,
      level,
    });
  });
  
  return headings;
}

/**
 * Converts flat heading array into hierarchical TOC structure
 */
export function createTableOfContents(headings: ExtractedHeading[]) {
  const toc: Array<{
    id: string;
    title: string;
    level: number;
    subsections?: Array<any>;
  }> = [];
  
  headings.forEach((heading) => {
    if (heading.level === 2) {
      toc.push({
        id: heading.id,
        title: heading.title,
        level: heading.level,
        subsections: [],
      });
    } else if (heading.level > 2 && toc.length > 0) {
      const lastItem = toc[toc.length - 1];
      if (lastItem.subsections) {
        lastItem.subsections.push({
          id: heading.id,
          title: heading.title,
          level: heading.level,
        });
      }
    }
  });
  
  return toc;
}
