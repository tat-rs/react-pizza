import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartIcon from '../../images/cart.svg';

import styles from './CartButton.module.scss';

function CartButton() {
  const { totalPrice, totalCount } = useSelector((state) => state.cart);

  return (
    <Link className={styles.button} to="/cart">
      <p className={styles.button__sum}>{`${totalPrice} ₽`}</p>
      <span className={styles.button__border} />
      <div className={styles.button__container}>
        <img className={styles.button__icon} src={CartIcon} alt="Корзина с заказами" />
        <span className={styles.button__count}>{totalCount}</span>
      </div>
    </Link>
  );
}

export default CartButton;
