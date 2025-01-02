"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  views: {
    label: "кол-во",
  },
  new_users: {
    label: "Пользователей",
    color: "hsl(var(--chart-1))",
  },
  new_hosts: {
    label: "Продаж",
    color: "hsl(var(--chart-2))",
  },
  requests: {
    label: "Запросов",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

interface ChartData {
  date: string;
  views: number;
  new_users: number;
  new_hosts: number;
  requests: number;
};

export function MainChart() {
  const [chartData, setChartData] = React.useState<ChartData[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("new_users");

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch("https://api.hikka.host/api/statistic");
        if (!response.ok) {
          throw new Error(`Ошибка загрузки данных: ${response.statusText}`);
        }
        const data = await response.json();
        setChartData(data);
      } catch (err: any) {
        setError(err.message || "Неизвестная ошибка");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const total = React.useMemo(
    () =>
      chartData.reduce(
        (acc, curr) => ({
          views: acc.views + curr.views,
          new_users: acc.new_users + curr.new_users,
          new_hosts: acc.new_hosts + curr.new_hosts,
          requests: acc.requests + curr.requests,
        }),
        { views: 0, new_users: 0, new_hosts: 0, requests: 0 }
      ),
    [chartData]
  );

  if (loading) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    return <p className="text-red-500">Ошибка: {error}</p>;
  }

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex">
          {["new_users", "new_hosts", "requests"].map((key) => {
            const chart = key as keyof typeof chartConfig;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-l px-6 py-4 text-left first:border-l-0 data-[active=true]:bg-muted/50 sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-sm font-bold leading-none sm:text-3xl">
                  {total[chart].toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("ru-RU", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("ru-RU", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}