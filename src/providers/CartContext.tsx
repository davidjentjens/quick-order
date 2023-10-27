import React, { createContext, useContext, useReducer, useEffect, ReactNode, useState } from 'react';
import { DishSelection } from '../interfaces/Order';

export const CartContext = createContext<CartContextType | undefined>(undefined);

export type CartAction =
  | { type: 'ADD_TO_CART'; payload: DishSelection }
  | { type: 'REMOVE_FROM_CART'; payload: DishSelection }
  | { type: 'CLEAR_CART' }
  | { type: 'INCREMENT_QUANTITY'; payload: DishSelection }
  | { type: 'DECREMENT_QUANTITY'; payload: DishSelection };

type CartContextType = {
  cart: DishSelection[];
  dispatch: React.Dispatch<CartAction>;
  isCartOpen: boolean;
  toggleCartOpen: () => void;
  clearCart: () => void;
};

const cartReducer = (state: DishSelection[], action: CartAction): DishSelection[] => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.find(item => item.id === action.payload.id);

      if (existingItem) {
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...state, { ...action.payload, quantity: 1 }];

    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.payload.id);

    case 'INCREMENT_QUANTITY':
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case 'DECREMENT_QUANTITY':
      return state.map(item =>
        item.id === action.payload.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

    case 'CLEAR_CART':
      return [];

    default:
      return state;
  }
};


export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, dispatch] = useReducer(cartReducer, [], () => {
    const localCart = localStorage.getItem('cart');
    return localCart ? JSON.parse(localCart) : [];
  });

  const [isCartOpen, setIsCardOpen] = useState(false)

  const toggleCartOpen = () => {
    setIsCardOpen(!isCartOpen)
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch, isCartOpen, toggleCartOpen, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};