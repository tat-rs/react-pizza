/* eslint-disable import/prefer-default-export */
import { CartType } from '../store/cart/types';

export const getTotalCount = (items: CartType[]) => items.reduce((sum, obj) => sum + obj.count, 0);
