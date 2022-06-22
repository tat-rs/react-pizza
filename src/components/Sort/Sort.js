import React from 'react';
import SortIcon from '../../images/sort.svg';
import styles from './Sort.module.scss';

function Sort() {
  return (
    <div className={styles.sort}>
      <img className={styles.sort__icon} src={SortIcon} alt="Сортировка" />
      <p className={styles.sort__text}>
        Сортировка по:
        <span className={styles.sort__category}>популярности</span>
      </p>
    </div>
  );
}

export default Sort;
