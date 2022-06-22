import React from 'react';
import PropTypes from 'prop-types';
import styles from './SelectItem.module.scss';

function SelectItem({ item, setIsActiveSort }) {
  return (
    <button className={styles.item} onClick={() => setIsActiveSort(true)} type="button">
      {item}
    </button>
  );
}

SelectItem.propTypes = {
  item: PropTypes.arrayOf.isRequired,
  setIsActiveSort: PropTypes.func.isRequired,
};

export default SelectItem;
