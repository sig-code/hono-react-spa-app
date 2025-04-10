import React from 'react';
import { LineChart as MantineLineChart, LineChartProps as MantineLineChartProps } from '@mantine/charts';

export interface LineChartProps extends MantineLineChartProps {
  // 追加のプロパティがあれば定義
}

export function LineChart(props: LineChartProps) {
  return <MantineLineChart {...props} />;
}
