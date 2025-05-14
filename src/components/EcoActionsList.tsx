
import React from 'react';
import { Bike, TreeDeciduous, Recycle, Earth } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ecoActions = [
  {
    id: 1,
    title: "Bike to Work/School",
    description: "Replace your car commute with a bicycle ride to reduce carbon emissions.",
    reward: "5 $GREEN",
    icon: <Bike className="h-6 w-6 text-green-500" />,
    category: "Transportation",
    impact: "Medium"
  },
  {
    id: 2,
    title: "Plant a Tree",
    description: "Plant a native tree species in your local community.",
    reward: "20 $GREEN",
    icon: <TreeDeciduous className="h-6 w-6 text-green-500" />,
    category: "Restoration",
    impact: "High"
  },
  {
    id: 3,
    title: "Recycle Electronics",
    description: "Properly dispose of old electronics at a certified recycling center.",
    reward: "10 $GREEN",
    icon: <Recycle className="h-6 w-6 text-green-500" />,
    category: "Waste Reduction",
    impact: "Medium"
  },
  {
    id: 4,
    title: "Participate in Clean-up",
    description: "Join a community clean-up event at a local park, beach, or neighborhood.",
    reward: "15 $GREEN",
    icon: <Earth className="h-6 w-6 text-green-500" />,
    category: "Community",
    impact: "High" 
  }
];

const EcoActionsList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {ecoActions.map((action) => (
        <Card key={action.id} className="overflow-hidden border-green-100 dark:border-green-900 hover:shadow-md transition-shadow">
          <CardHeader className="bg-green-50 dark:bg-green-900/20">
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="flex items-center gap-2 text-green-800 dark:text-green-300">
                  {action.icon}
                  {action.title}
                </CardTitle>
                <CardDescription className="mt-1">{action.category}</CardDescription>
              </div>
              <Badge variant={action.impact === "High" ? "default" : "secondary"} className="bg-green-600">
                {action.impact} Impact
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="text-muted-foreground">{action.description}</p>
          </CardContent>
          <CardFooter className="flex items-center justify-between border-t border-border pt-4">
            <div className="font-medium text-green-700 dark:text-green-400">
              Reward: {action.reward}
            </div>
            <Button className="bg-green-600 hover:bg-green-700">Log Action</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default EcoActionsList;
