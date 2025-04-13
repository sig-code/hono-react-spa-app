import {
  LineChart as MantineLineChart,
  type LineChartProps as MantineLineChartProps,
} from '@mantine/charts'
import React from 'react'

export interface LineChartProps extends MantineLineChartProps {
  // 追加のプロパティがあれば定義
}

export function LineChart(props: LineChartProps) {
  return <MantineLineChart {...props} />
}
