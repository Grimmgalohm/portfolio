import React from 'react';
import { Typography } from '../atoms/Typography';
import { StackCategory } from '../molecules/StackCategory';

export const StackSection: React.FC = () => {
  const categories = [
    {
      icon: 'terminal',
      title: 'Languages & Backend',
      items: ['Python', 'PHP (Modern)', 'Go', 'C++', 'Node.js', 'C#'],
    },
    {
      icon: 'database',
      title: 'Data Persistence',
      items: ['PostgreSQL', 'MySQL', 'Redis', 'Elasticsearch', 'MongoDB'],
    },
    {
      icon: 'cloud',
      title: 'DevOps & Cloud',
      items: ['Docker', 'Kubernetes', 'AWS', 'Terraform', 'GitHub Actions'],
    },
  ];

  return (
    <section className="py-24" id="stack">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Typography variant="h2" className="mb-12 text-center">Technical Capabilities</Typography>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <StackCategory key={cat.title} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
};
