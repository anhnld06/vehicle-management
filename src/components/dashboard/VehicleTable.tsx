'use client';

import { useState, useMemo } from 'react';
import { Card, Table, Input, Select, Tag, Space } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { Vehicle, VehicleStatus } from '@/types/vehicle';

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
  const [statusFilter, setStatusFilter] = useState<VehicleStatus | undefined>();

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const matchesSearch =
        item.vehicle_code.toLowerCase().includes(searchText.toLowerCase()) ||
        item.vehicle_name.toLowerCase().includes(searchText.toLowerCase());
      const matchesStatus = !statusFilter || item.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [data, searchText, statusFilter]);

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
    },
    {
      title: 'ステータス',
      dataIndex: 'status',
      key: 'status',
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
          <Select
            placeholder="ステータスで絞り込み"
            allowClear
            style={{ width: 160 }}
            onChange={setStatusFilter}
            options={[
              { value: '使用中', label: '使用中' },
              { value: '利用可能', label: '利用可能' },
              { value: '整備中', label: '整備中' },
              { value: '予約済み', label: '予約済み' },
            ]}
          />
        </Space>
      }
    >
      <Table
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
