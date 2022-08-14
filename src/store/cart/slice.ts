/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCartItemLS } from '../../utils/getCartItemsLS';
import { getTotalCount } from '../../utils/getTotalCount';
import { getTotalPrice } from '../../utils/getTotalPrice';
import { CartItem, CartType } from './types';

const { items, totalPrice, totalCount } = getCartItemLS();

const initialState: CartItem = {
  totalPrice,
  totalCount,
  items,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartType>) {
      const { id, size, type } = action.payload;
      const findItem = state.items.find((el) => el.id === id
      && el.type === type
      && el.size === size);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = getTotalPrice(state.items);
      state.totalCount = getTotalCount(state.items);
    },
    removeItem(state, action: PayloadAction<CartType>) {
      const { id, size, type } = action.payload;
      const findItem = state.items.find((el) => el.id === id
      && el.type === type
      && el.size === size);
      if (findItem) {
        findItem.count--;
        state.totalPrice = getTotalPrice(state.items);
        state.totalCount = getTotalCount(state.items);
      }
    },
    removeItems(state, action: PayloadAction<CartType>) {
      const { id, size, type } = action.payload;
      state.items.forEach((el, i) => {
        if (el.id === id
          && el.type === type
          && el.size === size) {
          state.items.splice(i, 1);
        }
      });
      state.totalPrice = getTotalPrice(state.items);
      state.totalCount = getTotalCount(state.items);
    },
    clearItem(state) {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    },
  },
});

export const {
  addItem, removeItem, removeItems, clearItem,
} = cartSlice.actions;

export default cartSlice.reducer;
