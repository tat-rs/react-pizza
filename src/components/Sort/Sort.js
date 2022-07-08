import React from 'react';
import PropTypes from 'prop-types';
import SortIcon from '../../images/sort.svg';
import styles from './Sort.module.scss';

function Sort({ handleChangePopup }) {
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
          популярности

        </span>
      </p>
    </div>
  );
}

Sort.propTypes = {
  handleChangePopup: PropTypes.func.isRequired,
};

export default Sort;
