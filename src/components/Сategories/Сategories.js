import React, { useState } from 'react';
import { sort } from '../../utils/constants';
import Category from '../Category/Category';
import styles from './Сategories.module.scss';

function Сategories() {
  const [isActiveSort, setIsActiveSort] = useState('');
  return (
    <ul className={styles.category}>
      {
        sort.map((el, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={i}>
            <Category item={el} setIsActiveSort={setIsActiveSort} isActiveSort={isActiveSort} />
          </li>
        ))
      }
    </ul>
  );
}

export default Сategories;
