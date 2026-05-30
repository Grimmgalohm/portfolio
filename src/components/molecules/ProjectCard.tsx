import React from 'react';
import { Typography } from '../atoms/Typography';
import { TechTag } from '../atoms/TechTag';
import { Icon } from '../atoms/Icon';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  linkText: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  tags,
  link,
  linkText,
}) => {
  return (
    <div className="group flex flex-col rounded-2xl bg-background-card border border-white/10 overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all">
      <div 
        className="h-48 w-full bg-cover bg-center border-b border-white/5 relative" 
        style={{ backgroundImage: `url('${image}')` }}
      >
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <Typography variant="h3" className="mb-2 group-hover:text-primary transition-colors">
          {title}
        </Typography>
        <Typography variant="p" className="text-sm mb-6 flex-1">
          {description}
        </Typography>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <TechTag key={tag}>{tag}</TechTag>
          ))}
        </div>
        <a className="inline-flex items-center text-sm font-semibold text-white hover:text-primary mt-auto" href={link}>
          {linkText} <Icon name="arrow_right_alt" className="ml-1 text-lg" />
        </a>
      </div>
    </div>
  );
};
