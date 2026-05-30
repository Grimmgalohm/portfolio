import React from 'react';
import { Icon } from '../atoms/Icon';
import { Typography } from '../atoms/Typography';

interface StackCategoryProps {
  icon: string;
  title: string;
  items: string[];
}

export const StackCategory: React.FC<StackCategoryProps> = ({ icon, title, items }) => {
  return (
    <div className="rounded-xl border border-white/10 bg-background-card p-6">
      <div className="flex items-center gap-3 mb-6">
        <Icon name={icon} className="text-primary" />
        <Typography variant="h3" className="text-lg">
          {title}
        </Typography>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span 
            key={item} 
            className="px-3 py-1.5 bg-white/5 border border-white/10 rounded text-sm text-gray-300 font-mono"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
