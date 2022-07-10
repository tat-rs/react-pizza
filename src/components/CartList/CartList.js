import React from 'react';
import Pizza from '../../images/pizza.png';
import DeletePizza from '../../images/delete-pizza.svg';
import styles from './CartList.module.scss';

const Pizzas = [
  {
    title: 'Сырный цыпленок',
    image: Pizza,
    parametr: ['тонкое тесто', '40 см.'],
    count: 200,
    sum: 760,
  },
  {
    title: '4 сыра',
    image: Pizza,
    parametr: ['тонкое тесто', '20 см.'],
    count: 200,
    sum: 760,
  },
  {
    title: 'Сырный цыпленок',
    image: Pizza,
    parametr: ['тонкое тесто', '40 см.'],
    count: 200,
    sum: 760,
  },
  {
    title: '4 сыра',
    image: Pizza,
    parametr: ['тонкое тесто', '30 см.'],
    count: 200,
    sum: 760,
  },
];

function CartList() {
  return (
    <div className={styles.cart__container}>
      <ul className={styles.cart__list}>
        {
          Pizzas.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li className={styles.cart__item} key={index}>
              <div className={styles.cart__pizza}>
                <img className={styles.cart__pizzaImage} src={item.image} alt={item.title} />
                <h3 className={styles.cart__pizzaTitle}>{item.title}</h3>
                <p className={styles.cart__pizzaParametr}>
                  {item.parametr.join(', ')}
                </p>
              </div>
              <div className={styles.cart__countContainer}>
                <button className={styles.cart__countBtn} type="button">
                  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="15" fill="white" stroke="#FE5F1E" strokeWidth="2" />
                    <path d="M15.0402 15.04H19.8402C20.3704 15.04 20.8002 15.4698 20.8002 16C20.8002 16.5302 20.3704 16.96 19.8402 16.96H15.0402H12.1602C11.63 16.96 11.2002 16.5302 11.2002 16C11.2002 15.4698 11.63 15.04 12.1602 15.04H15.0402Z" fill="#FE5F1E" />
                  </svg>

                </button>
                <p className={styles.cart__text}>{item.count}</p>
                <button className={styles.cart__countBtn} type="button">
                  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="15" fill="white" stroke="#FE5F1E" strokeWidth="2" />
                    <path d="M19.8402 15.04H16.9602V12.16C16.9602 11.6299 16.5304 11.2 16.0002 11.2C15.47 11.2 15.0402 11.6299 15.0402 12.16V15.04H12.1602C11.63 15.04 11.2002 15.4699 11.2002 16C11.2002 16.5302 11.63 16.96 12.1602 16.96H15.0402V19.84C15.0402 20.3702 15.47 20.8 16.0002 20.8C16.5304 20.8 16.9602 20.3702 16.9602 19.84V16.96H19.8402C20.3704 16.96 20.8002 16.5302 20.8002 16C20.8002 15.4699 20.3704 15.04 19.8402 15.04Z" fill="#EB5A1E" />
                  </svg>
                </button>
              </div>
              <p className={styles.cart__sum}>{`${item.sum} ₽`}</p>
              <button className={styles.cart__deleteBtn} type="button">
                <img src={DeletePizza} alt="Удалить пиццу" />
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default CartList;
