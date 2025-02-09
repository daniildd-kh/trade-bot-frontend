import React from "react";
import Header from "./containers/Header/Header";
import Stats from "./containers/Stats/Stats";
import Chart from "./components/Chart/Chart";
import BotList from "./containers/BotList/BotList";
import TimeRange from "./components/TimeRange/TimeRange";
import BottomMenu from "./containers/BottomMenu/BottomMenu";

const data = {
  tradingCapital: 1.00865,
  tradingCurrency: 'BTC',
  balance: 10850,
  onHold: 24000
};

const chartData = {
  centerValue: "+32.6%",
  dates: ["22.04", "23.04", "24.04", "25.04", "26.04"],
  dataPoints: [100, 120, 90, 110, 130],
};

const App = () => {
  return (
    <div>
      <Header />
      <main className="p-[16px]">
      <Stats 
        capital={data.tradingCapital}
        balance={data.balance}
        onHold={data.onHold}
      />
      </main>
      <Chart/>
      <main className="p-[16px]">
        <BotList/>
        <TimeRange onChange={(range) => console.log("Выбран диапазон:", range)} />
      </main>
      <BottomMenu/>
    </div>
  );
};

export default App;
