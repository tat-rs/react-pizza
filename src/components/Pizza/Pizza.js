import React, { useState } from 'react';
import classNames from 'classnames';
import PizzaIcon from '../../images/pizza.png';
import AddedIcon from '../../images/plus.svg';
import styles from './Pizza.module.scss';

const options = {
  type: ['тонкое', 'традиционное'],
  diameter: [26, 30, 40],
};

function Pizza() {
  const [isSelectedType, setIsSelectedType] = useState('');
  const [isSelectedDiameter, setIsSelectedDiameter] = useState('');
  return (
    <li className={styles.pizza__item}>
      <img src={PizzaIcon} alt="Пицца" className={styles.pizza__image} />
      <h2 className={styles.pizza__title}>Чизбургер-пицца</h2>
      <div className={styles.sort}>
        <ul className={styles.sort__list}>
          {
            options.type.map((item, index) => (
              <li
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                className={classNames(styles.sort__item, {
                  [styles.sort__item_active]: isSelectedType === item,
                })}
                onClick={() => setIsSelectedType(item)}
                onKeyDown={() => setIsSelectedType(item)}
                role="menuitem"
              >
                {item}
              </li>
            ))
          }

        </ul>
        <ul className={styles.sort__list}>
          {
            options.diameter.map((item, index) => (
              <li
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                className={classNames(styles.sort__item, {
                  [styles.sort__item_active]: isSelectedDiameter === item,
                })}
                onClick={() => setIsSelectedDiameter(item)}
                onKeyDown={() => setIsSelectedDiameter(item)}
                role="menuitem"
              >
                {`${item} см.`}
              </li>
            ))
          }
        </ul>
      </div>
      <div className={styles.sort__container}>
        <p className={styles.sort__price}>от 395 ₽</p>
        <button className={styles.sort__button} type="button">
          <img className={styles.sort__buttonIcon} src={AddedIcon} alt="добавить в корзину" />
          Добавить
          {/* <span className={styles.sort__count}>1</span> */}
        </button>
      </div>
    </li>
  );
}

export default Pizza;
