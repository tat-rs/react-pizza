/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { defaultSortType } from '../../utils/constants';

type SortItem = {
  id: number;
  title: string;
  property: string;
  asc: boolean;
}

interface FilterItem {
  categoryId: number;
  sort: SortItem;
  searchValue: string,
}

const initialState: FilterItem = {
  categoryId: 0,
  sort: defaultSortType,
  searchValue: '',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSortType(state, action: PayloadAction<SortItem>) {
      state.sort = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const { setCategoryId, setSortType, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
