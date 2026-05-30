import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  as?: 'button' | 'a';
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  as = 'button',
  href,
  className = '',
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-bold transition-all rounded-lg';
  
  const variants = {
    primary: 'bg-primary text-background-dark hover:bg-cyan-300',
    secondary: 'bg-white/5 text-white border border-white/10 hover:bg-white/10',
    ghost: 'text-text-muted hover:text-primary',
    outline: 'bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20',
  };

  const sizes = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-12 px-6 text-sm',
    lg: 'h-14 px-8 text-base',
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (as === 'a') {
    const { ...anchorProps } = props as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} className={combinedStyles} {...anchorProps}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
};
