'use client';

import { Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface BlogHeaderProps {
  title: string;
  category: string;
  categoryColor: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  onShare?: (platform: string) => void;
}

export function BlogHeader({
  title,
  category,
  categoryColor,
  date,
  author,
  onShare,
}: BlogHeaderProps) {
  const shareOptions = [
    { id: 'twitter', label: 'X', icon: '𝕏' },
    { id: 'facebook', label: 'Facebook', icon: 'f' },
    { id: 'linkedin', label: 'LinkedIn', icon: 'in' },
    { id: 'copy', label: 'Copy Link', icon: '🔗' },
  ];

  return (
    <div className="mb-8 pb-8 border-b border-border">
      {/* Category Badge */}
      <div className="mb-4 inline-block">
        <span
          className={cn(
            'px-3 py-1 rounded-md text-sm font-semibold text-white',
            categoryColor
          )}
        >
          {category}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
        {title}
      </h1>

      {/* Meta Info */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={author.avatar || "/placeholder.svg"} alt={author.name} />
            <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-semibold text-foreground">By {author.name}</p>
            <p className="text-sm text-muted-foreground">{date}</p>
          </div>
        </div>

        {/* Share Buttons */}
        <div className="flex items-center gap-2">
          {shareOptions.map((option) => (
            <Button
              key={option.id}
              variant="outline"
              size="sm"
              className="w-10 h-10 p-0"
              onClick={() => onShare?.(option.id)}
              title={option.label}
            >
              <span className="text-lg">{option.icon}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(' ');
}
