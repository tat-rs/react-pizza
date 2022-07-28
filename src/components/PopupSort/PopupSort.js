import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import styles from './PopupSort.module.scss';
import ArrowDown from '../../images/arrow-down.png';
import ArrowUp from '../../images/arrow-up.png';
import { sortTypies } from '../../utils/constants';
import { setSortType } from '../../store/filter/filterSlice';

function PopupSort({ closePopup }) {
  const { sort } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  function onChangeSortProperty(type) {
    dispatch(setSortType(type));
    closePopup();
  }

  return (
    <div className={styles.popup}>
      <ul className={styles.popup__list}>
        {
          sortTypies.map((property) => (
            <li
              key={property.id}
              className={classNames(styles.popup__item, {
                [styles.popup__item_active]: sort.id === property.id,
              })}
              onClick={() => onChangeSortProperty(property)}
              onKeyDown={() => onChangeSortProperty(property)}
              role="menuitem"
            >
              <p className={styles.popup__title}>{property.title}</p>
              {
                property.asc ? (
                  <img
                    src={ArrowUp}
                    alt="Сортировка по возрастанию"
                    className={styles.popup__icon}
                  />
                ) : (
                  <img
                    src={ArrowDown}
                    alt="Сортировка по убыванию"
                    className={styles.popup__icon}
                  />
                )
              }
            </li>
          ))
        }
      </ul>
    </div>
  );
}

PopupSort.propTypes = {
  closePopup: PropTypes.func.isRequired,
};

export default PopupSort;
