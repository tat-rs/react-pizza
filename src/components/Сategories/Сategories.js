import React from 'react';
import { category } from '../../utils/constants';
import Category from '../Category/Category';
import styles from './–°ategories.module.scss';

function –°ategories() {
  return (
    <ul className={styles.category}>
      {
        category.map((el) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={el.id}>
            <Category
              item={el}
            />
          </li>
        ))
      }
    </ul>
  );
}

export default –°ategories;
