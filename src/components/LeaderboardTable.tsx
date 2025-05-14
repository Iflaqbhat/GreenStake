
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { TreeDeciduous, Award, Trophy } from "lucide-react";

const leaderboardData = [
  {
    id: 1,
    name: "Emily Jade",
    avatar: "/placeholder.svg",
    location: "Vancouver, BC",
    actions: 45,
    tokens: 750,
    badges: ["Tree Planter", "Commuter"],
    rank: 1,
  },
  {
    id: 2,
    name: "Michael Ross",
    avatar: "/placeholder.svg",
    location: "Toronto, ON",
    actions: 37,
    tokens: 620,
    badges: ["Recycler Pro", "Energy Saver"],
    rank: 2,
  },
  {
    id: 3,
    name: "Sarah Thompson",
    avatar: "/placeholder.svg",
    location: "Montreal, QC",
    actions: 32,
    tokens: 580,
    badges: ["Community Leader"],
    rank: 3,
  },
  {
    id: 4,
    name: "David Chen",
    avatar: "/placeholder.svg",
    location: "Calgary, AB",
    actions: 28,
    tokens: 510,
    badges: ["Waste Reducer"],
    rank: 4,
  },
  {
    id: 5,
    name: "Olivia Wilson",
    avatar: "/placeholder.svg",
    location: "Halifax, NS",
    actions: 24,
    tokens: 480,
    badges: ["Water Conservationist"],
    rank: 5,
  },
];

const LeaderboardTable = () => {
  return (
    <div className="bg-white dark:bg-card rounded-xl shadow overflow-hidden border border-green-100 dark:border-green-900">
      <div className="px-6 py-4 bg-green-50 dark:bg-green-900/20 border-b border-green-100 dark:border-green-900">
        <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 flex items-center gap-2">
          <Trophy className="h-5 w-5 text-green-600" />
          Top Eco Contributors
        </h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Rank</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">User</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Location</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Actions</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">$GREEN</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Badges</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {leaderboardData.map((user) => (
              <tr key={user.id} className="hover:bg-muted/20 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className={`flex items-center justify-center h-8 w-8 rounded-full font-medium ${
                    user.rank === 1 
                      ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200" 
                      : user.rank === 2 
                      ? "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                      : user.rank === 3
                      ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200"
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {user.rank}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-200">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <div className="font-medium">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                  {user.location}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium">{user.actions}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-green-600 dark:text-green-400">{user.tokens}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex flex-wrap gap-1">
                    {user.badges.map((badge, index) => (
                      <Badge key={index} variant="outline" className="border-green-200 bg-green-50 text-green-800 dark:border-green-900 dark:bg-green-900/20 dark:text-green-300">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderboardTable;
