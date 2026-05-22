"use client";

import { useState, useMemo } from "react";

export interface SIPCalculationResult {
  totalInvested: number;
  futureValue: number;
  wealthGained: number;
  growthData: Array<{
    year: number;
    invested: number;
    value: number;
  }>;
}

export function useSIPCalculator(
  initialMonthly = 10000,
  initialReturn = 12,
  initialYears = 10
) {
  const [monthlyInvestment, setMonthlyInvestment] = useState(initialMonthly);
  const [expectedReturn, setExpectedReturn] = useState(initialReturn);
  const [timeHorizon, setTimeHorizon] = useState(initialYears);

  const result = useMemo<SIPCalculationResult>(() => {
    const monthlyRate = expectedReturn / 100 / 12;
    const totalMonths = timeHorizon * 12;
    const totalInvested = monthlyInvestment * totalMonths;

    // SIP Future Value Formula: P × ({[1 + r]^n – 1} / r) × (1 + r)
    const futureValue =
      monthlyInvestment *
      ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) *
      (1 + monthlyRate);

    const wealthGained = futureValue - totalInvested;

    // Generate year-by-year growth data for chart
    const growthData = [];
    for (let year = 0; year <= timeHorizon; year++) {
      const months = year * 12;
      const invested = monthlyInvestment * months;
      let value = 0;
      if (months > 0) {
        value =
          monthlyInvestment *
          ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
          (1 + monthlyRate);
      }
      growthData.push({
        year,
        invested: Math.round(invested),
        value: Math.round(value),
      });
    }

    return {
      totalInvested: Math.round(totalInvested),
      futureValue: Math.round(futureValue),
      wealthGained: Math.round(wealthGained),
      growthData,
    };
  }, [monthlyInvestment, expectedReturn, timeHorizon]);

  return {
    monthlyInvestment,
    setMonthlyInvestment,
    expectedReturn,
    setExpectedReturn,
    timeHorizon,
    setTimeHorizon,
    result,
  };
}
