"use client";

import { useMemo } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Slider } from "@/components/ui/slider";
import { useSIPCalculator } from "@/hooks/use-sip-calculator";
import { formatCurrency, formatCurrencyFull } from "@/utils/format";
import { Calculator, TrendingUp, Wallet, PiggyBank } from "lucide-react";

export function SIPCalculator() {
  const {
    monthlyInvestment,
    setMonthlyInvestment,
    expectedReturn,
    setExpectedReturn,
    timeHorizon,
    setTimeHorizon,
    result,
  } = useSIPCalculator();

  const metrics = useMemo(
    () => [
      {
        label: "Total Invested",
        value: formatCurrency(result.totalInvested),
        fullValue: formatCurrencyFull(result.totalInvested),
        icon: Wallet,
        color: "text-blue-400",
        bgColor: "bg-blue-500/10",
      },
      {
        label: "Expected Returns",
        value: formatCurrency(result.futureValue),
        fullValue: formatCurrencyFull(result.futureValue),
        icon: TrendingUp,
        color: "text-primary",
        bgColor: "bg-primary/10",
      },
      {
        label: "Wealth Gained",
        value: formatCurrency(result.wealthGained),
        fullValue: formatCurrencyFull(result.wealthGained),
        icon: PiggyBank,
        color: "text-amber-400",
        bgColor: "bg-amber-500/10",
      },
    ],
    [result]
  );

  return (
    <div className="bg-card border border-border rounded-xl p-4 sm:p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <Calculator className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            SIP Calculator
          </h2>
          <p className="text-xs text-muted-foreground">
            Plan your wealth growth
          </p>
        </div>
      </div>

      {/* Control Panel */}
      <div className="space-y-6 mb-8">
        {/* Monthly Investment Slider */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-medium text-foreground">
              Monthly Investment
            </label>
            <div className="bg-muted/50 px-3 py-1.5 rounded-lg">
              <span className="text-sm font-semibold text-primary">
                ₹{monthlyInvestment.toLocaleString("en-IN")}
              </span>
            </div>
          </div>
          <Slider
            value={[monthlyInvestment]}
            onValueChange={(value) => setMonthlyInvestment(value[0])}
            min={500}
            max={100000}
            step={500}
            className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary [&_.bg-primary]:bg-primary"
          />
          <div className="flex justify-between mt-2 text-xs text-muted-foreground">
            <span>₹500</span>
            <span>₹1,00,000</span>
          </div>
        </div>

        {/* Expected Return Slider */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-medium text-foreground">
              Expected Annual Return
            </label>
            <div className="bg-muted/50 px-3 py-1.5 rounded-lg">
              <span className="text-sm font-semibold text-primary">
                {expectedReturn}%
              </span>
            </div>
          </div>
          <Slider
            value={[expectedReturn]}
            onValueChange={(value) => setExpectedReturn(value[0])}
            min={1}
            max={30}
            step={0.5}
            className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary [&_.bg-primary]:bg-primary"
          />
          <div className="flex justify-between mt-2 text-xs text-muted-foreground">
            <span>1%</span>
            <span>30%</span>
          </div>
        </div>

        {/* Time Horizon Slider */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-medium text-foreground">
              Investment Period
            </label>
            <div className="bg-muted/50 px-3 py-1.5 rounded-lg">
              <span className="text-sm font-semibold text-primary">
                {timeHorizon} Years
              </span>
            </div>
          </div>
          <Slider
            value={[timeHorizon]}
            onValueChange={(value) => setTimeHorizon(value[0])}
            min={1}
            max={40}
            step={1}
            className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary [&_.bg-primary]:bg-primary"
          />
          <div className="flex justify-between mt-2 text-xs text-muted-foreground">
            <span>1 Year</span>
            <span>40 Years</span>
          </div>
        </div>
      </div>

      {/* Results Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="bg-muted/30 border border-border rounded-lg p-3 sm:p-4 text-center group hover:border-primary/30 transition-colors"
          >
            <div
              className={`h-8 w-8 rounded-lg ${metric.bgColor} flex items-center justify-center mx-auto mb-2`}
            >
              <metric.icon className={`h-4 w-4 ${metric.color}`} />
            </div>
            <p className="text-xs text-muted-foreground mb-1">{metric.label}</p>
            <p
              className={`text-base sm:text-lg font-bold ${metric.color}`}
              title={metric.fullValue}
            >
              {metric.value}
            </p>
          </div>
        ))}
      </div>

      {/* Growth Chart */}
      <div>
        <h3 className="text-sm font-medium text-foreground mb-4">
          Wealth Growth Projection
        </h3>
        <div className="h-64 sm:h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={result.growthData}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="investedGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="valueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="hsl(var(--border))"
                vertical={false}
              />
              <XAxis
                dataKey="year"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
                tickFormatter={(value) => `Y${value}`}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
                tickFormatter={(value) => formatCurrency(value)}
                width={60}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                }}
                labelStyle={{ color: "hsl(var(--foreground))" }}
                formatter={(value: number, name: string) => [
                  formatCurrencyFull(value),
                  name === "invested" ? "Total Invested" : "Portfolio Value",
                ]}
                labelFormatter={(label) => `Year ${label}`}
              />
              <Legend
                verticalAlign="top"
                height={36}
                formatter={(value) =>
                  value === "invested" ? "Invested Amount" : "Portfolio Value"
                }
              />
              <Area
                type="monotone"
                dataKey="invested"
                stackId="1"
                stroke="#3b82f6"
                strokeWidth={2}
                fill="url(#investedGradient)"
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#10b981"
                strokeWidth={2}
                fill="url(#valueGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
