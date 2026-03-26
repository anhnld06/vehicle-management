'use client';

import { Card } from 'antd';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

interface BookingDataItem {
  vehicle: string;
  count: number;
}

interface BookingBarChartProps {
  data: BookingDataItem[];
}

const BookingBarChart = ({ data }: BookingBarChartProps) => {
  return (
    <Card title="予約頻度（上位車両）" size="small">
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="vehicle" tick={{ fontSize: 11 }} interval={0} angle={-28} textAnchor="end" />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip formatter={(value: number) => [`${value}回`, '予約回数']} />
          <Legend />
          <Bar dataKey="count" name="予約回数" fill="#67b7dc" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default BookingBarChart;
