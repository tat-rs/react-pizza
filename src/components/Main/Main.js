import React from 'react';
import Sort from '../Sort/Sort';
import Сategories from '../Сategories/Сategories';
import PopupSort from '../PopupSort/PopupSort';
import Menu from '../Menu/Menu';
import styles from './Main.module.scss';

function Main() {
  return (
    <main className={styles.main}>
      <div className={styles.main__sort}>
        <Сategories />
        <Sort />
        <PopupSort />
      </div>
      <Menu />
    </main>
  );
}

export default Main;
