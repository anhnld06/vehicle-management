'use client';

import { useState, useMemo } from 'react';
import { Card, Table, Input, DatePicker, Tag, Space } from 'antd';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import type { ColumnsType } from 'antd/es/table';
import type { Vehicle, VehicleStatus } from '@/types/vehicle';

const { RangePicker } = DatePicker;

const statusColors: Record<VehicleStatus, string> = {
  使用中: 'blue',
  利用可能: 'green',
  整備中: 'orange',
  予約済み: 'purple',
};

interface VehicleTableProps {
  data: Vehicle[];
}

const VehicleTable = ({ data }: VehicleTableProps) => {
  const [searchText, setSearchText] = useState('');
  const [dateRange, setDateRange] = useState<[Dayjs | null, Dayjs | null] | null>(null);

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const matchesSearch =
        item.vehicle_code.toLowerCase().includes(searchText.toLowerCase()) ||
        item.vehicle_name.toLowerCase().includes(searchText.toLowerCase());
      if (!matchesSearch) return false;

      if (dateRange?.[0] && dateRange?.[1]) {
        const start = dateRange[0].startOf('day');
        const end = dateRange[1].endOf('day');
        const used = dayjs(item.last_used_date, 'YYYY-MM-DD', true);
        if (!used.isValid()) return false;
        if (used.isBefore(start) || used.isAfter(end)) return false;
      }

      return true;
    });
  }, [data, searchText, dateRange]);

  const columns: ColumnsType<Vehicle> = [
    {
      title: '車両コード',
      dataIndex: 'vehicle_code',
      key: 'vehicle_code',
      sorter: (a, b) => a.vehicle_code.localeCompare(b.vehicle_code),
      width: 120,
    },
    {
      title: '車両名',
      dataIndex: 'vehicle_name',
      key: 'vehicle_name',
      sorter: (a, b) => a.vehicle_name.localeCompare(b.vehicle_name),
      width: 280,
      ellipsis: { showTitle: true },
    },
    {
      title: 'ステータス',
      dataIndex: 'status',
      key: 'status',
      width: 130,
      render: (status: VehicleStatus) => <Tag color={statusColors[status]}>{status}</Tag>,
      filters: [
        { text: '使用中', value: '使用中' },
        { text: '利用可能', value: '利用可能' },
        { text: '整備中', value: '整備中' },
        { text: '予約済み', value: '予約済み' },
      ],
      onFilter: (value, record) => record.status === value,
    },
    {
      title: '最終利用日',
      dataIndex: 'last_used_date',
      key: 'last_used_date',
      sorter: (a, b) => a.last_used_date.localeCompare(b.last_used_date),
      width: 140,
    },
  ];

  return (
    <Card
      title="車両一覧"
      size="small"
      extra={
        <Space wrap>
          <Input.Search
            placeholder="車両コード・車両名で検索"
            allowClear
            value={searchText}
            onSearch={setSearchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ width: 220 }}
          />
          <RangePicker
            allowClear
            value={dateRange}
            onChange={(dates) => setDateRange(dates)}
            placeholder={['開始日', '終了日']}
            style={{ width: 250 }}
          />
        </Space>
      }
    >
      <Table<Vehicle>
        tableLayout="fixed"
        columns={columns}
        dataSource={filteredData}
        rowKey="id"
        pagination={{
          defaultPageSize: 10,
          showSizeChanger: true,
          showTotal: (total) => `全 ${total} 件`,
          pageSizeOptions: [10, 20, 50],
          hideOnSinglePage: false,
        }}
        size="small"
      />
    </Card>
  );
};

export default VehicleTable;
