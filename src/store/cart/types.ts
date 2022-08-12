export type CartType = {
  id: number;
  title: string;
  imageUrl: string;
  size: number;
  type: string;
  price: number;
  category: number;
  rating: number;
  desc: string;
  count: number;
}

export interface CartItem {
  totalPrice: number;
  totalCount: number;
  items: CartType[],
}
