const selectPizzas = (state) => state.pizzas.pizzas;
const selectIsLoading = (state) => state.pizzas.isLoading;
const selectError = (state) => state.pizzas.error;

export { selectPizzas, selectIsLoading, selectError };
