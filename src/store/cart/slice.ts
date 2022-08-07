/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CartType = {
  id: number;
  title: string;
  imageUrl: string;
  size: number;
  type: string;
  price: number;
  category: number;
  rating: number;
  desc: string;
  count: number;
}

interface CartItem {
  totalPrice: number;
  totalCount: number;
  items: CartType[],
}

const initialState: CartItem = {
  totalPrice: 0,
  totalCount: 0,
  items: [],
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
        // eslint-disable-next-line no-plusplus
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice += action.payload.price;
      state.totalCount = state.items.reduce((sum, obj) => sum + obj.count, 0);
    },
    removeItem(state, action: PayloadAction<CartType>) {
      const { id, size, type } = action.payload;
      const findItem = state.items.find((el) => el.id === id
      && el.type === type
      && el.size === size);
      if (findItem) {
        // eslint-disable-next-line no-plusplus
        findItem.count--;
        state.totalPrice -= action.payload.price;
        state.totalCount = state.items.reduce((sum, obj) => sum + obj.count, 0);
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
      state.totalPrice = state.items.reduce((sum, obj) => sum + (obj.count * obj.price), 0);
      state.totalCount = state.items.reduce((sum, obj) => sum + obj.count, 0);
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
