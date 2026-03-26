'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { Card, List, Tag, Alert, Space, Button, Tooltip } from 'antd';
import { WarningOutlined, ToolOutlined, ForwardOutlined } from '@ant-design/icons';
import type { MaintenanceAlert, BookingConflict } from '@/types/vehicle';

const DASHBOARD_MAINTENANCE_PREVIEW = 5;

interface AlertsSectionProps {
  maintenanceAlerts: MaintenanceAlert[];
  bookingConflicts: BookingConflict[];
}

function sortByMaintenanceDateAsc(alerts: MaintenanceAlert[]) {
  return [...alerts].sort(
    (a, b) => new Date(a.maintenance_date).getTime() - new Date(b.maintenance_date).getTime(),
  );
}

/** maintenance_date は YYYY-MM-DD。当日 0 時より前なら期限超過 */
function isMaintenanceOverdue(maintenanceDate: string): boolean {
  const parts = maintenanceDate.split('-').map(Number);
  if (parts.length !== 3 || parts.some(Number.isNaN)) return false;
  const [y, m, d] = parts;
  const scheduled = new Date(y, m - 1, d);
  scheduled.setHours(0, 0, 0, 0);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return scheduled.getTime() < today.getTime();
}

const AlertsSection = ({ maintenanceAlerts, bookingConflicts }: AlertsSectionProps) => {
  const sortedMaintenance = useMemo(() => sortByMaintenanceDateAsc(maintenanceAlerts), [maintenanceAlerts]);
  const previewItems = useMemo(
    () => sortedMaintenance.slice(0, DASHBOARD_MAINTENANCE_PREVIEW),
    [sortedMaintenance],
  );
  const remainingMaintenance = Math.max(0, maintenanceAlerts.length - previewItems.length);

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
          className="dashboard-alerts-maintenance"
          size="small"
          dataSource={previewItems}
          renderItem={(item) => {
            const overdue = isMaintenanceOverdue(item.maintenance_date);
            const titleLine = `${item.vehicle_code} - ${item.vehicle_name}`;
            return (
              <List.Item>
                <List.Item.Meta
                  title={
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 8,
                        width: '100%',
                        maxWidth: '100%',
                        minWidth: 0,
                      }}
                    >
                      <Tooltip title={titleLine}>
                        <span
                          style={{
                            display: 'block',
                            flex: 1,
                            minWidth: 0,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {titleLine}
                        </span>
                      </Tooltip>
                      {overdue ? (
                        <Tag color="error" style={{ flexShrink: 0, marginInlineEnd: 0 }}>
                          超過
                        </Tag>
                      ) : null}
                    </div>
                  }
                  description={
                    <Space wrap>
                      <Tag color={overdue ? 'error' : 'orange'}>{item.maintenance_date}</Tag>
                      <span>{item.description}</span>
                    </Space>
                  }
                />
              </List.Item>
            );
          }}
        />
        {maintenanceAlerts.length > 0 ? (
          <Link href="/maintenance" style={{ display: 'block', marginTop: 8, textAlign: 'right' }}>
            <Button type="link" icon={<ForwardOutlined />} style={{ padding: 0, height: 'auto' }}>
              整備予定の一覧へ
            </Button>
          </Link>
        ) : null}
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
