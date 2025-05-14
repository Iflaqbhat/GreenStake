import React from 'react';
import Layout from '../components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { TreeDeciduous, Leaf, HandCoins, Award, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <div className="inline-flex items-center justify-center p-2 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
            <TreeDeciduous className="h-6 w-6 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-green-800 dark:text-green-400 mb-4">About Green Stake</h1>
          <p className="text-xl text-muted-foreground">
            We're on a mission to incentivize environmental action through blockchain technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">Our Vision</h2>
            <p className="text-muted-foreground mb-4">
              Green Stake is built on a simple idea: what if we could reward people for doing good for the planet?
            </p>
            <p className="text-muted-foreground mb-4">
              By combining blockchain technology with environmental activism, we've created a platform that turns eco-friendly actions into real value. We believe that by aligning financial incentives with environmental goals, we can accelerate the transition to a more sustainable future.
            </p>
            <p className="text-muted-foreground">
              Our platform empowers Canadians to make a difference in their local communities while building a nationwide movement for environmental change.
            </p>
          </div>
          
          <Card className="overflow-hidden border-green-100 dark:border-green-900">
            <div className="bg-green-50 dark:bg-green-900/20 p-6">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <Leaf className="h-5 w-5 text-green-600" />
                Our Impact
              </h3>
            </div>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-green-700 dark:text-green-400">37,892</div>
                    <div className="text-sm text-muted-foreground">Eco Actions Logged</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-700 dark:text-green-400">2,453</div>
                    <div className="text-sm text-muted-foreground">Active Users</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-700 dark:text-green-400">127</div>
                    <div className="text-sm text-muted-foreground">Tons of CO₂ Saved</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-700 dark:text-green-400">12</div>
                    <div className="text-sm text-muted-foreground">Projects Funded</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Separator className="mb-16" />
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center text-green-700 dark:text-green-300">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-green-100 dark:border-green-900">
              <CardHeader>
                <div className="bg-green-100 dark:bg-green-900/30 h-12 w-12 rounded-full flex items-center justify-center mb-2">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Log Eco Actions</CardTitle>
                <CardDescription>
                  Record and verify your environmental activities through our platform.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  From biking to work to planting trees in your community, every positive action for the environment can be logged and verified.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-green-100 dark:border-green-900">
              <CardHeader>
                <div className="bg-green-100 dark:bg-green-900/30 h-12 w-12 rounded-full flex items-center justify-center mb-2">
                  <HandCoins className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Earn $GREEN Tokens</CardTitle>
                <CardDescription>
                  Receive rewards on the Solana blockchain for your verified eco actions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  $GREEN tokens are our native cryptocurrency, built on the fast and energy-efficient Solana blockchain, designed to reward environmental stewardship.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-green-100 dark:border-green-900">
              <CardHeader>
                <div className="bg-green-100 dark:bg-green-900/30 h-12 w-12 rounded-full flex items-center justify-center mb-2">
                  <Database className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Fund Green Projects</CardTitle>
                <CardDescription>
                  Use your tokens to vote on and fund local environmental initiatives.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our DAO (Decentralized Autonomous Organization) allows token holders to propose and vote on sustainability projects in their communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <Separator className="mb-16" />
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center text-green-700 dark:text-green-300">Our Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Sarah Green", role: "Founder & CEO", avatar: "/placeholder.svg" },
              { name: "Michael Rivers", role: "Technology Lead", avatar: "/placeholder.svg" },
              { name: "Elena Park", role: "Sustainability Director", avatar: "/placeholder.svg" },
              { name: "David Chen", role: "Community Manager", avatar: "/placeholder.svg" },
            ].map((member, i) => (
              <Card key={i} className="border-green-100 dark:border-green-900 text-center overflow-hidden">
                <div className="h-32 bg-muted flex items-center justify-center">
                  <img 
                    src={member.avatar} 
                    alt={member.name} 
                    className="h-20 w-20 rounded-full object-cover border-4 border-white dark:border-card"
                  />
                </div>
                <CardContent className="pt-4">
                  <h3 className="font-medium text-lg">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">Join Our Mission</h2>
          <p className="text-muted-foreground mb-6">
            Green Stake is more than a platform—it's a movement to make environmental action rewarding and accessible to everyone. Join us in building a more sustainable future for Canada and beyond.
          </p>
          <div className="flex justify-center">
            <Button className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6">
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
