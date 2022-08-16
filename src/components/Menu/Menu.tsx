/* eslint-disable max-len */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Heading from '../Heading/Heading';
import Pizza from '../Pizza/Pizza';
import Message from '../Message/Message';
import Skeleton from '../Loader/Skeleton';
import styles from './Menu.module.scss';

import { selectIsLoading, selectPizzas } from '../../store/pizzas/selectors';
import { selectCategoryId, selectSearchValue, selectSort } from '../../store/filter/selectors';
import fetchPizzas from '../../store/pizzas/thunk';
import { useAppDispatch } from '../../store/store';

import { BASE_COUNT_PIZZA, NOTFOUND_MESSAGE } from '../../utils/constants';

function Menu() {
  const searchValue = useSelector(selectSearchValue);
  const pizzas = useSelector(selectPizzas);
  const isLoading = useSelector(selectIsLoading);

  const categoryId = useSelector(selectCategoryId);
  const sort = useSelector(selectSort);

  const dispatch = useAppDispatch();

  async function getPizzas() {
    const category = categoryId > 0 ? categoryId : '';
    const asc = sort.asc ? 'asc' : 'desc';
    const property = sort.property === 'name' ? 'title' : sort.property;

    dispatch(fetchPizzas({
      category,
      asc,
      property,
    }));
  }

  useEffect(() => {
    getPizzas();
  }, [categoryId, sort]);

  const pizzasList = pizzas
    .filter((obj) => obj.title.toLowerCase().includes(searchValue.toLowerCase().trim()))
    .map((item) => ((
      <Pizza key={item.id} pizza={item} />
    )));

  const skeletons = [...Array(BASE_COUNT_PIZZA)].map((item, index) => (
    <li key={index} className={styles.skeleton}>
      <Skeleton />
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
