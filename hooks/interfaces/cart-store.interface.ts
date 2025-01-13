import { IProduct } from "@/data/interfaces/product.interface";

export interface ICartStore {
  items: IProduct[];
  addItem: (payload: IProduct) => void;
  removeItem: (payload: string) => void;
  removeAll: () => void;
  updateItemQuantity: (id: string, qty: number) => void;
}
