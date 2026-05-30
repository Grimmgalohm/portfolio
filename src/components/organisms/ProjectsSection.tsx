import React from 'react';
import { Typography } from '../atoms/Typography';
import { Icon } from '../atoms/Icon';
import { ProjectCard } from '../molecules/ProjectCard';

export const ProjectsSection: React.FC = () => {
  const projects = [
    {
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDS4RRrgx7P9KWZFXTXZ6E8nc5P9ahuCS6pwgTSi2TCINgdCq84oVXV3o4m4ZmLOw0HvJGSaF7ueRkNMdlP2H4D4MVVBIRNDA1tILTGydnUNDAU4nU5O2DRPJNy7SAPyMiIDtwWTpxtCN7QT3d_jH-CS0R6SfbrIovIH5GzL6Ud1T0P0Nll1SprxGLK_G-RSBuD7xjK46hHF8wBWHQVvfZXb-2lJ6fiNBsxbN4DUzzUfbJ1v9pj3PUZ8pJoYeDmQ8zHzue46duM_k',
      title: 'High-Throughput Payment Gateway',
      description: 'Architected a resilient payment processing service capable of handling 10k+ transactions per second with zero downtime during peak loads.',
      tags: ['Go', 'gRPC', 'PostgreSQL'],
      link: '#',
      linkText: 'Read Case Study',
    },
    {
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBe_ohcTh9DrzdKm5kiWmxGFB-FMxLJaNcq4figjSPG-X6Q5vhAqzsYsFm0SE-e-3ooV_PcbS_p8SewXZuMfy_A2S9UOqHlIwXQuxEz95Czbx1VlLDmYpXULK5zTUajigqokfBDEcBce-K1B7OXTKE4Zx5FTW4cTxUCX48uoezhB779oejwFPPFv_4SXzcQAfutlLInHlpWotRWrBQoYKLd7TP3tGJfFLkg9WPJVJTtw8_D9HiKgm2g1ER9wJ7_eGnXXViuLnoHi8w',
      title: 'Distributed Analytics Engine',
      description: 'Built a real-time analytics pipeline processing terabytes of log data daily using Kafka and ClickHouse for sub-second query responses.',
      tags: ['Python', 'Kafka', 'ClickHouse'],
      link: '#',
      linkText: 'View Repository',
    },
    {
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6zg1ZwVTL4aB0qON2gvvDDj3TRy1DHNJ9AoiSpHMvMRovImrYrvPC2dITQWPEdF0P0wHFxRvDonbeLRP_4wk5P_O3dWbycvviaZfKMenev68wjgfwqwb6XMGF-FfG-e0fr9ruWtBi1wlAyZ4ETSy3FDuJZ7JlF--fi9zKEHll8WZwIeUDx5l-UdezwdnD_x2LmDp7jKAYZKdYxnS616iB2NHJcbTumrSisHbb-aliDXoBZo4dn4MlPxr_maPcTYhDg2PI5eKHirE',
      title: 'Infrastructure Orchestrator',
      description: 'Developed a custom Kubernetes operator to automate the deployment and scaling of microservices across multi-region clusters.',
      tags: ['Kubernetes', 'Terraform', 'Go'],
      link: '#',
      linkText: 'Read Article',
    },
  ];

  return (
    <section className="py-24" id="projects">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <Typography variant="h2" className="mb-4">Selected Projects</Typography>
            <Typography variant="p">A showcase of complex problems solved with elegant solutions.</Typography>
          </div>
          <a className="text-sm font-semibold text-primary hover:text-cyan-300 flex items-center gap-1" href="#">
            View GitHub <Icon name="arrow_outward" className="text-sm" />
          </a>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
