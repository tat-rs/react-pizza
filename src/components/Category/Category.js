import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Category.module.scss';

function Category({ item, categoryId, changeCategory }) {
  const onClick = () => {
    changeCategory(item.id);
  };

  return (
    <button
      className={classNames(styles.item, {
        [styles.item_active]: categoryId === item.id,
      })}
      onClick={onClick}
      type="button"
    >
      {item.name}
    </button>
  );
}

Category.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  changeCategory: PropTypes.func.isRequired,
  categoryId: PropTypes.number.isRequired,
};

export default Category;
