/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import fetchPizzas from './thunk';

export type PizzaType = {
  id: number;
  title: string;
  imageUrl: string;
  sizes: number[];
  price: number;
  category: number;
  rating: number;
  desc: string;
  count: number;
}

interface PizzaItem {
  pizzas: PizzaType[];
  isLoading: boolean;
}

const initialState: PizzaItem = {
  pizzas: [],
  isLoading: true,
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
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.pizzas = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchPizzas.rejected, ((state) => {
      state.isLoading = false;
      state.pizzas = [];
    }));
  },
});

export const { setItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;
