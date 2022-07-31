const selectCategoryId = (state) => state.filter.categoryId;
const selectSort = (state) => state.filter.sort;
const selectSearchValue = (state) => state.filter.searchValue;

export { selectCategoryId, selectSort, selectSearchValue };
