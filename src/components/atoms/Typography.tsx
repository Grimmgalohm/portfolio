import React from 'react';

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  children: React.ReactNode;
  className?: string;
}

export const Typography: React.FC<TypographyProps> = ({ variant, children, className = '' }) => {
  const Component = variant;

  const styles = {
    h1: 'text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl',
    h2: 'text-3xl font-bold tracking-tight text-white sm:text-4xl',
    h3: 'text-xl font-bold text-white',
    h4: 'text-lg font-bold text-white',
    p: 'text-lg leading-8 text-text-muted',
    span: '',
  };

  return <Component className={`${styles[variant]} ${className}`}>{children}</Component>;
};
