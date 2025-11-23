'use client';

import { BlogSection } from '@/types/blog';

interface BlogContentProps {
  sections: BlogSection[] | string;
}

export function BlogContent({ sections }: BlogContentProps) {
  // Handle both array of sections and HTML string
  if (typeof sections === 'string') {
    const processedHTML = sections.replace(
      /<(h[2-6])([^>]*)>([^<]+)<\/\1>/g,
      (match, tag, attrs, content) => {
        const id = content
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-+|-+$/g, '');
        return `<${tag}${attrs} id="${id}" data-toc-id="${id}" class="scroll-mt-32">${content}</${tag}>`;
      }
    );

    return (
      <div
        className="prose prose-lg dark:prose-invert max-w-none
          prose-h2:text-3xl prose-h2:font-bold prose-h2:text-foreground prose-h2:mt-8 prose-h2:mb-4
          prose-h3:text-2xl prose-h3:font-bold prose-h3:text-foreground prose-h3:mt-6 prose-h3:mb-3
          prose-h4:text-xl prose-h4:font-semibold prose-h4:text-foreground prose-h4:mt-5 prose-h4:mb-2
          prose-p:text-base prose-p:text-foreground/90 prose-p:leading-relaxed prose-p:mb-4"
        dangerouslySetInnerHTML={{ __html: processedHTML }}
      />
    );
  }

  // Handle array format (legacy)
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      {sections.map((section, index) => (
        <div key={section.id}>
          {section.type === 'heading' && section.heading && (
            <div data-toc-id={section.id} className="scroll-mt-24">
              {section.headingLevel === 'h2' ? (
                <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">
                  {section.heading}
                </h2>
              ) : (
                <h3 className="text-2xl font-bold text-foreground mt-6 mb-3">
                  {section.heading}
                </h3>
              )}
            </div>
          )}
          {section.type === 'paragraph' && (
            <p className="text-base text-foreground/90 leading-relaxed mb-4 text-justify">
              {section.content}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
