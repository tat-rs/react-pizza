import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { sort } from '../../utils/constants';
import SortItem from '../SelectItem/SelectItem';
import styles from './Сategories.module.scss';

function Сategories({ isActiveSort, setIsActiveSort }) {
  return (
    <ul className={classNames(styles.sort, {
      [styles.sort_active]: isActiveSort,
    })}
    >
      {
        sort.map((el, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={i}>
            <SortItem item={el} setIsActiveSort={setIsActiveSort} />
          </li>
        ))
      }
    </ul>
  );
}

Сategories.propTypes = {
  isActiveSort: PropTypes.bool.isRequired,
  setIsActiveSort: PropTypes.func.isRequired,
};

export default Сategories;
