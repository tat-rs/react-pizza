import { RootState } from '../store';

const selectPizzas = (state: RootState) => state.pizzas.pizzas;
const selectIsLoading = (state: RootState) => state.pizzas.isLoading;

export { selectPizzas, selectIsLoading };
