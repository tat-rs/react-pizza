/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './filter/filterSlice';

export const store = configureStore({
  reducer: {
    filter: filterSlice,
  },
});
