'use client';

import { Card, List, Tag, Alert, Space } from 'antd';
import { WarningOutlined, ToolOutlined } from '@ant-design/icons';
import type { MaintenanceAlert, BookingConflict } from '@/types/vehicle';

interface AlertsSectionProps {
  maintenanceAlerts: MaintenanceAlert[];
  bookingConflicts: BookingConflict[];
}

const AlertsSection = ({ maintenanceAlerts, bookingConflicts }: AlertsSectionProps) => {
  return (
    <Card title="アラート" size="small">
      <div style={{ marginBottom: 16 }}>
        <Alert
          message="整備予定車両"
          description={`${maintenanceAlerts.length}件の整備が予定されています`}
          type="warning"
          showIcon
          icon={<ToolOutlined />}
          style={{ marginBottom: 8 }}
        />
        <List
          size="small"
          dataSource={maintenanceAlerts}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={`${item.vehicle_code} - ${item.vehicle_name}`}
                description={
                  <Space>
                    <Tag color="orange">{item.maintenance_date}</Tag>
                    <span>{item.description}</span>
                  </Space>
                }
              />
            </List.Item>
          )}
        />
      </div>
      <div>
        <Alert
          message="予約競合"
          description={`${bookingConflicts.length}件の予約競合が検出されました`}
          type="error"
          showIcon
          icon={<WarningOutlined />}
          style={{ marginBottom: 8 }}
        />
        <List
          size="small"
          dataSource={bookingConflicts}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={`${item.vehicle_code} - ${item.date}`}
                description={`${item.user1} と ${item.user2} の予約が重複`}
              />
            </List.Item>
          )}
        />
      </div>
    </Card>
  );
};

export default AlertsSection;
