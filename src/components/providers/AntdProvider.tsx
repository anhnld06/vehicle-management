'use client';

import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import jaJP from 'antd/locale/ja_JP';

export default function AntdProvider({ children }: { children: React.ReactNode }) {
  return (
    <AntdRegistry>
      <ConfigProvider locale={jaJP}>{children}</ConfigProvider>
    </AntdRegistry>
  );
}
