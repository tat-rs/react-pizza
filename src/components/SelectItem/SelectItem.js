import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './SelectItem.module.scss';

function SelectItem({ item }) {
  const [isActiveSort, setIsActiveSort] = useState(false);
  return (
    <button
      className={classNames(styles.item, {
        [styles.item_active]: isActiveSort,
      })}
      onClick={() => setIsActiveSort(!isActiveSort)}
      type="button"
    >
      {item}
    </button>
  );
}

SelectItem.propTypes = {
  item: PropTypes.string.isRequired,
};

export default SelectItem;
