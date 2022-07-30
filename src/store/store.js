/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './filter/filterSlice';
import cartSlice from './cart/cartSlice';
import pizzasSlice from './pizzas/pizzasSlice';

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    cart: cartSlice,
    pizzas: pizzasSlice,
  },
});
