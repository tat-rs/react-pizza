import React from 'react';
import { sort } from '../../utils/constants';
import SelectItem from '../SelectItem/SelectItem';
import styles from './Сategories.module.scss';

function Сategories() {
  return (
    <ul className={styles.category}>
      {
        sort.map((el, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={i}>
            <SelectItem item={el} />
          </li>
        ))
      }
    </ul>
  );
}

export default Сategories;
