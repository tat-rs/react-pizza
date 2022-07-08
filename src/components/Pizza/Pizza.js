import React, { useState } from 'react';
import classNames from 'classnames';
import PizzaIcon from '../../images/pizza.png';
import styles from './Pizza.module.scss';

const options = {
  type: ['тонкое', 'традиционное'],
  diameter: [26, 30, 40],
};

function Pizza() {
  const [isSelectedType, setIsSelectedType] = useState('');
  const [isSelectedDiameter, setIsSelectedDiameter] = useState('');
  const [countPizza, setCountPizza] = useState(0);

  function addPizza() {
    setCountPizza(countPizza + 1);
  }
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
      <div className={styles.pizza__container}>
        <p className={styles.pizza__price}>от 395 ₽</p>
        <button className={styles.pizza__button} type="button" onClick={addPizza}>
          <svg className={styles.pizza__buttonIcon} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="white" />
          </svg>

          Добавить
          {
            countPizza > 0 && <span className={styles.pizza__count}>{countPizza}</span>
          }
        </button>
      </div>
    </li>
  );
}

export default Pizza;
