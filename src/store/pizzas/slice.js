/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import fetchPizzas from './thunk';

const initialState = {
  pizzas: [],
  isLoading: true,
  error: null,
};

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setItems(state, action) {
      state.pizzas = action.payload;
    },
  },
  extraReducers: {
    [fetchPizzas.pending.type]: (state) => {
      state.isLoading = true;
      state.pizzas = [];
      state.error = null;
    },
    [fetchPizzas.fulfilled.type]: (state, { payload }) => {
      state.pizzas = payload;
      state.isLoading = false;
    },
    [fetchPizzas.rejected.type]: (state, { payload }) => {
      state.isLoading = false;
      state.pizzas = [];
      state.error = payload;
    },
  },
});

export const { setItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;
