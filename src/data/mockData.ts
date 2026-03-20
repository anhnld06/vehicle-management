import type { Vehicle, MaintenanceAlert, BookingConflict } from '@/types/vehicle';

export const mockVehicles: Vehicle[] = [
  { id: '1', vehicle_code: 'VH-001', vehicle_name: 'トヨタ プリウス', status: '使用中', last_used_date: '2025-03-20' },
  { id: '2', vehicle_code: 'VH-002', vehicle_name: 'ホンダ フィット', status: '利用可能', last_used_date: '2025-03-18' },
  { id: '3', vehicle_code: 'VH-003', vehicle_name: '日産 リーフ', status: '整備中', last_used_date: '2025-03-15' },
  { id: '4', vehicle_code: 'VH-004', vehicle_name: 'トヨタ アルファード', status: '予約済み', last_used_date: '2025-03-19' },
  { id: '5', vehicle_code: 'VH-005', vehicle_name: 'マツダ CX-5', status: '利用可能', last_used_date: '2025-03-17' },
  { id: '6', vehicle_code: 'VH-006', vehicle_name: 'スバル フォレスター', status: '使用中', last_used_date: '2025-03-20' },
  { id: '7', vehicle_code: 'VH-007', vehicle_name: 'ホンダ ステップワゴン', status: '利用可能', last_used_date: '2025-03-16' },
  { id: '8', vehicle_code: 'VH-008', vehicle_name: 'トヨタ ハイエース', status: '整備中', last_used_date: '2025-03-12' },
  { id: '9', vehicle_code: 'VH-009', vehicle_name: '日産 セレナ', status: '予約済み', last_used_date: '2025-03-19' },
  { id: '10', vehicle_code: 'VH-010', vehicle_name: '三菱 アウトランダー', status: '利用可能', last_used_date: '2025-03-14' },
  { id: '11', vehicle_code: 'VH-011', vehicle_name: 'トヨタ カローラ', status: '使用中', last_used_date: '2025-03-20' },
  { id: '12', vehicle_code: 'VH-012', vehicle_name: 'ホンダ N-BOX', status: '利用可能', last_used_date: '2025-03-18' },
  { id: '13', vehicle_code: 'VH-013', vehicle_name: '日産 ノート', status: '整備中', last_used_date: '2025-03-10' },
  { id: '14', vehicle_code: 'VH-014', vehicle_name: 'トヨタ ランドクルーザー', status: '予約済み', last_used_date: '2025-03-19' },
  { id: '15', vehicle_code: 'VH-015', vehicle_name: 'マツダ デミオ', status: '利用可能', last_used_date: '2025-03-17' },
  { id: '16', vehicle_code: 'VH-016', vehicle_name: 'スバル インプレッサ', status: '使用中', last_used_date: '2025-03-20' },
  { id: '17', vehicle_code: 'VH-017', vehicle_name: 'ホンダ ヴェゼル', status: '利用可能', last_used_date: '2025-03-15' },
  { id: '18', vehicle_code: 'VH-018', vehicle_name: 'トヨタ ヴォクシー', status: '整備中', last_used_date: '2025-03-11' },
  { id: '19', vehicle_code: 'VH-019', vehicle_name: '日産 エクストレイル', status: '予約済み', last_used_date: '2025-03-19' },
  { id: '20', vehicle_code: 'VH-020', vehicle_name: '三菱 デリカ', status: '利用可能', last_used_date: '2025-03-16' },
];

export const statusDistribution = [
  { name: '使用中', value: 5, color: '#1890ff' },
  { name: '利用可能', value: 8, color: '#52c41a' },
  { name: '整備中', value: 3, color: '#faad14' },
  { name: '予約済み', value: 4, color: '#722ed1' },
];

export const usageOverTime = [
  { month: '9月', usage: 120 },
  { month: '10月', usage: 135 },
  { month: '11月', usage: 142 },
  { month: '12月', usage: 128 },
  { month: '1月', usage: 155 },
  { month: '2月', usage: 168 },
  { month: '3月', usage: 145 },
];

export const bookingFrequency = [
  { vehicle: 'VH-001', count: 22 },
  { vehicle: 'VH-002', count: 18 },
  { vehicle: 'VH-004', count: 25 },
  { vehicle: 'VH-005', count: 15 },
  { vehicle: 'VH-006', count: 20 },
  { vehicle: 'VH-009', count: 19 },
  { vehicle: 'VH-011', count: 24 },
  { vehicle: 'VH-014', count: 21 },
];

export const maintenanceAlerts: MaintenanceAlert[] = [
  { id: 'm1', vehicle_code: 'VH-003', vehicle_name: '日産 リーフ', maintenance_date: '2025-03-22', description: '車検期限' },
  { id: 'm2', vehicle_code: 'VH-008', vehicle_name: 'トヨタ ハイエース', maintenance_date: '2025-03-25', description: 'オイル交換' },
  { id: 'm3', vehicle_code: 'VH-013', vehicle_name: '日産 ノート', maintenance_date: '2025-03-28', description: 'タイヤ交換' },
  { id: 'm4', vehicle_code: 'VH-018', vehicle_name: 'トヨタ ヴォクシー', maintenance_date: '2025-03-30', description: '定期点検' },
];

export const bookingConflicts: BookingConflict[] = [
  { id: 'c1', vehicle_code: 'VH-004', date: '2025-03-21', user1: '山田太郎', user2: '佐藤花子' },
  { id: 'c2', vehicle_code: 'VH-009', date: '2025-03-22', user1: '鈴木一郎', user2: '高橋美咲' },
  { id: 'c3', vehicle_code: 'VH-014', date: '2025-03-23', user1: '伊藤健太', user2: '渡辺直樹' },
];
