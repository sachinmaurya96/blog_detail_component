'use client';

import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbSectionProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSection({ items }: BreadcrumbSectionProps) {
  return (
    <div className="border-b border-border bg-background py-3 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              {index > 0 && <ChevronRight size={16} className="text-muted-foreground" />}
              {item.href ? (
                <a
                  href={item.href}
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <span className="text-xs sm:text-sm text-foreground font-medium truncate">
                  {item.label}
                </span>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
