"use client";

import { TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const holdings = [
  {
    name: "Nifty 50 Index Fund",
    category: "Large Cap",
    invested: "₹5,00,000",
    current: "₹5,85,420",
    returns: "+17.08%",
    returnsType: "positive",
    units: "1,234.56",
    nav: "₹474.23",
  },
  {
    name: "HDFC Mid-Cap Fund",
    category: "Mid Cap",
    invested: "₹3,50,000",
    current: "₹4,12,340",
    returns: "+17.81%",
    returnsType: "positive",
    units: "892.34",
    nav: "₹462.12",
  },
  {
    name: "Axis Small Cap Fund",
    category: "Small Cap",
    invested: "₹2,00,000",
    current: "₹2,45,670",
    returns: "+22.84%",
    returnsType: "positive",
    units: "678.90",
    nav: "₹361.87",
  },
  {
    name: "SBI Blue Chip Fund",
    category: "Large Cap",
    invested: "₹4,00,000",
    current: "₹4,35,210",
    returns: "+8.80%",
    returnsType: "positive",
    units: "1,056.78",
    nav: "₹411.85",
  },
  {
    name: "ICICI Prudential Bond",
    category: "Debt",
    invested: "₹2,50,000",
    current: "₹2,42,340",
    returns: "-3.06%",
    returnsType: "negative",
    units: "5,123.45",
    nav: "₹47.31",
  },
];

export function HoldingsTable() {
  return (
    <Card className="border-border bg-card">
      <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <CardTitle className="text-base sm:text-lg font-semibold text-foreground">
            Your Holdings
          </CardTitle>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
            Overview of your mutual fund investments
          </p>
        </div>
        <a
          href="#"
          className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          View all
        </a>
      </CardHeader>
      <CardContent className="px-0 sm:px-6">
        {/* Desktop Table View */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-3 pl-6 sm:pl-0 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Fund Name
                </th>
                <th className="pb-3 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Invested
                </th>
                <th className="pb-3 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Current
                </th>
                <th className="pb-3 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Returns
                </th>
                <th className="pb-3 pr-6 sm:pr-0 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground hidden lg:table-cell">
                  Units
                </th>
                <th className="pb-3 pr-6 sm:pr-0 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground hidden lg:table-cell">
                  NAV
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {holdings.map((holding, index) => (
                <tr
                  key={index}
                  className="group transition-colors hover:bg-secondary/50"
                >
                  <td className="py-4 pl-6 sm:pl-0">
                    <div>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors text-sm">
                        {holding.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {holding.category}
                      </p>
                    </div>
                  </td>
                  <td className="py-4 text-right font-medium text-foreground text-sm">
                    {holding.invested}
                  </td>
                  <td className="py-4 text-right font-medium text-foreground text-sm">
                    {holding.current}
                  </td>
                  <td className="py-4 text-right">
                    <span
                      className={`inline-flex items-center gap-1 font-medium text-sm ${
                        holding.returnsType === "positive"
                          ? "text-primary"
                          : "text-destructive"
                      }`}
                    >
                      {holding.returnsType === "positive" ? (
                        <TrendingUp className="h-3.5 w-3.5" />
                      ) : (
                        <TrendingDown className="h-3.5 w-3.5" />
                      )}
                      {holding.returns}
                    </span>
                  </td>
                  <td className="py-4 pr-6 sm:pr-0 text-right text-sm text-muted-foreground hidden lg:table-cell">
                    {holding.units}
                  </td>
                  <td className="py-4 pr-6 sm:pr-0 text-right text-sm text-muted-foreground hidden lg:table-cell">
                    {holding.nav}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="sm:hidden divide-y divide-border">
          {holdings.map((holding, index) => (
            <div key={index} className="px-4 py-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-medium text-foreground text-sm">
                    {holding.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {holding.category}
                  </p>
                </div>
                <span
                  className={`inline-flex items-center gap-1 font-medium text-sm ${
                    holding.returnsType === "positive"
                      ? "text-primary"
                      : "text-destructive"
                  }`}
                >
                  {holding.returnsType === "positive" ? (
                    <TrendingUp className="h-3.5 w-3.5" />
                  ) : (
                    <TrendingDown className="h-3.5 w-3.5" />
                  )}
                  {holding.returns}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <p className="text-muted-foreground">Invested</p>
                  <p className="font-medium text-foreground">
                    {holding.invested}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-muted-foreground">Current</p>
                  <p className="font-medium text-foreground">
                    {holding.current}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
