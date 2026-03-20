'use client';

import { Card, Row, Col, Statistic } from 'antd';
import { CarOutlined, CheckCircleOutlined, ToolOutlined } from '@ant-design/icons';

interface KPISummaryProps {
  total: number;
  inUse: number;
  available: number;
  underMaintenance: number;
}

const KPISummary = ({ total, inUse, available, underMaintenance }: KPISummaryProps) => {
  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={12} lg={6}>
        <Card size="small">
          <Statistic
            title="車両総数"
            value={total}
            prefix={<CarOutlined />}
          />
        </Card>
      </Col>
      <Col xs={24} sm={12} lg={6}>
        <Card size="small">
          <Statistic
            title="使用中"
            value={inUse}
            prefix={<CarOutlined style={{ color: '#1890ff' }} />}
          />
        </Card>
      </Col>
      <Col xs={24} sm={12} lg={6}>
        <Card size="small">
          <Statistic
            title="利用可能"
            value={available}
            prefix={<CheckCircleOutlined style={{ color: '#52c41a' }} />}
          />
        </Card>
      </Col>
      <Col xs={24} sm={12} lg={6}>
        <Card size="small">
          <Statistic
            title="整備中"
            value={underMaintenance}
            prefix={<ToolOutlined style={{ color: '#faad14' }} />}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default KPISummary;
