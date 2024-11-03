export const POINT_TYPE = {
  request: 1,
  technic: 2,
} as const;

export interface PointShared {
  id: string;
  user_id: string;
  type: number;
  category_id: number;
  category: Category;
  phone: string;
  address: string;
  coordinates: Coordinates;
  description: string;
  details: Details;
  images: any[];
  push_radius: number;
  metadata: Metadata2;
  is_removed: boolean;
  removed_at: any;
  created_at: string;
  views: number;
  today_views: number;
}

export interface Category {
  id: number;
  title: string;
  icon: string;
  map_icon: string;
  metadata: Metadata;
}

export interface Metadata {
  has_reises: boolean;
  has_hours: boolean;
  has_shifts: boolean;
  has_attachments: boolean;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface Details {
  attachments: boolean;
  hours: number;
  reises: number;
  shifts: number;
}

export interface Metadata2 {}
