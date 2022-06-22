import React from 'react';
import Header from '../Header/Header';
import Heading from '../Heading/Heading';
import Сategories from '../Сategories/Сategories';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.page__content}>
      <Header />
      <Сategories />
      <Heading text="Все пиццы" />
    </div>
  );
}

export default App;
