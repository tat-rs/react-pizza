/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  totalCount: 0,
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const { id, size, type } = action.payload;
      const findItem = state.items.find((el) => el.id === id);
      if (findItem && findItem.size === size && findItem.type === type) {
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
    removeItem(state, action) {
      const findItem = state.items.find((el) => el.id === action.payload.id);
      if (findItem) {
        // eslint-disable-next-line no-plusplus
        findItem.count--;
        state.totalPrice -= action.payload.price;
        state.totalCount = state.items.reduce((sum, obj) => sum + obj.count, 0);
      }
    },
    removeItems(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload.id);
      state.totalPrice = state.items.reduce((sum, obj) => sum + (obj.count * obj.price), 0);
      state.totalCount = state.items.reduce((sum, obj) => sum + obj.count, 0);
    },
    clearItem(state) {
      state.items = [];
    },
  },
});

export const {
  addItem, removeItem, removeItems, clearItem,
} = cartSlice.actions;

export default cartSlice.reducer;
