import { useRef, useEffect } from "react";
import { Chart, ChartConfiguration } from "chart.js/auto";

interface ChartData {
  centerValue: string;
  dates: string[];
  dataPoints: number[];
}

interface ChartProps {
  chartData: ChartData;
  updateTrigger?: number;
}

const LineChart = ({ chartData, updateTrigger }:ChartProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;

    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, "rgba(0, 111, 195, 0.5)");
    gradient.addColorStop(1, "rgba(16, 32, 53, 1)");

    const config: ChartConfiguration<"line", number[], string> = {
      type: "line",
      data: {
        labels: chartData.dates,
        datasets: [
          {
            label: "Доходность",
            data: chartData.dataPoints,
            backgroundColor: gradient,
            borderColor: "#005FA7",
            pointBackgroundColor: "#89C5F0",
            pointHitRadius: 20,
            pointHoverRadius: 5,
            borderWidth: 1,
            tension: 0.6,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          x: {
            ticks: {
              color: "#495D73",
              padding: 20,
            },
            grid: {
              color: "rgba(73, 93, 115, 0.3)",
            },
          },
          y: {
            ticks: {
              color: "transparent",
            },
            grid: {
              color: "rgba(73, 93, 115, 0.3)",
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    };

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }
    chartInstanceRef.current = new Chart(ctx, config);
  }, [chartData, updateTrigger]);

  return (
    <div className="w-full bg-[#102035] relative">
      <span className="text-[#5FA753] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[20px]">
        {chartData.centerValue}
      </span>
      <canvas ref={canvasRef} className="w-full block" />
    </div>
  );
};

export default LineChart;
