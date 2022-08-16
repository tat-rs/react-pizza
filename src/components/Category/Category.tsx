import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import styles from './Category.module.scss';

import { setCategoryId } from '../../store/filter/slice';
import { selectCategoryId } from '../../store/filter/selectors';

type CategoryItem = {
  item: {
    id: number;
    name: string;
  }
}

function Category({ item }: CategoryItem) {
  const categoryId = useSelector(selectCategoryId);
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

export default Category;
