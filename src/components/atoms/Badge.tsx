import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({ children, className = '', dot = false }) => {
  return (
    <div className={`inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-mono font-medium text-primary ${className}`}>
      {dot && <span className="mr-2 h-2 w-2 rounded-full bg-primary animate-pulse"></span>}
      {children}
    </div>
  );
};
