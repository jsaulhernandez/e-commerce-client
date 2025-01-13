import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { ICartStore } from "./interfaces/cart-store.interface";
import { IProduct } from "@/data/interfaces/product.interface";
import toast from "react-hot-toast";

export const useCart = create(
  persist<ICartStore>(
    (set, get) => ({
      items: [],
      addItem: (payload: IProduct) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((i) => i.id === payload.id);

        if (existingItem) return toast("Item already in the cart");

        set({ items: [...get().items, payload] });
        toast.success("Item added in the cart");
      },
      removeItem: (payload: string) => {
        const filtered = get().items.filter((i) => i.id !== payload);

        set({ items: [...filtered] });
        toast.success("Item removed from the cart");
      },
      removeAll: () => set({ items: [] }),
      updateItemQuantity: (id: string, qty: number) => {
        const updateItems = get().items.map((i) =>
          i.id === id ? { ...i, qty: qty } : i
        );

        set({ items: updateItems });
        toast.success("Item updated in the cart");
      },
    }),
    { name: "cart-storage", storage: createJSONStorage(() => localStorage) }
  )
);

export default useCart;
