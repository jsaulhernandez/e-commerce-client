// interfaces
import { IOrder } from "@/data/interfaces/order.interface";
// constants
import { ordersURL } from "@/data/constants";

const getOrders = async (): Promise<IOrder[]> => {
  const res = await fetch(ordersURL);
  return res.json() as Promise<IOrder[]>;
};

export default getOrders;
