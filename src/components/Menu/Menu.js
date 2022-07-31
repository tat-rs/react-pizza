/* eslint-disable max-len */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useSelector } from 'react-redux';
import Heading from '../Heading/Heading';
import styles from './Menu.module.scss';
import Loader from '../Loader/Loader';
import Pizza from '../Pizza/Pizza';
import { BASE_COUNT_PIZZA, NOTFOUND_MESSAGE } from '../../utils/constants';
import { selectIsLoading, selectPizzas } from '../../store/pizzas/selectors';
import { selectSearchValue } from '../../store/filter/selectors';
import Message from '../Message/Message';

function Menu() {
  const searchValue = useSelector(selectSearchValue);
  const pizzas = useSelector(selectPizzas);
  const isLoading = useSelector(selectIsLoading);

  const pizzasList = pizzas
    .filter((obj) => obj.title.toLowerCase().includes(searchValue.toLowerCase()))
    .map((item) => ((
      <Pizza key={item.id} pizza={item} />
    )));

  const skeletons = [...Array(BASE_COUNT_PIZZA)].map((item, index) => (
    <li key={index} className={styles.skeleton}>
      <Loader />
    </li>
  ));

  return (
    <section className={styles.pizzas}>
      <Heading text="Все пиццы" className={styles.pizzas__heading} />
      {
        pizzasList.length === 0 && searchValue !== '' ? (
          <Message text={NOTFOUND_MESSAGE} />
        ) : (
          <ul className={styles.pizzas__list}>
            {
              isLoading ? skeletons : pizzasList
            }
          </ul>
        )
      }
    </section>
  );
}

export default Menu;
