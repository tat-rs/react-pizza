/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import fetchPizzas from './thunk';
import { PizzaItem, PizzaType } from './types';

const initialState: PizzaItem = {
  pizzas: [],
  isLoading: true,
  error: false,
};

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<PizzaType[]>) {
      state.pizzas = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.isLoading = true;
      state.pizzas = [];
      state.error = false;
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.pizzas = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchPizzas.rejected, ((state, action) => {
      state.isLoading = false;
      state.pizzas = [];
      state.error = !!action.payload;
    }));
  },
});

export const { setItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;
