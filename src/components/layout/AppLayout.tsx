'use client';

import { useMemo, useState } from 'react';
import { Layout, Menu, Typography, Avatar, Dropdown, Space, message, theme } from 'antd';
import type { MenuProps } from 'antd';
import {
  DashboardOutlined,
  CarOutlined,
  CalendarOutlined,
  ToolOutlined,
  SettingOutlined,
  UserOutlined,
  LogoutOutlined,
  SunOutlined,
  MoonOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAppTheme } from '@/components/providers/AntdProvider';

const { Header, Sider, Content } = Layout;
const { Text } = Typography;

const menuItems = [
  { key: '/', icon: <DashboardOutlined />, label: <Link href="/">ダッシュボード</Link> },
  { key: '/vehicles', icon: <CarOutlined />, label: <Link href="/vehicles">車両管理</Link> },
  { key: '/bookings', icon: <CalendarOutlined />, label: <Link href="/bookings">予約管理</Link> },
  { key: '/maintenance', icon: <ToolOutlined />, label: <Link href="/maintenance">整備管理</Link> },
  { key: '/settings', icon: <SettingOutlined />, label: <Link href="/settings">設定</Link> },
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();
  const { mode, setMode } = useAppTheme();
  const { token } = theme.useToken();

  const userMenuItems = useMemo<MenuProps['items']>(
    () => [
      {
        key: 'profile',
        icon: <UserOutlined />,
        label: <Link href="/settings">プロフィール</Link>,
      },
      {
        key: 'account',
        icon: <SettingOutlined />,
        label: <Link href="/settings">アカウント設定</Link>,
      },
      { type: 'divider' },
      {
        key: 'theme-toggle',
        icon: mode === 'light' ? <MoonOutlined /> : <SunOutlined />,
        label: mode === 'light' ? 'ダークモード' : 'ライトモード',
      },
      { type: 'divider' },
      {
        key: 'logout',
        icon: <LogoutOutlined />,
        label: 'ログアウト',
        danger: true,
      },
    ],
    [mode],
  );

  return (
    <Layout style={{ height: '100vh', overflow: 'hidden', display: 'flex' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        width={220}
        theme={mode === 'dark' ? 'dark' : 'light'}
        style={{ overflow: 'auto', flexShrink: 0 }}
      >
        <div
          style={{
            height: 64,
            display: 'flex',
            alignItems: 'center',
            justifyContent: collapsed ? 'center' : 'flex-start',
            padding: collapsed ? 8 : '0 16px',
            borderBottom: `1px solid ${token.colorBorderSecondary}`,
            gap: 12,
          }}
        >
          <img
            src="/images/1.png"
            alt="ANTFORD"
            width={collapsed ? 40 : 48}
            height={collapsed ? 40 : 48}
            style={{ objectFit: 'contain', flexShrink: 0 }}
          />
          {!collapsed && (
            <Text strong style={{ fontSize: 16 }}>
              車両管理システム
            </Text>
          )}
        </div>
        <Menu
          mode="inline"
          selectedKeys={[pathname]}
          items={menuItems}
          style={{ height: 'calc(100vh - 64px)', borderRight: 0, paddingTop: 16 }}
        />
      </Sider>
      <Layout style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Header
          style={{
            padding: '0 24px',
            background: token.colorBgContainer,
            borderBottom: `1px solid ${token.colorBorderSecondary}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            flexShrink: 0,
          }}
        >
          <Dropdown
            menu={{
              items: userMenuItems,
              onClick: ({ key }) => {
                if (key === 'logout') {
                  message.info('デモ環境のためログアウトは無効です');
                  return;
                }
                if (key === 'theme-toggle') {
                  setMode(mode === 'light' ? 'dark' : 'light');
                }
              },
            }}
            placement="bottomRight"
            trigger={['click']}
          >
            <Space
              size={12}
              style={{ cursor: 'pointer', userSelect: 'none' }}
              role="button"
              tabIndex={0}
              aria-haspopup="menu"
              aria-label="ユーザーメニュー"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  (e.currentTarget as HTMLElement).click();
                }
              }}
            >
              <Text type="secondary">管理者</Text>
              <Avatar
                src="/images/avt.png"
                alt="管理者"
                size="default"
                style={{ border: `2px solid ${token.colorBorder}` }}
              />
            </Space>
          </Dropdown>
        </Header>
        <Content
          style={{
            margin: 0,
            flex: 1,
            minHeight: 0,
            overflow: 'auto',
            background: token.colorBgLayout,
            padding: 24,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
