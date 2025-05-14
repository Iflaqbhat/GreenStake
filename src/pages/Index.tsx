
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import FeatureSection from '../components/FeatureSection';
import LeaderboardTable from '../components/LeaderboardTable';
import DaoPreview from '../components/DaoPreview';
import CtaSection from '../components/CtaSection';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeatureSection />
      
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-green-800 dark:text-green-400 mb-12">
            Top Environmental Contributors
          </h2>
          <LeaderboardTable />
        </div>
      </section>
      
      <Separator className="bg-border" />
      
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-green-800 dark:text-green-400 mb-12">
            Community-Driven Green Initiatives
          </h2>
          <DaoPreview />
        </div>
      </section>
      
      <CtaSection />
    </Layout>
  );
};

export default Index;
