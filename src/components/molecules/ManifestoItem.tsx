import React from 'react';
import { Icon } from '../atoms/Icon';
import { Typography } from '../atoms/Typography';

interface ManifestoItemProps {
  icon: string;
  title: string;
  description: string;
}

export const ManifestoItem: React.FC<ManifestoItemProps> = ({ icon, title, description }) => {
  return (
    <div className="flex gap-4">
      <div className="flex-none pt-1">
        <Icon name={icon} className="text-primary" />
      </div>
      <div>
        <Typography variant="h3" className="text-lg">
          {title}
        </Typography>
        <Typography variant="p" className="text-sm mt-1">
          {description}
        </Typography>
      </div>
    </div>
  );
};
