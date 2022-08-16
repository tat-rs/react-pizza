import React from 'react';
import { useSelector } from 'react-redux';
import Icon from '../Icon/icon';
import styles from './Sort.module.scss';
import ArrowUp from '../../assets/png/arrow-up.png';
import ArrowDown from '../../assets/png/arrow-down.png';
import { selectSort } from '../../store/filter/selectors';

type SortItem = {
  handleChangePopup: () => void;
}

function Sort({ handleChangePopup }: SortItem) {
  const sort = useSelector(selectSort);

  return (
    <div className={styles.sort}>
      <Icon type="sortIcon" className={styles.sort__icon} />
      <p className={styles.sort__text}>
        Сортировка по:
        <span
          className={styles.sort__category}
          onClick={handleChangePopup}
          onKeyDown={handleChangePopup}
          tabIndex={0}
          role="button"
        >
          {
            sort.title
          }

        </span>
      </p>
      {
        sort.asc ? (
          <img
            src={ArrowUp}
            alt="Сортировка по возрастанию"
            className={styles.sort__ascIcon}
          />
        ) : (
          <img
            src={ArrowDown}
            alt="Сортировка по убыванию"
            className={styles.sort__ascIcon}
          />
        )
      }
    </div>
  );
}

export default Sort;
