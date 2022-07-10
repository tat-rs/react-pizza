import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../Heading/Heading';
import Pizza from '../Pizza/Pizza';
import styles from './Menu.module.scss';

function Menu({ pizzas }) {
  return (
    <section className={styles.pizzas}>
      <Heading text="Все пиццы" className={styles.pizzas__heading} />
      <ul className={styles.pizzas__list}>
        {
          pizzas.map((item) => (
            <Pizza key={item.id} pizza={item} />
          ))
        }
      </ul>
    </section>
  );
}

Menu.propTypes = {
  pizzas: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Menu;
