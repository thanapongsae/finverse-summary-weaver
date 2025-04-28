
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeDollarSign, Wallet, CreditCard, Receipt } from "lucide-react";
import { cn } from "@/lib/utils";

interface Metric {
  title: string;
  value: number;
  change: number;
  icon: React.ElementType;
}

interface FinancialMetricsProps {
  metrics: Metric[];
  className?: string;
}

const FinancialMetrics: React.FC<FinancialMetricsProps> = ({ 
  metrics, 
  className 
}) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  };

  return (
    <div className={cn("grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4", className)}>
      {metrics.map((metric, index) => (
        <Card key={index} className="metric-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-fingray-600">
              {metric.title}
            </CardTitle>
            <metric.icon className="h-5 w-5 text-finblue-500" />
          </CardHeader>
          <CardContent className="p-0">
            <div className="text-2xl font-bold">{formatCurrency(metric.value)}</div>
            <p className={`mt-1 text-xs ${
              metric.change >= 0 
                ? "text-fingreen-600" 
                : "text-destructive"
            }`}>
              {metric.change >= 0 ? "+" : ""}{metric.change}% from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FinancialMetrics;
