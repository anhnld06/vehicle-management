export type VehicleStatus = '使用中' | '利用可能' | '整備中' | '予約済み';

export interface Vehicle {
  id: string;
  vehicle_code: string;
  vehicle_name: string;
  status: VehicleStatus;
  last_used_date: string;
}

export interface MaintenanceAlert {
  id: string;
  vehicle_code: string;
  vehicle_name: string;
  maintenance_date: string;
  description: string;
}

export interface BookingConflict {
  id: string;
  vehicle_code: string;
  date: string;
  user1: string;
  user2: string;
}
