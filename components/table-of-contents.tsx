'use client';

import { useState, useEffect } from 'react';
import { TableOfContentsItem } from '@/types/blog';
import { cn } from '@/lib/utils';

interface TableOfContentsProps {
  items: TableOfContentsItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Handle scroll to track active section
    const handleScroll = () => {
      const headings = document.querySelectorAll('[data-toc-id]');
      let currentActive = '';

      headings.forEach((heading) => {
        const rect = heading.getBoundingClientRect();
        if (rect.top <= 150) {
          currentActive = heading.getAttribute('data-toc-id') || '';
        }
      });

      setActiveId(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector(`[data-toc-id="${id}"]`);
    if (element) {
      const offset = 150;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
      setActiveId(id);
    }
  };

  const renderItems = (items: TableOfContentsItem[], depth = 0) => {
    return (
      <ul className={cn('space-y-2', depth > 0 && 'ml-4 border-l border-border pl-4')}>
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={(e) => handleClick(item.id, e)}
              className={cn(
                'block w-full text-left py-1 transition-colors duration-200 hover:text-foreground cursor-pointer',
                activeId === item.id
                  ? 'text-blue-600 dark:text-blue-400 font-semibold'
                  : 'text-muted-foreground',
                item.level === 1 && 'text-sm font-medium',
                item.level === 2 && 'text-sm',
                item.level === 3 && 'text-xs'
              )}
            >
              {item.title}
            </button>
            {item.subsections && item.subsections.length > 0 && (
              renderItems(item.subsections, depth + 1)
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <nav className="sticky top-20 space-y-4 max-h-[calc(100vh-120px)] overflow-y-auto">
      <h3 className="text-base font-bold text-foreground">Table of Contents</h3>
      <div className="text-sm leading-relaxed">
        {renderItems(items)}
      </div>
    </nav>
  );
}
