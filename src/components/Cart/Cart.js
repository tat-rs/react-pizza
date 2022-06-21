import React from 'react';
import CartIcon from '../../images/cart.svg';

import styles from './Cart.module.scss';

function Cart() {
  return (
    <button className={styles.button} type="button">
      <p className={styles.button__sum}>520 ₽</p>
      <span className={styles.button__border} />
      <div className={styles.button__container}>
        <img className={styles.button__icon} src={CartIcon} alt="Корзина с заказами" />
        <span className={styles.button__count}>2</span>
      </div>
    </button>
  );
}

export default Cart;
