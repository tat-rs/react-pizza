/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React, { useState } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { type } from '../../utils/constants';
import styles from './Pizza.module.scss';
import { addItem } from '../../store/cart/slice';
import { CartType } from '../../store/cart/types';
import { selectItems } from '../../store/cart/selectors';
import Icon from '../Icon/icon';

type PizzaItem = {
  pizza: {
    id: number;
    title: string;
    imageUrl: string;
    sizes: number[];
    price: number;
    category: number;
    rating: number;
    desc: string;
    count: number;
  }
}

function Pizza({ pizza }: PizzaItem) {
  const [isSelectedType, setIsSelectedType] = useState(type[0]);
  const [isSelectedSize, setIsSelectedSize] = useState(pizza.sizes[0]);
  const [isOpenDesc, setIsOpenDesc] = useState(false);
  const cartItem = useSelector(selectItems);
  const dispatch = useDispatch();

  function getCount() {
    let count = 0;
    cartItem.forEach((item) => {
      if (pizza.id === item.id) {
        count += item.count;
      }
    });
    return count;
  }

  const countPizza = getCount();

  const handleMouseOver = () => {
    setIsOpenDesc(true);
  };

  const handleMouseOut = () => {
    setIsOpenDesc(false);
  };

  function addPizza() {
    const addedPizza: CartType = {
      id: pizza.id,
      title: pizza.title,
      imageUrl: pizza.imageUrl,
      size: isSelectedSize,
      type: isSelectedType,
      price: pizza.price,
      category: pizza.category,
      rating: pizza.rating,
      desc: pizza.desc,
      count: pizza.count + 1,
    };

    dispatch(addItem(addedPizza));
  }

  return (
    <li className={styles.pizza}>
      <img
        src={pizza.imageUrl}
        alt={pizza.title}
        className={styles.pizza__image}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onFocus={handleMouseOver}
        onBlur={handleMouseOver}
      />
      <h2 className={styles.pizza__title}>{pizza.title}</h2>
      <div className={styles.sort}>
        <ul className={styles.sort__list}>
          {
            type.map((item, index) => (
              <li
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
                key={index}
                className={classNames(styles.sort__item, {
                  [styles.sort__item_active]: isSelectedSize === item,
                })}
                onClick={() => setIsSelectedSize(item)}
                onKeyDown={() => setIsSelectedSize(item)}
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
        <Icon type="plusIcon" className={styles.pizza__button} onClick={() => addPizza()}>
          Добавить
          {
            countPizza > 0 && <span className={styles.pizza__count}>{countPizza}</span>
          }
        </Icon>
      </div>
      {isOpenDesc && (
      <div
        className={styles.pizza__desc}
        onMouseOver={handleMouseOver}
        onFocus={handleMouseOver}
      >
        <p className={styles.pizza__descText}>{pizza.desc}</p>
      </div>
      )}
    </li>
  );
}

export default Pizza;
