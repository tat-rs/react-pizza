import React from 'react';
import EmptyCartImage from '../../images/empty-cart.png';
import SadSmile from '../../images/sad-smile.png';
import styles from './EmptyCart.module.scss';

function EmptyCart() {
  return (
    <div className={styles.EmptyCart}>
      <div className={styles.EmptyCart__container}>
        <h2 className={styles.EmptyCart__title}>Корзина пустая</h2>
        <img className={styles.EmptyCart__sadIcon} src={SadSmile} alt="Грустный смайлк" />
      </div>
      <p className={styles.EmptyCart__info}>
        Вероятней всего, вы не заказывали ещё пиццу.
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img className={styles.EmptyCart__image} src={EmptyCartImage} alt="Пустая корзина" />
      <button className={styles.EmptyCart__btnBack} type="button">Вернуться назад</button>
    </div>
  );
}

export default EmptyCart;
