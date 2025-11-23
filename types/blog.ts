export interface TableOfContentsItem {
  id: string;
  title: string;
  level: number;
  subsections?: TableOfContentsItem[];
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  categoryColor: string;
  excerpt: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: number;
  shareLinks: {
    twitter: string;
    facebook: string;
    linkedin: string;
    copy: string;
  };
  content: BlogSection[];
  tableOfContents: TableOfContentsItem[];
}

export interface BlogSection {
  id: string;
  heading?: string;
  headingLevel?: 'h2' | 'h3';
  content: string;
  type: 'paragraph' | 'heading';
}

export interface SidebarInfo {
  title: string;
  description: string;
  cta: {
    text: string;
    url: string;
    variant: 'primary' | 'secondary';
  };
  icon?: string;
}
