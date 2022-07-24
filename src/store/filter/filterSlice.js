/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { defaultSortType } from '../../utils/constants';

const initialState = {
  categoryId: 0,
  sort: defaultSortType,
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSortType(state, action) {
      state.sort = action.payload;
    },
  },
});

export const { setCategoryId, setSortType } = filterSlice.actions;

export default filterSlice.reducer;
