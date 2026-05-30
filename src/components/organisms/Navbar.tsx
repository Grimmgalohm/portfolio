import React from 'react';
import { Icon } from '../atoms/Icon';
import { Button } from '../atoms/Button';

export const Navbar: React.FC = () => {
  const navLinks = [
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Projects', href: '#projects' },
    { label: 'Manifesto', href: '#manifesto' },
    { label: 'Stack', href: '#stack' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background-dark/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Icon name="terminal" className="text-primary" />
          <span className="font-mono text-lg font-bold tracking-tight text-white">&lt;Dev/Root&gt;</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              className="text-sm font-medium text-text-muted hover:text-primary transition-colors" 
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" as="a" href="#contact" className="hidden sm:flex">
            Contact Me
          </Button>
          <button className="flex md:hidden text-white">
            <Icon name="menu" />
          </button>
        </div>
      </div>
    </header>
  );
};
