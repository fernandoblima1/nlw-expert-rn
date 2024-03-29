import { ProductProps } from "@/src/utils/data/products";
import { ProductCartProps } from "../cart-store";

export function add(products: ProductCartProps[], newProduct: ProductProps) {
  if (products.some((item) => item.id === newProduct.id)) {
    return products.map((item) =>
      item.id === newProduct.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...products, { ...newProduct, quantity: 1 }];
}
export function totalItems(products: ProductCartProps[]) {
  return products.reduce((acc, item) => acc + item.quantity, 1);
}

export function removeProduct(products: ProductCartProps[], id: string) {
  products.map((item) => {
    if (item.id === id) {
      item.quantity > 1 ? item.quantity-- : (item.quantity = 0);
    }
    return item;
  });
  return products.filter((item) => item.quantity > 0);
}
