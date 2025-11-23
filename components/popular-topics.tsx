'use client';

import { Card } from '@/components/ui/card';

interface Topic {
  id: string;
  name: string;
  count: number;
}

interface PopularTopicsProps {
  topics: Topic[];
}

export function PopularTopics({ topics }: PopularTopicsProps) {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-bold text-foreground mb-6">Popular Topics</h3>
      <div className="space-y-2 max-h-96 overflow-y-auto">
        {topics.map((topic) => (
          <a
            key={topic.id}
            href="#"
            className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors cursor-pointer group"
          >
            <span className="text-sm text-foreground group-hover:text-foreground font-medium">
              {topic.name}
            </span>
            <span className="text-xs font-semibold text-muted-foreground bg-muted px-2.5 py-1 rounded group-hover:bg-muted/80 transition-colors">
              {topic.count}
            </span>
          </a>
        ))}
      </div>
    </Card>
  );
}
