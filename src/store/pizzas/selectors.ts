import { RootState } from '../store';

const selectPizzas = (state: RootState) => state.pizzas.pizzas;
const selectIsLoading = (state: RootState) => state.pizzas.isLoading;
const selectError = (state: RootState) => state.pizzas.error;

export { selectPizzas, selectIsLoading, selectError };
