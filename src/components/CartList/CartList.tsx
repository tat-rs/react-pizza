import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectItems } from '../../store/cart/selectors';
import {
  addItem, removeItem, removeItems,
} from '../../store/cart/slice';
import { CartType } from '../../store/cart/types';
import Icon from '../Icon/icon';
import styles from './CartList.module.scss';

function CartList() {
  const items = useSelector(selectItems);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  function addPizza(pizza: CartType) {
    dispatch(addItem(pizza));
  }

  function minusCount(pizza: CartType) {
    if (pizza.count > 1) {
      dispatch(removeItem(pizza));
    } else {
      dispatch(removeItems(pizza));
    }
  }

  function removePizza(pizza: CartType) {
    dispatch(removeItems(pizza));
  }

  return (
    <div className={styles.cart__container}>
      <ul className={styles.cart__list}>
        {
          items.length > 0 && items.map((item: CartType, index: number) => (
            // eslint-disable-next-line react/no-array-index-key
            <li className={styles.cart__item} key={index}>
              <div className={styles.cart__pizza}>
                <img className={styles.cart__pizzaImage} src={item.imageUrl} alt={item.title} />
                <h3 className={styles.cart__pizzaTitle}>{item.title}</h3>
                <p className={styles.cart__pizzaParametr}>
                  {`${item.type}, ${item.size} см`}
                </p>
              </div>
              <div className={styles.cart__countContainer}>
                <Icon type="minusIcon" className={styles.cart__countBtn} onClick={() => minusCount(item)} />
                <p className={styles.cart__text}>{item.count}</p>
                <Icon type="plusInCircleIcon" className={styles.cart__countBtn} onClick={() => addPizza(item)} />
              </div>
              <p className={styles.cart__sum}>{`${item.price * item.count} ₽`}</p>
              <Icon type="clearInCircleIcon" className={styles.cart__deleteBtn} onClick={() => removePizza(item)} />
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default CartList;
