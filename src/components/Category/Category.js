import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Category.module.scss';
import { setCategoryId } from '../../store/filter/filterSlice';

function Category({ item }) {
  const { categoryId } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(setCategoryId(item.id));
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
};

export default Category;
