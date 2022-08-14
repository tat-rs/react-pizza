import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectTotalCount, selectTotalPrice } from '../../store/cart/selectors';
import Icon from '../Icon/icon';

import styles from './CartButton.module.scss';

function CartButton() {
  const totalPrice = useSelector(selectTotalPrice);
  const totalCount = useSelector(selectTotalCount);

  return (
    <Link className={styles.button} to="/cart">
      <p className={styles.button__sum}>{`${totalPrice} ₽`}</p>
      <span className={styles.button__border} />
      <div className={styles.button__container}>
        <Icon type="cartIcon" className={styles.button__icon} />
        <span className={styles.button__count}>{totalCount}</span>
      </div>
    </Link>
  );
}

export default CartButton;
