import React from 'react';
import PropTypes from 'prop-types';
import { category } from '../../utils/constants';
import Category from '../Category/Category';
import styles from './Сategories.module.scss';

function Сategories({
  categoryId,
  changeCategory,
}) {
  return (
    <ul className={styles.category}>
      {
        category.map((el) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={el.id}>
            <Category item={el} categoryId={categoryId} changeCategory={changeCategory} />
          </li>
        ))
      }
    </ul>
  );
}

Сategories.propTypes = {
  categoryId: PropTypes.number.isRequired,
  changeCategory: PropTypes.func.isRequired,
};

export default Сategories;
