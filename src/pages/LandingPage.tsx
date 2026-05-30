import React from 'react';
import { MainLayout } from '../components/templates/MainLayout';
import { Hero } from '../components/organisms/Hero';
import { FeaturesSection } from '../components/organisms/FeaturesSection';
import { ProjectsSection } from '../components/organisms/ProjectsSection';
import { ManifestoSection } from '../components/organisms/ManifestoSection';
import { StackSection } from '../components/organisms/StackSection';

const LandingPage: React.FC = () => {
  return (
    <MainLayout>
      <Hero />
      <FeaturesSection />
      <ProjectsSection />
      <ManifestoSection />
      <StackSection />
    </MainLayout>
  );
};

export default LandingPage;
