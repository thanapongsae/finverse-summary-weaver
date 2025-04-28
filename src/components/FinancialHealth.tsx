
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface FinancialHealthItem {
  title: string;
  percentage: number;
  status: "excellent" | "good" | "fair" | "poor";
  description: string;
}

interface FinancialHealthProps {
  healthItems: FinancialHealthItem[];
  className?: string;
}

const FinancialHealth: React.FC<FinancialHealthProps> = ({
  healthItems,
  className,
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent":
        return "text-fingreen-600";
      case "good":
        return "text-finblue-500";
      case "fair":
        return "text-amber-500";
      case "poor":
        return "text-destructive";
      default:
        return "text-fingray-500";
    }
  };

  const getProgressColor = (status: string) => {
    switch (status) {
      case "excellent":
        return "bg-fingreen-500";
      case "good":
        return "bg-finblue-500";
      case "fair":
        return "bg-amber-500";
      case "poor":
        return "bg-destructive";
      default:
        return "bg-fingray-500";
    }
  };

  return (
    <Card className={cn("border-fingray-200", className)}>
      <CardHeader>
        <CardTitle>Financial Health</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-5">
          {healthItems.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="font-medium">{item.title}</p>
                <p className={cn("font-medium capitalize", getStatusColor(item.status))}>
                  {item.status}
                </p>
              </div>
              <Progress 
                value={item.percentage} 
                className="h-2" 
                indicatorClassName={getProgressColor(item.status)} 
              />
              <p className="text-xs text-fingray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FinancialHealth;
