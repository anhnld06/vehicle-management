'use client';

import { Card, Result, Button } from 'antd';
import { useRouter } from 'next/navigation';

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  const router = useRouter();
  const message = description ?? 'この機能は今後開発予定です';

  return (
    <div>
      <Card>
        <Result
          status="info"
          title={title}
          subTitle={message}
          extra={
            <Button type="primary" onClick={() => router.push('/')}>
              ダッシュボードに戻る
            </Button>
          }
        />
      </Card>
    </div>
  );
}
