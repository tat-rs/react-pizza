/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Heading from '../Heading/Heading';
import styles from './Menu.module.scss';
import Loader from '../Loader/Loader';
import Pizza from '../Pizza/Pizza';
import Error from '../Error/Error';
import { BASE_COUNT_PIZZA } from '../../utils/constants';
import { SearchContext } from '../../context/SearchContext';

function Menu({ pizzas, isLoading }) {
  const { searchValue } = useContext(SearchContext);
  const { error } = useSelector((state) => state.pizzas);

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
        error ? (
          <Error />
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

Menu.propTypes = {
  pizzas: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Menu;
