import { IProduct } from "./product.interface";

export interface IOrder {
  id: string;
  isPaid: boolean;
  phone: string;
  address: string;
  order_status: string;
  userId: string;
  orderItems: IProduct[];
}
