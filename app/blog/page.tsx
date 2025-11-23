'use client';

import { useState, useEffect } from 'react';
import { BlogHeader } from '@/components/blog-header';
import { BlogContent } from '@/components/blog-content';
import { TableOfContents } from '@/components/table-of-contents';
import { SidebarCard } from '@/components/sidebar-card';
import { PopularTopics } from '@/components/popular-topics';
import { BreadcrumbSection } from '@/components/breadcrumb-section';
import { TOCSheet } from '@/components/toc-sheet';
import { BlogPost, TableOfContentsItem } from '@/types/blog';
import { extractHeadingsFromHTML, createTableOfContents } from '@/lib/extract-headings';

// Dummy data
const dummyBlogPost: BlogPost = {
  id: '1',
  title: 'Understanding Hoisting in JavaScript',
  category: 'Tutorial',
  categoryColor: 'bg-cyan-500',
  excerpt: 'A comprehensive guide to JavaScript hoisting and how it affects your code.',
  author: {
    name: 'Mabishi Wakio',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mabishi',
  },
  date: 'Updated on September 15, 2020',
  readTime: 8,
  shareLinks: {
    twitter: 'https://twitter.com',
    facebook: 'https://facebook.com',
    linkedin: 'https://linkedin.com',
    copy: 'copy-link',
  },
  tableOfContents: [],
  content: [],
};

const htmlContent = `
  <h2>undefined vs ReferenceError</h2>
  <p>When you access a variable before it is declared, the behavior differs depending on whether the variable was declared with var, let, or const. Variables declared with var are hoisted and initialized with undefined, whereas let and const are hoisted but not initialized, resulting in a ReferenceError if accessed before declaration.</p>
  
  <h2>Hoisting variables</h2>
  <p>Variable hoisting occurs during the creation phase of execution context. The JavaScript engine scans the code and hoists all variable and function declarations to the top of their respective scope.</p>
  
  <h3>ES5</h3>
  <p>In ES5, variables declared with var are hoisted and initialized with undefined. This means that even if you try to use a variable before declaring it, you will not get a ReferenceError. Instead, you will get undefined.</p>
  
  <h3>ES6</h3>
  <p>ES6 introduced let and const, which are also hoisted but in a different way. They are not initialized with undefined, and accessing them before declaration results in a ReferenceError.</p>
  
  <h2>Hoisting functions</h2>
  <p>Function declarations are fully hoisted, meaning both the function name and its body are available at the top of the scope. You can call a function before it is declared in your code.</p>
  
  <h2>Order of precedence</h2>
  <p>When both variable and function declarations have the same name, function declarations take precedence over variable declarations during hoisting.</p>
  
  <h2>Hoisting classes</h2>
  <p>Class declarations are hoisted but not initialized. Similar to let and const, they are in the Temporal Dead Zone from the start of the scope until the declaration is reached.</p>
  
  <h2>Caveat</h2>
  <p>Understanding hoisting is crucial for writing predictable and bug-free JavaScript. However, many experts recommend avoiding relying on hoisting and instead following best practices.</p>
  
  <h2>Conclusion</h2>
  <p>Hoisting in JavaScript is a complex topic that often confuses developers. By understanding how variables and functions are hoisted, you can write more predictable and maintainable code.</p>
`;

const popularTopics = [
  { id: '1', name: 'JavaScript Basics', count: 12 },
  { id: '2', name: 'React Patterns', count: 8 },
  { id: '3', name: 'Performance Tips', count: 15 },
  { id: '4', name: 'Best Practices', count: 10 },
  { id: '5', name: 'Web Development', count: 20 },
];

export default function BlogPage() {
  const [tableOfContents, setTableOfContents] = useState<TableOfContentsItem[]>([]);
  const [processedHTML, setProcessedHTML] = useState<string>('');

  useEffect(() => {
    const headings = extractHeadingsFromHTML(htmlContent);
    const toc = createTableOfContents(headings);
    setTableOfContents(toc);
    setProcessedHTML(htmlContent);
  }, []);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = dummyBlogPost.title;

    const shareLinks: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    };

    if (platform === 'copy') {
      navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    } else if (shareLinks[platform]) {
      window.open(shareLinks[platform], '_blank');
    }
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Breadcrumb Section */}
      <BreadcrumbSection
        items={[
          { label: 'Tutorials', href: '/' },
          { label: dummyBlogPost.title },
        ]}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="hidden lg:block lg:col-span-1 order-3 lg:order-1">
            <TableOfContents items={tableOfContents} />
          </div>

          {/* Main Content - Blog Post */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <BlogHeader
              title={dummyBlogPost.title}
              category={dummyBlogPost.category}
              categoryColor={dummyBlogPost.categoryColor}
              date={dummyBlogPost.date}
              author={dummyBlogPost.author}
              onShare={handleShare}
            />
            <BlogContent sections={processedHTML} />
          </div>

          {/* Right Sidebar - Info Cards */}
          <div className="lg:col-span-1 order-2 lg:order-3">
            <SidebarCard
              title="Deploy on DigitalOcean"
              description="Click below to sign up for DigitalOcean's virtual machines, Databases, and AIML products."
              cta={{
                text: 'Sign up',
                url: 'https://www.digitalocean.com',
              }}
              backgroundColor="bg-blue-50 dark:bg-slate-950"
              accentColor="bg-gradient-to-br from-pink-400 to-purple-400"
            />
            <PopularTopics topics={popularTopics} />
          </div>
        </div>
      </div>

      {/* Mobile TOC sheet button */}
      <TOCSheet items={tableOfContents} />
    </main>
  );
}
