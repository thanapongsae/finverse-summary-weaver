
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  LineChart, Line, BarChart, Bar, 
  XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, Legend 
} from "recharts";
import { cn } from "@/lib/utils";

interface ChartData {
  name: string;
  income: number;
  expenses: number;
  savings: number;
}

interface FinancialChartProps {
  data: ChartData[];
  className?: string;
}

const FinancialChart: React.FC<FinancialChartProps> = ({ 
  data, 
  className 
}) => {
  const [activeChart, setActiveChart] = useState<"overview" | "detailed">("overview");

  return (
    <Card className={cn("border-fingray-200", className)}>
      <CardHeader className="pb-0">
        <div className="flex items-center justify-between">
          <CardTitle>Financial Overview</CardTitle>
          <Tabs 
            defaultValue="overview" 
            className="w-[240px]"
            onValueChange={(v) => setActiveChart(v as "overview" | "detailed")}
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="detailed">Detailed</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            {activeChart === "overview" ? (
              <LineChart
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" />
                <YAxis 
                  tickFormatter={(value) => `$${value}`} 
                  width={80}
                />
                <Tooltip 
                  formatter={(value) => [`$${value}`, undefined]}
                  labelStyle={{ color: "#495057" }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="income"
                  stroke="#1B508D"
                  strokeWidth={2}
                  activeDot={{ r: 8 }}
                />
                <Line
                  type="monotone"
                  dataKey="expenses"
                  stroke="#E74C3C"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="savings"
                  stroke="#1ADE67"
                  strokeWidth={2}
                />
              </LineChart>
            ) : (
              <BarChart
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" />
                <YAxis 
                  tickFormatter={(value) => `$${value}`}
                  width={80}
                />
                <Tooltip 
                  formatter={(value) => [`$${value}`, undefined]}
                  labelStyle={{ color: "#495057" }}
                />
                <Legend />
                <Bar dataKey="income" fill="#1B508D" />
                <Bar dataKey="expenses" fill="#E74C3C" />
                <Bar dataKey="savings" fill="#1ADE67" />
              </BarChart>
            )}
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default FinancialChart;
