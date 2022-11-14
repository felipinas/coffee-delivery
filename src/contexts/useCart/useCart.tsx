import { useState, createContext, useContext } from 'react';

import { CartContextData, CartProviderProps } from './types';

const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [coffees] = useState([]);

  return (
    <CartContext.Provider value={{ coffees }}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  return context;
}
