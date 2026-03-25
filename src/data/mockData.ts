import type { Vehicle, VehicleStatus, MaintenanceAlert, BookingConflict } from '@/types/vehicle';

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
  { id: '21', vehicle_code: 'VH-021', vehicle_name: 'トヨタ ヴィッツ', status: '使用中', last_used_date: '2025-03-20' },
  { id: '22', vehicle_code: 'VH-022', vehicle_name: 'ホンダ フリード', status: '利用可能', last_used_date: '2025-03-18' },
  { id: '23', vehicle_code: 'VH-023', vehicle_name: '日産 キックス', status: '整備中', last_used_date: '2025-03-14' },
  { id: '24', vehicle_code: 'VH-024', vehicle_name: 'マツダ アクセラ', status: '予約済み', last_used_date: '2025-03-19' },
  { id: '25', vehicle_code: 'VH-025', vehicle_name: 'スバル レヴォーグ', status: '使用中', last_used_date: '2025-03-16' },
  { id: '26', vehicle_code: 'VH-026', vehicle_name: 'トヨタ プリウスα', status: '利用可能', last_used_date: '2025-03-17' },
  { id: '27', vehicle_code: 'VH-027', vehicle_name: 'ホンダ オデッセイ', status: '整備中', last_used_date: '2025-03-12' },
  { id: '28', vehicle_code: 'VH-028', vehicle_name: '日産 スカイライン', status: '予約済み', last_used_date: '2025-03-21' },
  { id: '29', vehicle_code: 'VH-029', vehicle_name: '三菱 ミラージュ', status: '利用可能', last_used_date: '2025-03-15' },
  { id: '30', vehicle_code: 'VH-030', vehicle_name: 'いすゞ エルフ', status: '使用中', last_used_date: '2025-03-20' },
  { id: '31', vehicle_code: 'VH-031', vehicle_name: 'トヨタ ヤリス', status: '利用可能', last_used_date: '2025-03-13' },
  { id: '32', vehicle_code: 'VH-032', vehicle_name: 'ホンダ N-VAN', status: '整備中', last_used_date: '2025-03-11' },
  { id: '33', vehicle_code: 'VH-033', vehicle_name: '日産 デイズ', status: '予約済み', last_used_date: '2025-03-22' },
  { id: '34', vehicle_code: 'VH-034', vehicle_name: 'トヨタ クラウン', status: '使用中', last_used_date: '2025-03-18' },
  { id: '35', vehicle_code: 'VH-035', vehicle_name: 'スバル XV', status: '利用可能', last_used_date: '2025-03-16' },
  { id: '36', vehicle_code: 'VH-036', vehicle_name: 'マツダ ロードスター', status: '整備中', last_used_date: '2025-03-10' },
  { id: '37', vehicle_code: 'VH-037', vehicle_name: 'ホンダ ステップワゴン', status: '使用中', last_used_date: '2025-03-19' },
  { id: '38', vehicle_code: 'VH-038', vehicle_name: '日産 セレナ e-POWER', status: '利用可能', last_used_date: '2025-03-12' },
  { id: '39', vehicle_code: 'VH-039', vehicle_name: '三菱 アウトランダー PHEV', status: '整備中', last_used_date: '2025-03-15' },
  { id: '40', vehicle_code: 'VH-040', vehicle_name: 'トヨタ タウンエース', status: '予約済み', last_used_date: '2025-03-23' },
  { id: '41', vehicle_code: 'VH-041', vehicle_name: 'ホンダ CR-V', status: '使用中', last_used_date: '2025-03-17' },
  { id: '42', vehicle_code: 'VH-042', vehicle_name: '日産 ジューク', status: '利用可能', last_used_date: '2025-03-14' },
  { id: '43', vehicle_code: 'VH-043', vehicle_name: 'スバル フォレスター', status: '整備中', last_used_date: '2025-03-09' },
  { id: '44', vehicle_code: 'VH-044', vehicle_name: 'トヨタ ハリアー', status: '使用中', last_used_date: '2025-03-21' },
  { id: '45', vehicle_code: 'VH-045', vehicle_name: 'マツダ CX-30', status: '利用可能', last_used_date: '2025-03-18' },
  { id: '46', vehicle_code: 'VH-046', vehicle_name: 'スバル インプレッサ スポーツ', status: '予約済み', last_used_date: '2025-03-20' },
  { id: '47', vehicle_code: 'VH-047', vehicle_name: 'ホンダ ヴェゼル', status: '利用可能', last_used_date: '2025-03-16' },
  { id: '48', vehicle_code: 'VH-048', vehicle_name: '日産 エルグランド', status: '整備中', last_used_date: '2025-03-13' },
  { id: '49', vehicle_code: 'VH-049', vehicle_name: '三菱 デリカD:5', status: '使用中', last_used_date: '2025-03-22' },
  { id: '50', vehicle_code: 'VH-050', vehicle_name: 'トヨタ ランドクルーザー', status: '予約済み', last_used_date: '2025-03-24' },
  { id: '51', vehicle_code: 'VH-051', vehicle_name: 'ホンダ N-BOX カスタム', status: '使用中', last_used_date: '2025-03-18' },
  { id: '52', vehicle_code: 'VH-052', vehicle_name: '日産 ノート オーラ', status: '利用可能', last_used_date: '2025-03-15' },
  { id: '53', vehicle_code: 'VH-053', vehicle_name: 'マツダ CX-8', status: '整備中', last_used_date: '2025-03-11' },
  { id: '54', vehicle_code: 'VH-054', vehicle_name: 'スバル レガシィ', status: '使用中', last_used_date: '2025-03-19' },
  { id: '55', vehicle_code: 'VH-055', vehicle_name: 'トヨタ ヴォクシー', status: '利用可能', last_used_date: '2025-03-16' },
  { id: '56', vehicle_code: 'VH-056', vehicle_name: 'ホンダ ストリーム', status: '予約済み', last_used_date: '2025-03-20' },
  { id: '57', vehicle_code: 'VH-057', vehicle_name: '日産 リーフ', status: '利用可能', last_used_date: '2025-03-12' },
  { id: '58', vehicle_code: 'VH-058', vehicle_name: '三菱 eKクロス', status: '整備中', last_used_date: '2025-03-10' },
  { id: '59', vehicle_code: 'VH-059', vehicle_name: 'トヨタ カムリ', status: '使用中', last_used_date: '2025-03-21' },
  { id: '60', vehicle_code: 'VH-060', vehicle_name: 'ホンダ フィット', status: '利用可能', last_used_date: '2025-03-14' },
  { id: '61', vehicle_code: 'VH-061', vehicle_name: '日産 エクストレイル', status: '予約済み', last_used_date: '2025-03-23' },
  { id: '62', vehicle_code: 'VH-062', vehicle_name: 'スバル レヴォーグ', status: '整備中', last_used_date: '2025-03-08' },
  { id: '63', vehicle_code: 'VH-063', vehicle_name: 'マツダ MAZDA3', status: '使用中', last_used_date: '2025-03-18' },
  { id: '64', vehicle_code: 'VH-064', vehicle_name: 'トヨタ スープラ', status: '利用可能', last_used_date: '2025-03-17' },
  { id: '65', vehicle_code: 'VH-065', vehicle_name: 'ホンダ アコード', status: '予約済み', last_used_date: '2025-03-25' },
  { id: '66', vehicle_code: 'VH-066', vehicle_name: '日産 マーチ', status: '利用可能', last_used_date: '2025-03-13' },
  { id: '67', vehicle_code: 'VH-067', vehicle_name: '三菱 ディアマンテ', status: '整備中', last_used_date: '2025-03-09' },
  { id: '68', vehicle_code: 'VH-068', vehicle_name: 'スバル BRZ', status: '使用中', last_used_date: '2025-03-22' },
  { id: '69', vehicle_code: 'VH-069', vehicle_name: 'トヨタ アルファード', status: '利用可能', last_used_date: '2025-03-19' },
  { id: '70', vehicle_code: 'VH-070', vehicle_name: 'ホンダ フリード スパイク', status: '予約済み', last_used_date: '2025-03-24' },
];

const statusColors: Record<VehicleStatus, string> = {
  使用中: '#1890ff',
  利用可能: '#52c41a',
  整備中: '#faad14',
  予約済み: '#722ed1',
};

const statusOrder: VehicleStatus[] = ['使用中', '利用可能', '整備中', '予約済み'];

export const statusDistribution = statusOrder.map((status) => ({
  name: status,
  value: mockVehicles.filter((v) => v.status === status).length,
  color: statusColors[status],
}));

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
