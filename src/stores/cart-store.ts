import { create } from "zustand";
import { ProductProps } from "../utils/data/products";
import * as cartInMemory from "./helpers/cart-in-memory";
export type ProductCartProps = ProductProps & {
  quantity: number;
};

type StateProps = {
  products: ProductCartProps[];
  total: number;
  add: (product: ProductProps) => void;
  clear: () => void;
};

export const useCartStore = create<StateProps>((set) => ({
  products: [],
  total: 0,
  add: (product: ProductProps) =>
    set((state) => ({
      products: cartInMemory.add(state.products, product),
      total: cartInMemory.total(state.products),
    })),
  clear: () => set({ products: [] }),
}));
