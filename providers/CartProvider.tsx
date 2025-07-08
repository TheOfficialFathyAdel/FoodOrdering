import { CartItem, PizzaSize, Product } from "@/types/types";
import { createContext, PropsWithChildren, useContext, useState } from "react";
import { randomUUID } from "expo-crypto";

type CartType = {
  items: CartItem[];
  addItem: (product: Product, size: PizzaSize) => void;
  updateQuantity: (id: string, quantity: 1 | -1) => void;
  total: number;
};

const CartContext = createContext<CartType>({
  items: [],
  addItem: () => {},
  updateQuantity: () => {},
  total: 0,
});

export default function CartProvider({ children }: PropsWithChildren) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (product: Product, size: PizzaSize) => {
    const existingItem = items.find(
      (item) => item.product == product && item.size == size
    );
    if (existingItem) {
      updateQuantity(existingItem.id, 1);
      return;
    }
    const newCartItem = {
      id: randomUUID(),
      product,
      product_id: product.id,
      size,
      quantity: 1,
    };
    setItems([...items, newCartItem]);
  };

  const updateQuantity = (id: string, quantity: 1 | -1) => {
    const updatedItems = items
      .map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + quantity };
        }
        return item;
      })
      .filter((item) => item.quantity > 0); // Remove items with quantity 0

    setItems(updatedItems);
  };

  const sum = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );
  const total = Number(sum.toFixed(2));

  return (
    <CartContext.Provider value={{ items, addItem, updateQuantity, total }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
