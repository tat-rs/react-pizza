const selectTotalPrice = (state) => state.cart.totalPrice;
const selectTotalCount = (state) => state.cart.totalCount;
const selectItems = (state) => state.cart.items;

export { selectTotalPrice, selectTotalCount, selectItems };
