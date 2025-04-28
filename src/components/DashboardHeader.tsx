
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Wallet } from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardHeaderProps {
  totalBalance: number;
  changePercentage: number;
  className?: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  totalBalance,
  changePercentage,
  className,
}) => {
  const formattedBalance = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(totalBalance);

  const isPositiveChange = changePercentage >= 0;

  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Wallet className="mr-2 h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold">Finverse Summary</h1>
        </div>
        <div className="text-sm text-fingray-500">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>

      <Card className="border-finblue-100 bg-gradient-to-r from-finblue-500 to-finblue-700 text-white">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-blue-100">Total Balance</p>
              <h2 className="text-3xl font-bold">{formattedBalance}</h2>
            </div>
            <div className={`rounded-full px-3 py-1 text-sm ${
              isPositiveChange ? "bg-fingreen-500" : "bg-destructive"
            }`}>
              {isPositiveChange ? "+" : ""}{changePercentage}%
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardHeader;
