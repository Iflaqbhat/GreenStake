
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Wallet, CheckCircle } from "lucide-react";
import { MotionDiv } from "@/components/ui/motion-div";
import { toast } from "@/components/ui/sonner";

interface WalletConnectDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WalletConnectDialog = ({ open, onOpenChange }: WalletConnectDialogProps) => {
  const [step, setStep] = useState<'select' | 'connecting' | 'connected'>('select');
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null);

  const handleConnect = (walletType: string) => {
    setSelectedWallet(walletType);
    setStep('connecting');
    
    // Simulate connection process
    setTimeout(() => {
      setStep('connected');
      toast.success("Wallet connected successfully!", {
        description: `Your ${walletType} wallet has been connected.`
      });
      
      // Close dialog after showing success
      setTimeout(() => {
        onOpenChange(false);
        setStep('select'); // Reset for next time
      }, 1500);
    }, 1000);
  };

  const walletOptions = [
    { name: "MetaMask", icon: "🦊" },
    { name: "Coinbase", icon: "🪙" },
    { name: "WalletConnect", icon: "🔗" },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Wallet className="h-5 w-5 text-green-600" />
            Connect Your Wallet
          </DialogTitle>
          <DialogDescription>
            Choose your preferred wallet to connect to Green Stake.
          </DialogDescription>
        </DialogHeader>
        
        {step === 'select' && (
          <div className="grid gap-4 py-4">
            {walletOptions.map((wallet) => (
              <Button 
                key={wallet.name} 
                variant="outline" 
                className="flex justify-between py-6"
                onClick={() => handleConnect(wallet.name)}
              >
                <span className="text-base">{wallet.name}</span>
                <span className="text-xl">{wallet.icon}</span>
              </Button>
            ))}
          </div>
        )}
        
        {step === 'connecting' && (
          <MotionDiv className="flex flex-col items-center justify-center py-8" animation="fade">
            <div className="animate-pulse flex flex-col items-center">
              <Wallet className="h-12 w-12 text-green-600 mb-4" />
              <p>Connecting to {selectedWallet}...</p>
            </div>
          </MotionDiv>
        )}
        
        {step === 'connected' && (
          <MotionDiv className="flex flex-col items-center justify-center py-8" animation="scale">
            <CheckCircle className="h-12 w-12 text-green-600 mb-4" />
            <p className="text-center font-medium">Wallet Connected!</p>
          </MotionDiv>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default WalletConnectDialog;
