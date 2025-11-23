'use client';

import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { TableOfContentsItem } from '@/types/blog';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface TOCSheetProps {
  items: TableOfContentsItem[];
}

export function TOCSheet({ items }: TOCSheetProps) {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>('');

  const handleClick = (id: string) => {
    const element = document.querySelector(`[data-toc-id="${id}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveId(id);
      setOpen(false);
    }
  };

  const renderItems = (items: TableOfContentsItem[]) => {
    return (
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => handleClick(item.id)}
              className={cn(
                'block w-full text-left py-1 transition-colors duration-200',
                activeId === item.id
                  ? 'text-blue-600 dark:text-blue-400 font-semibold'
                  : 'text-muted-foreground hover:text-foreground',
                item.level === 1 && 'text-sm font-medium',
                item.level === 2 && 'text-sm ml-4',
                item.level === 3 && 'text-xs ml-8'
              )}
            >
              {item.title}
            </button>
            {item.subsections && item.subsections.length > 0 && (
              renderItems(item.subsections)
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-8 left-8 lg:hidden flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity z-40"
        title="Open Table of Contents"
      >
        <Menu size={20} />
        <span className="text-sm font-medium">Table of Contents</span>
      </button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-80">
          <SheetHeader>
            <SheetTitle>Table of Contents</SheetTitle>
          </SheetHeader>
          <div className="mt-6 text-sm leading-relaxed">
            {renderItems(items)}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
