/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../Heading/Heading';
import styles from './Menu.module.scss';
import Loader from '../Loader/Loader';
import Pizza from '../Pizza/Pizza';

function Menu({ pizzas, isLoading }) {
  const countSkeleton = 8;
  return (
    <section className={styles.pizzas}>
      <Heading text="Все пиццы" className={styles.pizzas__heading} />
      <ul className={styles.pizzas__list}>
        {
          isLoading ? [...Array(countSkeleton)].map((item, index) => (
            <li key={index} className={styles.skeleton}>
              <Loader />
            </li>
          ))
            : pizzas.map((item) => ((
              <Pizza key={item.id} pizza={item} />
            )))
        }
      </ul>
    </section>
  );
}

Menu.propTypes = {
  pizzas: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Menu;
