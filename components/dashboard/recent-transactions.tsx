"use client";

import { ArrowDownLeft, ArrowUpRight, RefreshCcw } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const transactions = [
  {
    type: "purchase",
    fund: "Nifty 50 Index Fund",
    amount: "₹10,000",
    date: "22 May 2024",
    status: "completed",
    nav: "₹474.23",
  },
  {
    type: "sip",
    fund: "HDFC Mid-Cap Fund",
    amount: "₹7,500",
    date: "20 May 2024",
    status: "completed",
    nav: "₹462.12",
  },
  {
    type: "redemption",
    fund: "ICICI Prudential Bond",
    amount: "₹25,000",
    date: "18 May 2024",
    status: "completed",
    nav: "₹47.31",
  },
  {
    type: "sip",
    fund: "Axis Small Cap Fund",
    amount: "₹5,000",
    date: "15 May 2024",
    status: "completed",
    nav: "₹361.87",
  },
  {
    type: "purchase",
    fund: "SBI Blue Chip Fund",
    amount: "₹15,000",
    date: "12 May 2024",
    status: "completed",
    nav: "₹411.85",
  },
];

const getTransactionIcon = (type: string) => {
  switch (type) {
    case "purchase":
      return <ArrowDownLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />;
    case "redemption":
      return <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />;
    case "sip":
      return <RefreshCcw className="h-3.5 w-3.5 sm:h-4 sm:w-4" />;
    default:
      return null;
  }
};

const getTransactionStyles = (type: string) => {
  switch (type) {
    case "purchase":
      return "bg-primary/10 text-primary";
    case "redemption":
      return "bg-destructive/10 text-destructive";
    case "sip":
      return "bg-blue-500/10 text-blue-400";
    default:
      return "";
  }
};

export function RecentTransactions() {
  return (
    <Card className="border-border bg-card">
      <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <CardTitle className="text-base sm:text-lg font-semibold text-foreground">
            Recent Transactions
          </CardTitle>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
            Your latest investment activities
          </p>
        </div>
        <a
          href="#"
          className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          View all
        </a>
      </CardHeader>
      <CardContent className="space-y-3 sm:space-y-4">
        {transactions.map((transaction, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-lg border border-border bg-secondary/30 p-2.5 sm:p-3 transition-colors hover:border-primary/50"
          >
            <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
              <div
                className={`flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg shrink-0 ${getTransactionStyles(transaction.type)}`}
              >
                {getTransactionIcon(transaction.type)}
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium text-foreground text-sm truncate">
                  {transaction.fund}
                </p>
                <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs text-muted-foreground">
                  <span className="capitalize">{transaction.type}</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="hidden sm:inline">{transaction.date}</span>
                </div>
              </div>
            </div>
            <div className="text-right shrink-0 ml-2">
              <p
                className={`font-medium text-sm ${transaction.type === "redemption" ? "text-destructive" : "text-primary"}`}
              >
                {transaction.type === "redemption" ? "-" : "+"}
                {transaction.amount}
              </p>
              <p className="text-[10px] sm:text-xs text-muted-foreground">
                NAV: {transaction.nav}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
