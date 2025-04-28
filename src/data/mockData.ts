
import { BadgeDollarSign, Receipt, Wallet, CreditCard } from "lucide-react";

// Mock data for financial overview
export const chartData = [
  { name: 'Jan', income: 5000, expenses: 3200, savings: 1800 },
  { name: 'Feb', income: 5200, expenses: 3300, savings: 1900 },
  { name: 'Mar', income: 5100, expenses: 3500, savings: 1600 },
  { name: 'Apr', income: 5300, expenses: 3200, savings: 2100 },
  { name: 'May', income: 5400, expenses: 3100, savings: 2300 },
  { name: 'Jun', income: 5500, expenses: 3400, savings: 2100 },
];

// Mock data for financial metrics
export const metrics = [
  {
    title: "Monthly Income",
    value: 5500,
    change: 3.2,
    icon: BadgeDollarSign,
  },
  {
    title: "Monthly Expenses",
    value: 3400,
    change: -2.1,
    icon: Receipt,
  },
  {
    title: "Monthly Savings",
    value: 2100,
    change: 12.5,
    icon: Wallet,
  },
  {
    title: "Credit Card",
    value: 1200,
    change: -15.2,
    icon: CreditCard,
  },
];

// Mock data for transactions
export const transactions = [
  {
    id: "t1",
    title: "Salary",
    amount: 5500,
    date: "Apr 28, 2025",
    category: "Salary",
    type: "income" as const,
  },
  {
    id: "t2",
    title: "Rent",
    amount: 1500,
    date: "Apr 25, 2025",
    category: "Bills",
    type: "expense" as const,
  },
  {
    id: "t3",
    title: "Grocery Shopping",
    amount: 250,
    date: "Apr 23, 2025",
    category: "Shopping",
    type: "expense" as const,
  },
  {
    id: "t4",
    title: "Freelance Work",
    amount: 800,
    date: "Apr 20, 2025",
    category: "Income",
    type: "income" as const,
  },
  {
    id: "t5",
    title: "Internet Bill",
    amount: 70,
    date: "Apr 18, 2025",
    category: "Bills",
    type: "expense" as const,
  },
];

// Mock data for financial health
export const healthItems = [
  {
    title: "Emergency Fund",
    percentage: 95,
    status: "excellent" as const,
    description: "You have 6+ months of expenses saved. Great job!",
  },
  {
    title: "Debt-to-Income Ratio",
    percentage: 75,
    status: "good" as const,
    description: "Your debt is manageable compared to your income.",
  },
  {
    title: "Savings Rate",
    percentage: 60,
    status: "fair" as const,
    description: "You're saving 15% of your income. Try to increase to 20%.",
  },
  {
    title: "Retirement Planning",
    percentage: 30,
    status: "poor" as const,
    description: "You're behind on retirement savings. Consider increasing contributions.",
  },
];
