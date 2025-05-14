import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TreeDeciduous, Leaf, User } from "lucide-react"; // Changed Users to User which is available in lucide-react

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white dark:from-green-950/20 dark:to-background pb-16 pt-[6.5rem]">
      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-green-600">
              <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-1">
                <TreeDeciduous className="h-5 w-5" />
              </div>
              <span className="font-medium">Green Stake Protocol</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-green-900 dark:text-green-100">
              Earn Rewards for <span className="text-green-600">Environmental Impact</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Join thousands of Canadians using blockchain technology to turn eco-friendly actions into real-world value.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                Get Started
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-8 w-8 rounded-full bg-green-100 dark:bg-green-800/50 flex items-center justify-center border-2 border-background">
                    <User className="h-4 w-4 text-green-800 dark:text-green-300" />
                  </div>
                ))}
              </div>
              <span>Join 2,400+ active members</span>
            </div>
          </div>
          <div className="relative">
            <img
              src="/hero.png"
              alt="Hero Image"
              className="max-w-none w-[50rem] dark:block hidden"
              style={{ transform: "translateX(10%)" }}
            />
            <img
              src="/hero-mobile.png"
              alt="Hero Image Mobile"
              className="max-w-none w-[40rem] dark:hidden block"
              style={{ transform: "translateX(20%)" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
