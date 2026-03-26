'use client';

import { Typography, theme } from 'antd';
import {
  KPISummary,
  StatusPieChart,
  UsageLineChart,
  BookingBarChart,
  VehicleTable,
  AlertsSection,
} from '@/components/dashboard';
import {
  mockVehicles,
  statusDistribution,
  usageOverTime,
  bookingFrequency,
  maintenanceAlerts,
  bookingConflicts,
} from '@/data/mockData';

const { Title } = Typography;

function getKPIFromVehicles(vehicles: typeof mockVehicles) {
  const total = vehicles.length;
  const inUse = vehicles.filter((v) => v.status === '使用中').length;
  const available = vehicles.filter((v) => v.status === '利用可能').length;
  const underMaintenance = vehicles.filter((v) => v.status === '整備中').length;
  return { total, inUse, available, underMaintenance };
}

export default function DashboardPage() {
  const kpi = getKPIFromVehicles(mockVehicles);
  const { token } = theme.useToken();

  return (
    <main
      style={{
        maxWidth: 1400,
        margin: '0 auto',
        background: token.colorBgContainer,
        padding: 24,
        borderRadius: token.borderRadiusLG,
      }}
    >
      <Title level={3} style={{ marginBottom: 24, fontWeight: 600 }}>
        車両管理ダッシュボード
      </Title>

      {/* KPI Summary */}
      <section style={{ marginBottom: 24 }}>
        <KPISummary
          total={kpi.total}
          inUse={kpi.inUse}
          available={kpi.available}
          underMaintenance={kpi.underMaintenance}
        />
      </section>

      {/* Charts Row */}
      <section style={{ marginBottom: 24 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 16,
          }}
        >
          <StatusPieChart data={statusDistribution} />
          <UsageLineChart data={usageOverTime} />
          <BookingBarChart data={bookingFrequency} />
        </div>
      </section>

      {/* Vehicle Table & Alerts */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) 360px',
          gap: 16,
          alignItems: 'start',
        }}
        className="dashboard-main-grid"
      >
        <VehicleTable data={mockVehicles} />
        <AlertsSection
          maintenanceAlerts={maintenanceAlerts}
          bookingConflicts={bookingConflicts}
        />
      </section>
    </main>
  );
}
