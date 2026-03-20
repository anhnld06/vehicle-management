'use client';

import { Card } from 'antd';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

interface UsageDataItem {
  month: string;
  usage: number;
}

interface UsageLineChartProps {
  data: UsageDataItem[];
}

const UsageLineChart = ({ data }: UsageLineChartProps) => {
  return (
    <Card title="利用状況（月別）" size="small">
      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="month" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip formatter={(value: number) => [`${value}回`, '利用回数']} />
          <Legend />
          <Line
            type="monotone"
            dataKey="usage"
            name="利用回数"
            stroke="#f05440"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default UsageLineChart;
