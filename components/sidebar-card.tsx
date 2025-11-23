'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface SidebarCardProps {
  title: string;
  description: string;
  cta: {
    text: string;
    url: string;
  };
  backgroundColor?: string;
  accentColor?: string;
}

export function SidebarCard({
  title,
  description,
  cta,
  backgroundColor = 'bg-blue-50 dark:bg-blue-950',
  accentColor = 'bg-gradient-to-br from-blue-400 to-pink-400',
}: SidebarCardProps) {
  return (
    <Card className={`${backgroundColor} border-0 relative overflow-hidden p-6 mb-6`}>
      {/* Decorative accent */}
      <div
        className={`absolute bottom-0 right-0 w-24 h-24 ${accentColor} rounded-full blur-3xl opacity-30`}
      />

      <div className="relative z-10">
        <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-foreground/80 mb-4 leading-relaxed">{description}</p>
        <Button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
          onClick={() => window.open(cta.url, '_blank')}
        >
          {cta.text}
        </Button>
      </div>
    </Card>
  );
}
