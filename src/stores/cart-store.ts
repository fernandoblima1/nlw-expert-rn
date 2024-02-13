import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ProductProps } from "../utils/data/products";
import * as cartInMemory from "./helpers/cart-in-memory";
import AsyncStorage from "@react-native-async-storage/async-storage";
export type ProductCartProps = ProductProps & {
  quantity: number;
};
const STORAGE_KEY = "_nlw_cart";

type StateProps = {
  products: ProductCartProps[];
  add: (product: ProductProps) => void;
  clear: () => void;
  removeProduct: (id: string) => void;
};

export const useCartStore = create(
  persist<StateProps>(
    (set) => ({
      products: [],

      add: (product: ProductProps) =>
        set((state) => ({
          products: cartInMemory.add(state.products, product),
        })),

      clear: () => set({ products: [] }),

      removeProduct: (id: string) => {
        set((state) => ({
          products: cartInMemory.removeProduct(state.products, id),
        }));
      },
    }),
    {
      name: STORAGE_KEY,
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
