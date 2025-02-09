// src/App.tsx
import React, { useState, useEffect } from "react";
import Header from "./containers/Header/Header";
import Stats from "./containers/Stats/Stats";
import Chart from "./components/Chart/Chart";
import BotList from "./containers/BotList/BotList";
import TimeRange from "./components/TimeRange/TimeRange";
import BottomMenu from "./containers/BottomMenu/BottomMenu";
import initialData from "./data/dashboard.json";

export interface BotType {
  name: string;
  cost: number;
  "24h": number;
  "7d": number;
  "30d": number;
  "60d": number;
  "90d": number;
  all_time: number;
}

interface DashboardData {
  trading_capital: number;
  trading_capital_currency: string;
  balance: number;
  on_hold: number;
  bots: BotType[];
}

export interface ChartData {
  centerValue: string;
  dates: string[];
  dataPoints: number[];
}

const generateRandomChartData = (): ChartData => {
  const dates = ["22.04", "23.04", "24.04", "25.04", "26.04"];
  const dataPoints = dates.map(() => Math.floor(80 + Math.random() * 60));
  const change = dataPoints[dataPoints.length - 1] - dataPoints[0];
  const centerValue = `${change >= 0 ? "+" : ""}${change}%`;
  return { centerValue, dates, dataPoints };
};

const App = () => {
  const [dashboardData, setDashboardData] = useState<DashboardData>(() => {
    const stored = localStorage.getItem("dashboardData");
    return stored ? JSON.parse(stored) : initialData;
  });
  const [timeRange, setTimeRange] = useState<string>(() => {
    return localStorage.getItem("timeRange") || "24h";
  });
  const [selectedBot, setSelectedBot] = useState<number | null>(() => {
    const stored = localStorage.getItem("selectedBot");
    return stored ? parseInt(stored, 10) : null;
  });
  const [chartData, setChartData] = useState<ChartData>(generateRandomChartData());
  const [chartUpdateTrigger, setChartUpdateTrigger] = useState<number>(0);

  useEffect(() => {
    localStorage.setItem("dashboardData", JSON.stringify(dashboardData));
  }, [dashboardData]);

  useEffect(() => {
    localStorage.setItem("timeRange", timeRange);
  }, [timeRange]);

  useEffect(() => {
    if (selectedBot !== null) {
      localStorage.setItem("selectedBot", selectedBot.toString());
    } else {
      localStorage.removeItem("selectedBot");
    }
  }, [selectedBot]);

  const handleTimeRangeChange = (range: string) => {
    setTimeRange(range);
    const newChartData = generateRandomChartData();
    setChartData(newChartData);
    setChartUpdateTrigger((prev) => prev + 1);
  };

  const handleBotSelect = (selectedBotIndex: number) => {
    setSelectedBot(selectedBotIndex);
    const newChartData = generateRandomChartData();
    setChartData(newChartData);
    setChartUpdateTrigger((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="p-[16px] flex-grow">
        <Stats
          capital={dashboardData.trading_capital}
          balance={dashboardData.balance}
          onHold={dashboardData.on_hold}
        />
        <Chart chartData={chartData} updateTrigger={chartUpdateTrigger} />
        <BotList
          bots={dashboardData.bots}
          timeRange={timeRange}
          selectedBot={selectedBot}
          onBotSelect={handleBotSelect}
        />
        <TimeRange onChange={handleTimeRangeChange} />
      </main>
      <BottomMenu />
    </div>
  );
};

export default App;
