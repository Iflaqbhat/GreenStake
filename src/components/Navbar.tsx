
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TreeDeciduous, Award, Users, Database, LogIn, Wallet } from "lucide-react";
import WalletConnectDialog from './WalletConnectDialog';
import SignUpDialog from './SignUpDialog';

const Navbar = () => {
  const [walletDialogOpen, setWalletDialogOpen] = useState(false);
  const [signUpDialogOpen, setSignUpDialogOpen] = useState(false);

  return (
    <header className="w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <TreeDeciduous className="h-6 w-6 text-green-600 animate-leaf-sway" />
          <span className="text-xl font-bold text-green-700">Green Stake</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
            Home
          </Link>
          <Link to="/actions" className="text-foreground/80 hover:text-foreground transition-colors">
            Eco Actions
          </Link>
          <Link to="/leaderboard" className="text-foreground/80 hover:text-foreground transition-colors">
            Leaderboard
          </Link>
          <Link to="/dao" className="text-foreground/80 hover:text-foreground transition-colors">
            DAO
          </Link>
          <Link to="/about" className="text-foreground/80 hover:text-foreground transition-colors">
            About
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            className="hidden sm:flex gap-1"
            onClick={() => setWalletDialogOpen(true)}
          >
            <Wallet className="h-4 w-4" />
            Connect Wallet
          </Button>
          <Button 
            className="bg-green-600 hover:bg-green-700 text-white flex gap-1"
            onClick={() => setSignUpDialogOpen(true)}
          >
            <LogIn className="h-4 w-4" />
            Sign Up
          </Button>
        </div>
      </div>

      {/* Dialogs */}
      <WalletConnectDialog 
        open={walletDialogOpen} 
        onOpenChange={setWalletDialogOpen} 
      />
      <SignUpDialog 
        open={signUpDialogOpen} 
        onOpenChange={setSignUpDialogOpen} 
      />
    </header>
  );
};

export default Navbar;
