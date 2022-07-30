import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL_API } from '../../utils/constants';

const fetchPizzas = createAsyncThunk(
  'pizzas/fetchPizzas',
  async (params, { rejectWithValue }) => {
    try {
      const { category, property, asc } = params;
      const { data } = await axios.get(`${BASE_URL_API}?category=${category}&sortBy=${property}&order=${asc}`);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

export default fetchPizzas;
