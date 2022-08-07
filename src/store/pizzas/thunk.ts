import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL_API } from '../../utils/constants';
import { PizzaType } from './slice';

type FetchPizzaArg = {
  category: number | string;
  asc: string;
  property: string;
}

const fetchPizzas = createAsyncThunk(
  'pizzas/fetchPizzas',
  async (params: FetchPizzaArg) => {
    const { category, property, asc } = params;
    const { data } = await axios.get(`${BASE_URL_API}?category=${category}&sortBy=${property}&order=${asc}`);
    return data as PizzaType[];
  },
);

export default fetchPizzas;
