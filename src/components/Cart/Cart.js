/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CartIcon from '../../images/cart-icon.svg';
import DeleteIcon from '../../images/delete-icon.svg';
import CartList from '../CartList/CartList';
import Heading from '../Heading/Heading';
import styles from './Cart.module.scss';

import EmptyCart from '../EmptyCart/EmptyCart';
import { clearItem } from '../../store/cart/cartSlice';

function Cart() {
  const { items, totalPrice, totalCount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function clearCart() {
    dispatch(clearItem());
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
          <img className={styles.cart__icon} src={CartIcon} alt="Иконка корзины" />
          <Heading text="Корзина" className={styles.cart__heading} />
        </div>
        <button className={styles.cart__delete} type="button" onClick={clearCart}>
          <img className={styles.cart__deleteIcon} src={DeleteIcon} alt="Удалить корзину" />
          <p className={styles.cart__deleteText}>Очистить корзину</p>
        </button>
      </div>
      <CartList />
      <div className={styles.cart__result}>
        <p className={styles.cart__resultInfo}>
          Всего пицц:
          {' '}
          <b>{`${totalCount} шт.`}</b>
        </p>
        <p className={styles.cart__resultInfo}>
          Сумма заказа:
          {' '}
          <b className={styles.cart__resultInfo_orange}>{`${totalPrice} ₽`}</b>
        </p>
      </div>
      <div className={styles.btn__container}>
        <Link className={styles.btn__navBack} to="/">
          <svg className={styles.btn__navBackIcon} width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Вернуться назад

        </Link>
        <button className={styles.btn__navPush} type="button">Оплатить сейчас</button>
      </div>
    </section>
  );
}

export default Cart;
