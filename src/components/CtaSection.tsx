
import React from 'react';
import { Button } from "@/components/ui/button";
import { TreeDeciduous } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-50/80 to-transparent dark:from-green-950/50 dark:to-transparent -z-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-100 dark:bg-green-900/20 rounded-full -mr-48 -mt-48 opacity-50 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-100 dark:bg-green-900/20 rounded-full -ml-32 -mb-32 opacity-50 -z-10"></div>
      
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 bg-green-100 dark:bg-green-900/30 rounded-full mb-6">
            <TreeDeciduous className="h-8 w-8 text-green-600" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 dark:text-green-300 mb-6">
            Join the Green Stake Community Today
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be part of Canada's first eco-focused crypto community. Earn rewards for your environmental actions and help fund local sustainability projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-green-600 hover:bg-green-700 text-white text-lg px-10 py-6">
              Get Started
            </Button>
            <Button variant="outline" className="text-lg px-10 py-6">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
