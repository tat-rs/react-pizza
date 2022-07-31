import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import SortIcon from '../../images/sort.svg';
import ArrowDown from '../../images/arrow-down.png';
import ArrowUp from '../../images/arrow-up.png';
import styles from './Sort.module.scss';
import { selectSort } from '../../store/filter/selectors';

function Sort({ handleChangePopup }) {
  const sort = useSelector(selectSort);

  return (
    <div className={styles.sort}>
      <img className={styles.sort__icon} src={SortIcon} alt="Сортировка" />
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

Sort.propTypes = {
  handleChangePopup: PropTypes.func.isRequired,
};

export default Sort;
