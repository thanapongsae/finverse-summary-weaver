
import React from "react";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { BadgeDollarSign, CreditCard, Receipt, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";

interface Transaction {
  id: string;
  title: string;
  amount: number;
  date: string;
  category: string;
  type: "income" | "expense";
}

interface TransactionHistoryProps {
  transactions: Transaction[];
  className?: string;
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({ 
  transactions, 
  className 
}) => {
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "shopping":
        return <CreditCard className="h-5 w-5" />;
      case "bills":
        return <Receipt className="h-5 w-5" />;
      case "salary":
        return <BadgeDollarSign className="h-5 w-5" />;
      default:
        return <Wallet className="h-5 w-5" />;
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  return (
    <Card className={cn("border-fingray-200", className)}>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between rounded-lg border border-fingray-100 p-3 hover:bg-fingray-50"
            >
              <div className="flex items-center">
                <div className={`mr-3 rounded-full p-2 ${
                  transaction.type === "income" 
                    ? "bg-fingreen-100 text-fingreen-600" 
                    : "bg-fingray-100 text-fingray-600"
                }`}>
                  {getCategoryIcon(transaction.category)}
                </div>
                <div>
                  <p className="font-medium">{transaction.title}</p>
                  <p className="text-xs text-fingray-500">
                    {transaction.date} • {transaction.category}
                  </p>
                </div>
              </div>
              <div className={`font-semibold ${
                transaction.type === "income" 
                  ? "text-fingreen-600" 
                  : "text-destructive"
              }`}>
                {transaction.type === "income" ? "+" : "-"}{formatCurrency(transaction.amount)}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionHistory;
