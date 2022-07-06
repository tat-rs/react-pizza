import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../../images/cart.svg';

import styles from './CartButton.module.scss';

function CartButton() {
  return (
    <Link className={styles.button} to="/cart">
      <p className={styles.button__sum}>520 ₽</p>
      <span className={styles.button__border} />
      <div className={styles.button__container}>
        <img className={styles.button__icon} src={CartIcon} alt="Корзина с заказами" />
        <span className={styles.button__count}>2</span>
      </div>
    </Link>
  );
}

export default CartButton;
