
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TreeDeciduous, Users } from "lucide-react";

const proposals = [
  {
    id: 1,
    title: "Community Garden Project",
    description: "Fund the creation of a community garden in downtown Vancouver to grow organic produce.",
    requiredTokens: 5000,
    currentTokens: 3750,
    daysLeft: 5,
    votes: 124,
    category: "Urban Greening"
  },
  {
    id: 2,
    title: "School Solar Panel Installation",
    description: "Install solar panels at three local high schools to reduce energy costs and carbon footprint.",
    requiredTokens: 12000,
    currentTokens: 8400,
    daysLeft: 12,
    votes: 237,
    category: "Renewable Energy"
  },
  {
    id: 3,
    title: "Lake Ontario Cleanup Initiative",
    description: "Organize and fund a major cleanup effort to remove plastics and pollutants from Lake Ontario shoreline.",
    requiredTokens: 7500,
    currentTokens: 2200,
    daysLeft: 18,
    votes: 89,
    category: "Water Conservation"
  }
];

const DaoPreview = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Users className="h-6 w-6 text-green-600" />
          <h3 className="text-2xl font-bold text-foreground">Green DAO Proposals</h3>
        </div>
        <Button variant="outline">View All Proposals</Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {proposals.map((proposal) => {
          const progress = (proposal.currentTokens / proposal.requiredTokens) * 100;
          
          return (
            <Card key={proposal.id} className="border-green-100 dark:border-green-900">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-green-800 dark:text-green-300">{proposal.title}</CardTitle>
                  <Badge variant="outline" className="border-green-200 bg-green-50 text-green-700 dark:border-green-900 dark:bg-green-900/20 dark:text-green-300">
                    {proposal.category}
                  </Badge>
                </div>
                <CardDescription>{proposal.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Funding Progress</span>
                      <span className="font-medium">{progress.toFixed(0)}%</span>
                    </div>
                    <Progress value={progress} className="h-2 bg-muted" />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-muted/40 rounded-md py-2">
                      <div className="text-lg font-semibold text-green-600 dark:text-green-400">
                        {proposal.currentTokens}
                      </div>
                      <div className="text-xs text-muted-foreground">$GREEN raised</div>
                    </div>
                    <div className="bg-muted/40 rounded-md py-2">
                      <div className="text-lg font-semibold">
                        {proposal.votes}
                      </div>
                      <div className="text-xs text-muted-foreground">Votes</div>
                    </div>
                    <div className="bg-muted/40 rounded-md py-2">
                      <div className="text-lg font-semibold">
                        {proposal.daysLeft}
                      </div>
                      <div className="text-xs text-muted-foreground">Days left</div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-green-600 hover:bg-green-700">Vote & Support</Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default DaoPreview;
