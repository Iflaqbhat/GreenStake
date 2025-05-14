
import React, { useState } from 'react';
import Layout from '../components/Layout';
import DaoPreview from '../components/DaoPreview';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Users, HandCoins, Flag, Wallet } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { toast } from "@/components/ui/sonner";

const DAO = () => {
  const [createProposalOpen, setCreateProposalOpen] = useState(false);

  const handleCreateProposal = () => {
    toast.success("This feature will be available soon!", {
      description: "Connect your wallet to create proposals once this feature is launched."
    });
    setCreateProposalOpen(false);
  };

  return (
    <Layout>
      <div className="container py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-green-800 dark:text-green-400 flex items-center gap-2">
              <Users className="h-6 w-6 text-green-600" />
              Green Stake DAO
            </h1>
            <p className="text-muted-foreground mt-2">Vote on and fund local sustainability projects across Canada.</p>
          </div>
          <Card className="bg-green-50 dark:bg-green-900/20 border-green-100 dark:border-green-800 p-4 flex items-center gap-3">
            <div className="bg-white dark:bg-card p-2 rounded-full">
              <HandCoins className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Your Voting Power</p>
              <p className="text-xl font-bold text-green-700 dark:text-green-400">120 $GREEN</p>
            </div>
          </Card>
        </div>
        
        <Alert className="mb-8 bg-muted/40 border-green-100 dark:border-green-900">
          <Flag className="h-4 w-4 text-green-600" />
          <AlertTitle>Governance in Action</AlertTitle>
          <AlertDescription>
            The Green Stake DAO allows token holders to propose, vote on, and fund sustainability projects.
            Your $GREEN tokens represent your voting power in the ecosystem.
          </AlertDescription>
        </Alert>
        
        <Tabs defaultValue="active" className="mb-8">
          <TabsList>
            <TabsTrigger value="active">Active Proposals</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="draft">Draft Proposals</TabsTrigger>
          </TabsList>
          
          <TabsContent value="active" className="mt-6">
            <DaoPreview />
          </TabsContent>
          
          <TabsContent value="completed" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Bike Lane Expansion",
                  description: "Funded the addition of protected bike lanes in downtown Toronto.",
                  tokensFunded: 8500,
                  category: "Urban Infrastructure",
                  completionDate: "April 2, 2025",
                  impact: "Reduced CO₂ emissions by an estimated 5.2 tons annually"
                }
              ].map((proposal, i) => (
                <Card key={i} className="border-green-100 dark:border-green-900">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-green-800 dark:text-green-300">{proposal.title}</CardTitle>
                      <Badge className="bg-green-600">Completed</Badge>
                    </div>
                    <CardDescription>{proposal.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-2 text-center">
                        <div className="bg-muted/40 rounded-md py-2">
                          <div className="text-lg font-semibold text-green-600 dark:text-green-400">
                            {proposal.tokensFunded}
                          </div>
                          <div className="text-xs text-muted-foreground">$GREEN funded</div>
                        </div>
                        <div className="bg-muted/40 rounded-md py-2">
                          <div className="text-lg font-semibold">
                            {proposal.completionDate}
                          </div>
                          <div className="text-xs text-muted-foreground">Completion date</div>
                        </div>
                      </div>
                      
                      <div className="text-sm bg-muted p-3 rounded-md">
                        <span className="font-medium">Impact:</span> {proposal.impact}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">View Project Details</Button>
                  </CardFooter>
                </Card>
              ))}
              
              <Card className="border-dashed border-2 border-muted flex items-center justify-center p-6 text-center">
                <div className="space-y-2">
                  <p className="text-muted-foreground">More completed projects coming soon</p>
                  <p className="text-sm text-muted-foreground">Check back for updates on successfully funded initiatives</p>
                </div>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="draft" className="mt-6">
            <div className="text-center py-12">
              <p className="text-muted-foreground">Connect your wallet to create a new project proposal.</p>
              <Button variant="outline" className="mt-4">Connect Wallet</Button>
            </div>
          </TabsContent>
        </Tabs>
        
        <Card className="p-6 bg-muted/30 mt-8">
          <h3 className="text-xl font-medium mb-4">How the Green Stake DAO Works</h3>
          <ol className="list-decimal ml-5 space-y-2">
            <li>Community members submit proposals for environmental projects.</li>
            <li>Token holders vote on proposals using their $GREEN tokens.</li>
            <li>Approved proposals receive funding from the DAO treasury.</li>
            <li>Project teams report progress and milestone achievements.</li>
            <li>Completed projects share their environmental impact metrics.</li>
          </ol>
          <div className="mt-6 pt-4 border-t border-border">
            <Button 
              className="bg-green-600 hover:bg-green-700 flex gap-1"
              onClick={() => setCreateProposalOpen(true)}
            >
              Create a Proposal
            </Button>
          </div>
        </Card>
      </div>

      {/* Create Proposal Dialog */}
      <Dialog open={createProposalOpen} onOpenChange={setCreateProposalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create a DAO Proposal</DialogTitle>
            <DialogDescription>
              Submit your environmental project for community voting and funding.
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex flex-col items-center justify-center py-8">
            <Wallet className="h-12 w-12 text-green-600 mb-4" />
            <p className="text-center mb-4">Connect your wallet to create a proposal</p>
            <Button 
              variant="outline"
              className="gap-1" 
              onClick={handleCreateProposal}
            >
              <Wallet className="h-4 w-4" />
              Connect Wallet
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default DAO;
