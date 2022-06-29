import React from 'react';
import styles from './PopupSort.module.scss';

function PopupSort() {
  return (
    <div className={styles.popup}>
      <ul className={styles.popup__list}>
        <li className={styles.popup__item}>популярности</li>
        <li className={styles.popup__item}>по цене</li>
        <li className={styles.popup__item}>по алфавиту</li>
      </ul>
    </div>
  );
}

export default PopupSort;
