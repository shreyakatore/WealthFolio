"use client";

import {
  Plus,
  ArrowRightLeft,
  Target,
  FileText,
  PieChart,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const actions = [
  {
    title: "New Investment",
    description: "Invest in funds",
    icon: Plus,
    variant: "default" as const,
  },
  {
    title: "Start SIP",
    description: "Systematic investment",
    icon: ArrowRightLeft,
    variant: "secondary" as const,
  },
  {
    title: "Set Goals",
    description: "Financial goals",
    icon: Target,
    variant: "secondary" as const,
  },
  {
    title: "Tax Report",
    description: "Capital gains",
    icon: FileText,
    variant: "secondary" as const,
  },
  {
    title: "Rebalance",
    description: "Optimize portfolio",
    icon: PieChart,
    variant: "secondary" as const,
  },
];

export function QuickActions() {
  return (
    <Card className="border-border bg-card">
      <CardHeader className="pb-3">
        <CardTitle className="text-base sm:text-lg font-semibold text-foreground">
          Quick Actions
        </CardTitle>
        <p className="text-xs sm:text-sm text-muted-foreground">
          Common tasks and shortcuts
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-3">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant}
              className={`h-auto flex-col items-start gap-1.5 sm:gap-2 p-3 sm:p-4 text-left ${
                action.variant === "default"
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border hover:border-primary/50"
              }`}
            >
              <action.icon className="h-4 w-4 sm:h-5 sm:w-5" />
              <div className="w-full">
                <p className="font-medium text-xs sm:text-sm truncate">
                  {action.title}
                </p>
                <p
                  className={`text-[10px] sm:text-xs truncate ${action.variant === "default" ? "text-primary-foreground/70" : "text-muted-foreground"}`}
                >
                  {action.description}
                </p>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
