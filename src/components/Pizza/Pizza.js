import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { type } from '../../utils/constants';
import styles from './Pizza.module.scss';

function Pizza({ pizza }) {
  const [isSelectedType, setIsSelectedType] = useState('');
  const [isSelectedDiameter, setIsSelectedDiameter] = useState('');
  const [countPizza, setCountPizza] = useState(0);

  function addPizza() {
    setCountPizza(countPizza + 1);
  }

  return (
    <li className={styles.pizza__item}>
      <img src={pizza.imageUrl} alt={pizza.title} className={styles.pizza__image} />
      <h2 className={styles.pizza__title}>{pizza.title}</h2>
      <div className={styles.sort}>
        <ul className={styles.sort__list}>
          {
            type.map((item, index) => (
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
            pizza.sizes.map((item, index) => (
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
        <p className={styles.pizza__price}>{`от ${pizza.price} ₽`}</p>
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

Pizza.propTypes = {
  pizza: PropTypes.shape({
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    sizes: PropTypes.arrayOf(PropTypes.number),
    price: PropTypes.number,
    category: PropTypes.number,
    rating: PropTypes.number,
  }).isRequired,
};

export default Pizza;
