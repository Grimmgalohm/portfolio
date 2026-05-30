import React from 'react';
import { Icon } from '../atoms/Icon';
import { Typography } from '../atoms/Typography';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="group relative rounded-xl border border-white/10 bg-background-card p-6 hover:border-primary/50 transition-colors">
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
        <Icon name={icon} />
      </div>
      <Typography variant="h3" className="mb-2 group-hover:text-primary transition-colors">
        {title}
      </Typography>
      <Typography variant="p" className="text-sm leading-relaxed">
        {description}
      </Typography>
    </div>
  );
};
