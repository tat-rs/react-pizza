import { getTotalCount } from './getTotalCount';
import { getTotalPrice } from './getTotalPrice';

/* eslint-disable import/prefer-default-export */
export const getCartItemLS = () => {
  const data = localStorage.getItem('cart');
  const items = data ? JSON.parse(data) : [];
  const totalPrice = getTotalPrice(items);
  const totalCount = getTotalCount(items);

  return {
    items,
    totalPrice,
    totalCount,
  };
};
