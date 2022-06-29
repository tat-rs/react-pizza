import React from 'react';
import Heading from '../Heading/Heading';
import Pizza from '../Pizza/Pizza';
import styles from './Menu.module.scss';

function PizzasSection() {
  return (
    <section className={styles.pizzas}>
      <Heading text="Все пиццы" className={styles.pizzas__heading} />
      <ul className={styles.pizzas__list}>
        <Pizza />
        <Pizza />
        <Pizza />
        <Pizza />
        <Pizza />
        <Pizza />
        <Pizza />
        <Pizza />
      </ul>
    </section>
  );
}

export default PizzasSection;
