"use client";

import { useState } from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const generateChartData = (period: string) => {
  const data = [];
  const points =
    period === "1W"
      ? 7
      : period === "1M"
        ? 30
        : period === "3M"
          ? 90
          : period === "6M"
            ? 180
            : period === "1Y"
              ? 365
              : 730;
  let value = 2000000;

  for (let i = 0; i < points; i++) {
    value += (Math.random() - 0.45) * 20000;
    value = Math.max(value, 1800000);
    data.push({
      date: new Date(
        Date.now() - (points - i) * 24 * 60 * 60 * 1000
      ).toLocaleDateString("en-IN", {
        month: "short",
        day: "numeric",
      }),
      value: Math.round(value),
    });
  }
  return data;
};

const timeRanges = ["1W", "1M", "3M", "6M", "1Y", "ALL"];

export function PortfolioChart() {
  const [activeRange, setActiveRange] = useState("1Y");
  const data = generateChartData(activeRange);

  const formatValue = (value: number) => {
    if (value >= 100000) {
      return `₹${(value / 100000).toFixed(2)}L`;
    }
    return `₹${value.toLocaleString("en-IN")}`;
  };

  return (
    <Card className="border-border bg-card">
      <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4">
        <div>
          <CardTitle className="text-base sm:text-lg font-semibold text-foreground">
            Portfolio Performance
          </CardTitle>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
            Track your investment growth over time
          </p>
        </div>
        <div className="flex gap-1 rounded-lg bg-secondary p-1 overflow-x-auto">
          {timeRanges.map((range) => (
            <Button
              key={range}
              variant={activeRange === range ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveRange(range)}
              className={`h-7 px-2 sm:px-3 text-xs font-medium shrink-0 ${
                activeRange === range
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {range}
            </Button>
          ))}
        </div>
      </CardHeader>
      <CardContent className="pb-4 px-2 sm:px-6">
        <div className="h-[250px] sm:h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="portfolioGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="0%"
                    stopColor="hsl(160, 84%, 39%)"
                    stopOpacity={0.3}
                  />
                  <stop
                    offset="100%"
                    stopColor="hsl(160, 84%, 39%)"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="date"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }}
                tickMargin={10}
                interval="preserveStartEnd"
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }}
                tickFormatter={formatValue}
                tickMargin={5}
                width={55}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border border-border bg-popover px-3 py-2 shadow-lg">
                        <p className="text-xs text-muted-foreground">
                          {payload[0].payload.date}
                        </p>
                        <p className="text-sm font-semibold text-foreground">
                          {formatValue(payload[0].value as number)}
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="hsl(160, 84%, 39%)"
                strokeWidth={2}
                fill="url(#portfolioGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
