import { RootState } from '../store';

const selectTotalPrice = (state: RootState) => state.cart.totalPrice;
const selectTotalCount = (state: RootState) => state.cart.totalCount;
const selectItems = (state: RootState) => state.cart.items;

export {
  selectTotalPrice, selectTotalCount, selectItems,
};
