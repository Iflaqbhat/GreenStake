
import React from 'react';
import Layout from '../components/Layout';
import LeaderboardTable from '../components/LeaderboardTable';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trophy, Search, MapPin } from "lucide-react";

const Leaderboard = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-green-800 dark:text-green-400 flex items-center gap-2">
              <Trophy className="h-6 w-6 text-green-600" />
              Eco Leaderboard
            </h1>
            <p className="text-muted-foreground mt-2">See who's leading the way in environmental actions across Canada.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 bg-green-50 dark:bg-green-900/20 border-green-100 dark:border-green-800">
            <p className="text-sm text-muted-foreground mb-1">Total Participants</p>
            <p className="text-2xl font-bold">2,453</p>
          </Card>
          <Card className="p-4 bg-green-50 dark:bg-green-900/20 border-green-100 dark:border-green-800">
            <p className="text-sm text-muted-foreground mb-1">Actions Logged</p>
            <p className="text-2xl font-bold">37,892</p>
          </Card>
          <Card className="p-4 bg-green-50 dark:bg-green-900/20 border-green-100 dark:border-green-800">
            <p className="text-sm text-muted-foreground mb-1">$GREEN Distributed</p>
            <p className="text-2xl font-bold">543,210</p>
          </Card>
          <Card className="p-4 bg-green-50 dark:bg-green-900/20 border-green-100 dark:border-green-800">
            <p className="text-sm text-muted-foreground mb-1">CO₂ Saved (est.)</p>
            <p className="text-2xl font-bold">127 tons</p>
          </Card>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input placeholder="Search users..." className="pl-10" />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Select>
              <SelectTrigger className="w-[180px]">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <SelectValue placeholder="All Regions" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Regions</SelectItem>
                <SelectItem value="bc">British Columbia</SelectItem>
                <SelectItem value="on">Ontario</SelectItem>
                <SelectItem value="qc">Quebec</SelectItem>
                <SelectItem value="ab">Alberta</SelectItem>
              </SelectContent>
            </Select>
            
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="This Month" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
                <SelectItem value="all">All Time</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <Tabs defaultValue="global" className="mb-8">
          <TabsList>
            <TabsTrigger value="global">Global</TabsTrigger>
            <TabsTrigger value="regions">Regional</TabsTrigger>
            <TabsTrigger value="friends">Friends</TabsTrigger>
          </TabsList>
          
          <TabsContent value="global" className="mt-6">
            <LeaderboardTable />
          </TabsContent>
          
          <TabsContent value="regions" className="mt-6">
            <div className="text-center py-12">
              <p className="text-muted-foreground">Regional leaderboards will be shown here.</p>
              <Button variant="outline" className="mt-4">Coming Soon</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="friends" className="mt-6">
            <div className="text-center py-12">
              <p className="text-muted-foreground">Connect your wallet to view your friends' leaderboard.</p>
              <Button variant="outline" className="mt-4">Connect Wallet</Button>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-8">
          <h3 className="text-xl font-medium mb-4">Available Badges</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {["Tree Planter", "Commuter", "Recycler Pro", "Energy Saver", "Community Leader", "Water Conservationist"].map((badge, i) => (
              <Card key={i} className="p-4 text-center border-green-100 dark:border-green-900">
                <div className="bg-green-100 dark:bg-green-900/30 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Badge className="h-10 w-10 bg-green-600 flex items-center justify-center text-white">
                    {badge[0]}
                  </Badge>
                </div>
                <p className="font-medium text-sm">{badge}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Leaderboard;
