import React from 'react';
import { Typography } from '../atoms/Typography';
import { FeatureCard } from '../molecules/FeatureCard';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: 'architecture',
      title: 'Clean Architecture',
      description: 'Domain-Driven Design and SOLID principles ensure codebases remain adaptable to business needs.',
    },
    {
      icon: 'dns',
      title: 'Reliability & Uptime',
      description: 'Designing for failure with observability, redundancy, and aggressive error handling strategies.',
    },
    {
      icon: 'security',
      title: 'Security First',
      description: 'Security is not an afterthought. Adhering to OWASP standards and secure-by-default design.',
    },
    {
      icon: 'speed',
      title: 'Performance',
      description: 'Optimization via efficient algorithms, database indexing, and smart caching strategies.',
    },
  ];

  return (
    <section className="py-24 bg-background-card/50 border-y border-white/5" id="philosophy">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl lg:max-w-none mb-16">
          <Typography variant="h2" className="mb-4">Engineering Mindset</Typography>
          <Typography variant="p" className="max-w-3xl">
            My approach is grounded in rigor, clarity, and long-term maintainability. I don't just write code; I design systems.
          </Typography>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
