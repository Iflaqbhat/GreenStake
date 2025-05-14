
import React from 'react';
import { Button } from "@/components/ui/button";
import { TreeDeciduous, Bike, Recycle, Award } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden py-16 md:py-24">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22%3E%3Cpath fill=%22%2322c55e%22 d=%22M50 50 30 30C35 35 40 15 45 25c5 10 10 15 5 25zm0 0 20-20c-5 5-10-15-15-5-5 10-10 15-5 25z%22/%3E%3C/svg%3E')] bg-repeat"></div>
      
      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-block animate-leaf-sway">
              <TreeDeciduous className="h-12 w-12 text-green-600" />
            </div>
            
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight text-green-900 dark:text-green-50">
              Stake Green,<br /> 
              <span className="text-green-600">Earn Green</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
              Turn your eco-friendly actions into real rewards with Canada's first environmental crypto platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6">
                Get Started
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 rounded-2xl p-8 shadow-lg border border-green-100 dark:border-green-800 animate-grow">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white dark:bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <Bike className="h-8 w-8 text-green-500 mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Eco Actions</h3>
                  <p className="text-muted-foreground text-sm">Log your green activities and earn $GREEN tokens</p>
                </div>
                
                <div className="bg-white dark:bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <Recycle className="h-8 w-8 text-green-500 mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Carbon Offsets</h3>
                  <p className="text-muted-foreground text-sm">Purchase tokenized carbon credits on Solana</p>
                </div>
                
                <div className="bg-white dark:bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <Award className="h-8 w-8 text-green-500 mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Eco NFTs</h3>
                  <p className="text-muted-foreground text-sm">Earn badges for your environmental achievements</p>
                </div>
                
                <div className="bg-white dark:bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <Users className="h-8 w-8 text-green-500 mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Green DAO</h3>
                  <p className="text-muted-foreground text-sm">Vote on funding local sustainability projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
