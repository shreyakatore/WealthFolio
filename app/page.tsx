"use client";

import { useState, useEffect, useCallback } from "react";
import { DashboardHeader } from "@/components/dashboard/header";
import { PortfolioSummary } from "@/components/dashboard/portfolio-summary";
import { PortfolioChart } from "@/components/dashboard/portfolio-chart";
import { HoldingsTable } from "@/components/dashboard/holdings-table";
import { SipTracker } from "@/components/dashboard/sip-tracker";
import { AssetAllocation } from "@/components/dashboard/asset-allocation";
import { RecentTransactions } from "@/components/dashboard/recent-transactions";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { SIPCalculator } from "@/components/dashboard/sip-calculator";
import {
  PortfolioSummarySkeleton,
  ChartSkeleton,
  HoldingsTableSkeleton,
  SIPTrackerSkeleton,
  CalculatorSkeleton,
  AssetAllocationSkeleton,
  TransactionsSkeleton,
} from "@/components/dashboard/skeletons";
import { ErrorState } from "@/components/dashboard/error-state";

type LoadingState = "loading" | "success" | "error";

export default function DashboardPage() {
  const [loadingState, setLoadingState] = useState<LoadingState>("loading");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const loadDashboard = useCallback(() => {
    setLoadingState("loading");
    setErrorMessage("");

    // Simulate API fetch with 1.5s delay
    const timer = setTimeout(() => {
      // Simulate 10% chance of error for demo purposes
      if (Math.random() < 0.1) {
        setLoadingState("error");
        setErrorMessage("Failed to fetch portfolio data. Please try again.");
      } else {
        setLoadingState("success");
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const cleanup = loadDashboard();
    return cleanup;
  }, [loadDashboard]);

  const handleRetry = () => {
    loadDashboard();
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="mx-auto max-w-[1600px] space-y-4 sm:space-y-6 p-4 sm:p-6">
        {/* Welcome Section */}
        <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              Good Morning, Arun!
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              {"Here's an overview of your wealth portfolio"}
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span>Markets Open</span>
            <span className="text-foreground font-medium hidden sm:inline">
              NIFTY 50: 22,456.80
            </span>
            <span className="text-primary">+0.45%</span>
          </div>
        </div>

        {/* Error State */}
        {loadingState === "error" && (
          <ErrorState
            title="Unable to load portfolio"
            message={errorMessage}
            onRetry={handleRetry}
          />
        )}

        {/* Loading State */}
        {loadingState === "loading" && (
          <>
            <PortfolioSummarySkeleton />

            <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
              <div className="space-y-4 sm:space-y-6 lg:col-span-2">
                <ChartSkeleton />
                <HoldingsTableSkeleton />
              </div>
              <div className="space-y-4 sm:space-y-6">
                <CalculatorSkeleton />
                <AssetAllocationSkeleton />
              </div>
            </div>

            <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
              <SIPTrackerSkeleton />
              <TransactionsSkeleton />
            </div>
          </>
        )}

        {/* Success State - Actual Dashboard Content */}
        {loadingState === "success" && (
          <>
            {/* Portfolio Summary Cards */}
            <PortfolioSummary />

            {/* Main Grid Layout */}
            <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
              {/* Left Column - Charts & Holdings */}
              <div className="space-y-4 sm:space-y-6 lg:col-span-2">
                <PortfolioChart />
                <HoldingsTable />
              </div>

              {/* Right Column - Calculator & Asset Allocation */}
              <div className="space-y-4 sm:space-y-6">
                <SIPCalculator />
                <QuickActions />
                <AssetAllocation />
              </div>
            </div>

            {/* Bottom Section */}
            <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
              <SipTracker />
              <RecentTransactions />
            </div>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-8">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-muted-foreground">
            <p>WealthFolio - Your Premium Investment Tracker</p>
            <p className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              All systems operational
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
