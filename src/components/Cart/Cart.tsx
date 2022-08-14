/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CartList from '../CartList/CartList';
import Heading from '../Heading/Heading';
import styles from './Cart.module.scss';

import EmptyCart from '../EmptyCart/EmptyCart';
import { clearItem } from '../../store/cart/slice';
import { selectItems, selectTotalCount, selectTotalPrice } from '../../store/cart/selectors';
import Icon from '../Icon/icon';

function Cart() {
  const items = useSelector(selectItems);
  const totalPrice = useSelector(selectTotalPrice);
  const totalCount = useSelector(selectTotalCount);
  const dispatch = useDispatch();

  function clearCart() {
    dispatch(clearItem());
    localStorage.removeItem('cart');
  }

  if (items.length === 0) {
    return (
      <EmptyCart />
    );
  }

  return (
    <section className={styles.cart}>
      <div className={styles.cart__container}>
        <div className={styles.cart__titleContainer}>
          <Icon type="cartIcon" className={styles.cart__icon} />
          <Heading text="Корзина" className={styles.cart__heading} />
        </div>
        <button className={styles.cart__delete} type="button" onClick={clearCart}>
          <Icon type="deleteIcon" className={styles.cart__deleteIcon} />
          <p className={styles.cart__deleteText}>Очистить корзину</p>
        </button>
      </div>
      <CartList />
      <div className={styles.cart__result}>
        <p className={styles.cart__resultInfo}>
          Всего пицц:
          <b>{`${totalCount} шт.`}</b>
        </p>
        <p className={styles.cart__resultInfo}>
          Сумма заказа:
          <b className={styles.cart__resultInfo_orange}>{`${totalPrice} ₽`}</b>
        </p>
      </div>
      <div className={styles.btn__container}>
        <Link className={styles.btn__navBack} to="/">
          <Icon type="arrowBackIcon" className={styles.btn__navBackIcon} />
          Вернуться назад
        </Link>
        <button className={styles.btn__navPush} type="button">Оплатить сейчас</button>
      </div>
    </section>
  );
}

export default Cart;
