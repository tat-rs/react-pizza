import { CartType } from '../store/cart/types';

/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line max-len
export const getTotalPrice = (items: CartType[]) => items.reduce((sum, obj) => sum + (obj.count * obj.price), 0);
