import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Category.module.scss';

function Category({ item, setIsActiveSort, isActiveSort }) {
  return (
    <button
      className={classNames(styles.item, {
        [styles.item_active]: isActiveSort === item,
      })}
      onClick={() => setIsActiveSort(item)}
      type="button"
    >
      {item}
    </button>
  );
}

Category.defaultProps = {
  isActiveSort: null,
};

Category.propTypes = {
  item: PropTypes.string.isRequired,
  setIsActiveSort: PropTypes.func.isRequired,
  isActiveSort: PropTypes.string,
};

export default Category;
