
import React, { useState } from 'react';
import Layout from '../components/Layout';
import EcoActionsList from '../components/EcoActionsList';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Bike, Recycle, TreeDeciduous } from "lucide-react";

const Actions = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <Layout>
      <div className="container py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-green-800 dark:text-green-400">Eco Actions</h1>
            <p className="text-muted-foreground mt-2">Log your environmental activities and earn $GREEN rewards.</p>
          </div>
          <Card className="bg-green-50 dark:bg-green-900/20 border-green-100 dark:border-green-800 p-4 flex items-center gap-3">
            <div className="bg-white dark:bg-card p-2 rounded-full">
              <Trophy className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Your Balance</p>
              <p className="text-xl font-bold text-green-700 dark:text-green-400">120 $GREEN</p>
            </div>
          </Card>
        </div>
        
        <Tabs defaultValue="all" className="mb-8" onValueChange={setSelectedCategory}>
          <TabsList>
            <TabsTrigger value="all">All Actions</TabsTrigger>
            <TabsTrigger value="transportation">
              <Bike className="h-4 w-4 mr-2" />
              Transportation
            </TabsTrigger>
            <TabsTrigger value="waste">
              <Recycle className="h-4 w-4 mr-2" />
              Waste Reduction
            </TabsTrigger>
            <TabsTrigger value="planting">
              <TreeDeciduous className="h-4 w-4 mr-2" />
              Planting
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            <EcoActionsList filter="all" />
          </TabsContent>
          
          <TabsContent value="transportation" className="mt-6">
            <EcoActionsList filter="transportation" />
          </TabsContent>
          
          <TabsContent value="waste" className="mt-6">
            <EcoActionsList filter="waste" />
          </TabsContent>
          
          <TabsContent value="planting" className="mt-6">
            <EcoActionsList filter="planting" />
          </TabsContent>
        </Tabs>
        
        <Card className="p-6 bg-muted/30 mt-8">
          <h3 className="text-xl font-medium mb-4">How to Log Actions</h3>
          <ol className="list-decimal ml-5 space-y-2">
            <li>Select an eco-friendly action from the list above.</li>
            <li>Click "Log Action" to record your environmental activity.</li>
            <li>Provide any requested evidence or details about your action.</li>
            <li>Once verified, $GREEN tokens will be added to your balance.</li>
            <li>Use your tokens to vote on DAO proposals or redeem for rewards.</li>
          </ol>
        </Card>
      </div>
    </Layout>
  );
};

export default Actions;
