
import React from 'react';
import { TreeDeciduous, Wallet, Award, Flag } from "lucide-react";

const features = [
  {
    icon: <TreeDeciduous className="h-8 w-8 text-green-600" />,
    title: "Log Eco Actions",
    description: "Record your environmental activities like biking to work, recycling, or planting trees."
  },
  {
    icon: <Wallet className="h-8 w-8 text-green-600" />,
    title: "Earn $GREEN Tokens",
    description: "Get rewarded with our native Solana token for verified eco-friendly actions."
  },
  {
    icon: <Award className="h-8 w-8 text-green-600" />,
    title: "Collect NFT Badges",
    description: "Earn unique badges that showcase your environmental achievements."
  },
  {
    icon: <Flag className="h-8 w-8 text-green-600" />,
    title: "Compete Locally",
    description: "Join regional leaderboards and compete with other Canadians for the top eco-spot."
  },
];

const FeatureSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-green-800 dark:text-green-400 mb-4">How Green Stake Works</h2>
          <p className="text-lg text-muted-foreground">
            Our platform makes it easy to turn your everyday eco-friendly actions into real value.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="eco-card flex flex-col items-center text-center"
            >
              <div className="mb-4 bg-green-100 dark:bg-green-900/40 p-4 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
