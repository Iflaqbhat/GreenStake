
import React from 'react';
import { cn } from "@/lib/utils";

interface MotionDivProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  animation?: "fade" | "scale" | "slide" | "none";
  delay?: number;
}

const MotionDiv = ({ 
  children, 
  className, 
  animation = "fade",
  delay = 0,
  ...props 
}: MotionDivProps) => {
  
  const getAnimationClass = () => {
    switch (animation) {
      case "fade":
        return "animate-fade-in";
      case "scale":
        return "animate-scale-in";
      case "slide":
        return "animate-slide-in-right";
      default:
        return "";
    }
  };
  
  const style = {
    ...(delay > 0 ? { animationDelay: `${delay}ms` } : {})
  };
  
  return (
    <div 
      className={cn(getAnimationClass(), className)} 
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

export { MotionDiv };
