"use client"

import { TrendingUp, TrendingDown, Wallet, PiggyBank, Target, Activity } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const stats = [
  {
    title: "Total Portfolio",
    value: "₹24,56,890",
    change: "+12.4%",
    changeType: "positive",
    icon: Wallet,
    subtitle: "All investments",
  },
  {
    title: "Total Returns",
    value: "₹3,45,670",
    change: "+8.2%",
    changeType: "positive",
    icon: TrendingUp,
    subtitle: "Since inception",
  },
  {
    title: "Active SIPs",
    value: "₹45,000",
    change: "8 SIPs",
    changeType: "neutral",
    icon: PiggyBank,
    subtitle: "Monthly investment",
  },
  {
    title: "Day's P&L",
    value: "₹12,340",
    change: "+0.52%",
    changeType: "positive",
    icon: Activity,
    subtitle: "Today's change",
  },
]

export function PortfolioSummary() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="border-border bg-card transition-colors hover:border-primary/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary">
              <stat.icon className="h-5 w-5 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold tracking-tight text-foreground">{stat.value}</div>
            <div className="mt-1 flex items-center gap-2">
              {stat.changeType === "positive" && (
                <span className="flex items-center gap-1 text-sm font-medium text-primary">
                  <TrendingUp className="h-3.5 w-3.5" />
                  {stat.change}
                </span>
              )}
              {stat.changeType === "negative" && (
                <span className="flex items-center gap-1 text-sm font-medium text-destructive">
                  <TrendingDown className="h-3.5 w-3.5" />
                  {stat.change}
                </span>
              )}
              {stat.changeType === "neutral" && (
                <span className="text-sm font-medium text-muted-foreground">
                  {stat.change}
                </span>
              )}
              <span className="text-xs text-muted-foreground">{stat.subtitle}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
