'use client';

import { Card } from 'antd';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface ChartDataItem {
  name: string;
  value: number;
  color: string;
}

interface StatusPieChartProps {
  data: ChartDataItem[];
}

const StatusPieChart = ({ data }: StatusPieChartProps) => {
  return (
    <Card title="車両ステータス分布" size="small">
      <ResponsiveContainer width="100%" height={260}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={2}
            dataKey="value"
            nameKey="name"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value: number) => [`${value}台`, '台数']} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default StatusPieChart;
