import React from 'react';

interface TechTagProps {
  children: React.ReactNode;
}

export const TechTag: React.FC<TechTagProps> = ({ children }) => {
  return (
    <span className="inline-flex items-center rounded-md bg-white/5 px-2 py-1 text-xs font-mono font-medium text-text-muted ring-1 ring-inset ring-white/10">
      {children}
    </span>
  );
};
