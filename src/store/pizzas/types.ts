export type PizzaType = {
  id: number;
  title: string;
  imageUrl: string;
  sizes: number[];
  price: number;
  category: number;
  rating: number;
  desc: string;
  count: number;
}

export interface PizzaItem {
  pizzas: PizzaType[];
  isLoading: boolean;
  error: boolean;
}
