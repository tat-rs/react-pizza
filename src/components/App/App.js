import React, { useState } from 'react';
import Header from '../Header/Header';
import Heading from '../Heading/Heading';
import Select from '../Сategories/Сategories';
import styles from './App.module.scss';

function App() {
  const [isActiveSort, setIsActiveSort] = useState(false);

  return (
    <div className={styles.page__content}>
      <Header />
      <Select isActiveSort={isActiveSort} setIsActiveSort={setIsActiveSort} />
      <Heading text="Все пиццы" />
    </div>
  );
}

export default App;
