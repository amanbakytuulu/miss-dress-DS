export enum TableTypes {
  USERS = 0,
  POPULAR_PRODUCTS = 1,
  ALL_PRODUCTS = 2,
}
export enum Status {
  PENDING = "Pending",
  ACTIVE = "Active",
  DELETED = "Deleted",
  BANNED = "Banned",
}
export interface TableStatsTypes {
  id: number;
  name: string;
  sales: string;
  income: string;
  productId?: string;
  status: string;
}
