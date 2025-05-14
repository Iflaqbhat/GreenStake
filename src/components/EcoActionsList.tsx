
import React, { useState } from 'react';
import { Bike, TreeDeciduous, Recycle, Earth } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

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
    category: "Planting",
    impact: "High"
  },
  {
    id: 3,
    title: "Recycle Electronics",
    description: "Properly dispose of old electronics at a certified recycling center.",
    reward: "10 $GREEN",
    icon: <Recycle className="h-6 w-6 text-green-500" />,
    category: "Waste",
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

interface EcoActionsListProps {
  filter?: string;
}

const EcoActionsList = ({ filter = 'all' }: EcoActionsListProps) => {
  const [loggedActions, setLoggedActions] = useState<number[]>([]);
  
  // Filter actions based on category
  const filteredActions = filter === 'all' 
    ? ecoActions 
    : ecoActions.filter(action => 
        action.category.toLowerCase().includes(filter.toLowerCase())
      );

  const handleLogAction = (id: number) => {
    // Check if already logged
    if (loggedActions.includes(id)) {
      toast("Action already logged today!", {
        description: "This eco-action has already been recorded today.",
        icon: "⚠️",
      });
      return;
    }
    
    // Get the reward amount from the action
    const action = ecoActions.find(a => a.id === id);
    const rewardAmount = action ? parseInt(action.reward.split(' ')[0]) : 0;
    
    // Add to logged actions
    setLoggedActions([...loggedActions, id]);
    
    // Show success toast
    toast("Action Logged Successfully!", {
      description: `You earned ${rewardAmount} $GREEN tokens for this action.`,
      icon: "🌱",
    });
  };

  return filteredActions.length > 0 ? (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {filteredActions.map((action) => (
        <Card 
          key={action.id} 
          className={`overflow-hidden border-green-100 dark:border-green-900 hover:shadow-md transition-shadow ${
            loggedActions.includes(action.id) ? 'bg-green-50 dark:bg-green-900/40 border-green-300 dark:border-green-700' : ''
          }`}
        >
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
            {loggedActions.includes(action.id) ? (
              <Button variant="outline" className="bg-green-100 border-green-300 text-green-800 hover:bg-green-200 dark:bg-green-900 dark:border-green-700 dark:text-green-300">
                ✓ Logged Today
              </Button>
            ) : (
              <Button 
                className="bg-green-600 hover:bg-green-700"
                onClick={() => handleLogAction(action.id)}
              >
                Log Action
              </Button>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  ) : (
    <div className="text-center py-12">
      <p className="text-muted-foreground mb-4">No eco actions available for this category yet.</p>
      <Button variant="outline">Check Back Soon</Button>
    </div>
  );
};

export default EcoActionsList;
