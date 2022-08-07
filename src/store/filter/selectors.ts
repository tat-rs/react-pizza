import { RootState } from '../store';

const selectCategoryId = (state: RootState) => state.filter.categoryId;
const selectSort = (state: RootState) => state.filter.sort;
const selectSearchValue = (state: RootState) => state.filter.searchValue;

export { selectCategoryId, selectSort, selectSearchValue };
