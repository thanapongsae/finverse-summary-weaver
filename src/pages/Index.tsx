
import React from "react";
import DashboardHeader from "@/components/DashboardHeader";
import FinancialMetrics from "@/components/FinancialMetrics";
import FinancialChart from "@/components/FinancialChart";
import TransactionHistory from "@/components/TransactionHistory";
import FinancialHealth from "@/components/FinancialHealth";
import { chartData, metrics, transactions, healthItems } from "@/data/mockData";

const Index = () => {
  return (
    <div className="min-h-screen bg-fingray-50">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 animate-fade-in">
          {/* Dashboard Header */}
          <DashboardHeader totalBalance={32500} changePercentage={4.2} />

          {/* Financial Metrics */}
          <div className="animate-slide-up">
            <h2 className="text-xl font-semibold mb-4">Key Metrics</h2>
            <FinancialMetrics metrics={metrics} />
          </div>

          {/* Financial Chart */}
          <div className="animate-slide-up" style={{ animationDelay: "100ms" }}>
            <FinancialChart data={chartData} />
          </div>

          {/* Financial Health and Transactions */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="animate-slide-up" style={{ animationDelay: "150ms" }}>
              <FinancialHealth healthItems={healthItems} />
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "200ms" }}>
              <TransactionHistory transactions={transactions} />
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-fingray-200 pt-4 mt-8 text-center text-fingray-400 text-sm">
            <p>&copy; 2025 Finverse. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
