import type { Metadata } from 'next';
import AntdProvider from '@/components/providers/AntdProvider';
import AppLayout from '@/components/layout/AppLayout';
import './globals.css';

export const metadata: Metadata = {
  title: '車両管理システム | Vehicle Management System',
  description: '日本企業向け車両管理ダッシュボード',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <AntdProvider>
          <AppLayout>{children}</AppLayout>
        </AntdProvider>
      </body>
    </html>
  );
}
