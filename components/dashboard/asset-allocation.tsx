"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const allocationData = [
  {
    name: "Large Cap",
    value: 40,
    amount: "₹9,82,756",
    color: "hsl(160, 84%, 39%)",
  },
  {
    name: "Mid Cap",
    value: 25,
    amount: "₹6,14,222",
    color: "hsl(200, 70%, 50%)",
  },
  {
    name: "Small Cap",
    value: 15,
    amount: "₹3,68,533",
    color: "hsl(45, 90%, 55%)",
  },
  {
    name: "Debt",
    value: 12,
    amount: "₹2,94,827",
    color: "hsl(280, 60%, 55%)",
  },
  {
    name: "Gold",
    value: 8,
    amount: "₹1,96,551",
    color: "hsl(30, 80%, 55%)",
  },
];

export function AssetAllocation() {
  return (
    <Card className="border-border bg-card">
      <CardHeader className="pb-3">
        <CardTitle className="text-base sm:text-lg font-semibold text-foreground">
          Asset Allocation
        </CardTitle>
        <p className="text-xs sm:text-sm text-muted-foreground">
          Distribution across asset classes
        </p>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          <div className="h-[160px] w-[160px] sm:h-[180px] sm:w-[180px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={allocationData}
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={75}
                  paddingAngle={2}
                  dataKey="value"
                  strokeWidth={0}
                >
                  {allocationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="rounded-lg border border-border bg-popover px-3 py-2 shadow-lg">
                          <p className="text-sm font-medium text-foreground">
                            {data.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {data.value}% {data.amount}
                          </p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="w-full space-y-2 sm:space-y-3">
            {allocationData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div
                    className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-xs sm:text-sm text-foreground">
                    {item.name}
                  </span>
                </div>
                <div className="text-right flex items-center gap-1 sm:gap-2">
                  <span className="text-xs sm:text-sm font-medium text-foreground">
                    {item.value}%
                  </span>
                  <span className="text-[10px] sm:text-xs text-muted-foreground hidden sm:inline">
                    {item.amount}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
