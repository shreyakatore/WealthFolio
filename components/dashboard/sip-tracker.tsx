"use client";

import { Calendar, CheckCircle2, AlertCircle, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const sipPlans = [
  {
    name: "Nifty 50 Index Fund",
    amount: "₹10,000",
    date: "5th",
    status: "active",
    nextDate: "5 Jun 2024",
    totalInvested: "₹1,20,000",
    completedInstallments: 12,
    totalInstallments: 60,
  },
  {
    name: "HDFC Mid-Cap Fund",
    amount: "₹7,500",
    date: "10th",
    status: "active",
    nextDate: "10 Jun 2024",
    totalInvested: "₹67,500",
    completedInstallments: 9,
    totalInstallments: 36,
  },
  {
    name: "Axis Small Cap Fund",
    amount: "₹5,000",
    date: "15th",
    status: "pending",
    nextDate: "15 Jun 2024",
    totalInvested: "₹35,000",
    completedInstallments: 7,
    totalInstallments: 24,
  },
  {
    name: "SBI Blue Chip Fund",
    amount: "₹12,500",
    date: "20th",
    status: "active",
    nextDate: "20 Jun 2024",
    totalInvested: "₹1,50,000",
    completedInstallments: 12,
    totalInstallments: 48,
  },
  {
    name: "ICICI Prudential Bond",
    amount: "₹10,000",
    date: "25th",
    status: "paused",
    nextDate: "Paused",
    totalInvested: "₹80,000",
    completedInstallments: 8,
    totalInstallments: 36,
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "active":
      return <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />;
    case "pending":
      return <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-warning" />;
    case "paused":
      return (
        <AlertCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground" />
      );
    default:
      return null;
  }
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case "active":
      return "bg-primary/10 text-primary";
    case "pending":
      return "bg-warning/10 text-warning";
    case "paused":
      return "bg-muted text-muted-foreground";
    default:
      return "";
  }
};

export function SipTracker() {
  const totalMonthly = sipPlans
    .filter((s) => s.status === "active")
    .reduce((sum, sip) => {
      const amount = parseInt(sip.amount.replace(/[₹,]/g, ""));
      return sum + amount;
    }, 0);

  return (
    <Card className="border-border bg-card">
      <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <CardTitle className="text-base sm:text-lg font-semibold text-foreground">
            SIP Tracker
          </CardTitle>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
            Monthly SIP:{" "}
            <span className="font-medium text-primary">
              ₹{totalMonthly.toLocaleString("en-IN")}
            </span>
          </p>
        </div>
        <a
          href="#"
          className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          Manage SIPs
        </a>
      </CardHeader>
      <CardContent className="space-y-3 sm:space-y-4">
        {sipPlans.map((sip, index) => (
          <div
            key={index}
            className="rounded-lg border border-border bg-secondary/30 p-3 sm:p-4 transition-colors hover:border-primary/50"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="font-medium text-foreground text-sm sm:text-base truncate">
                    {sip.name}
                  </h4>
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium whitespace-nowrap ${getStatusBadge(sip.status)}`}
                  >
                    {getStatusIcon(sip.status)}
                    {sip.status.charAt(0).toUpperCase() + sip.status.slice(1)}
                  </span>
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    {sip.date} monthly
                  </span>
                  <span className="hidden sm:inline">•</span>
                  <span>{sip.amount}/month</span>
                </div>
              </div>
              <div className="text-left sm:text-right mt-2 sm:mt-0">
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Next installment
                </p>
                <p className="font-medium text-foreground text-sm">
                  {sip.nextDate}
                </p>
              </div>
            </div>
            <div className="mt-3 sm:mt-4">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>
                  {sip.completedInstallments}/{sip.totalInstallments}{" "}
                  installments
                </span>
                <span>{sip.totalInvested}</span>
              </div>
              <Progress
                value={
                  (sip.completedInstallments / sip.totalInstallments) * 100
                }
                className="mt-2 h-1.5 bg-secondary"
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
