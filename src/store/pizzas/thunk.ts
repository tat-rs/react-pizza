import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL_API } from '../../utils/constants';
import { PizzaType } from './types';

type FetchPizzaArg = {
  category: number | string;
  asc: string;
  property: string;
}

const fetchPizzas = createAsyncThunk<
  PizzaType[],
  FetchPizzaArg,
  {
    rejectValue: boolean
  }
>(
  'pizzas/fetchPizzas',
  async (params, { rejectWithValue }) => {
    try {
      const { category, property, asc } = params;
      const { data } = await axios.get(`${BASE_URL_API}?category=${category}&sortBy=${property}&order=${asc}`);
      return data as PizzaType[];
    } catch (err) {
      return rejectWithValue(true);
    }
  },
);

export default fetchPizzas;
