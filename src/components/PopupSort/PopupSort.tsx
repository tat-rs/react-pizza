import React from 'react';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import styles from './PopupSort.module.scss';
import ArrowUp from '../../assets/png/arrow-up.png';
import ArrowDown from '../../assets/png/arrow-down.png';
import { sortTypies } from '../../utils/constants';
import { setSortType } from '../../store/filter/slice';
import { selectSort } from '../../store/filter/selectors';

type PopupSortItem = {
  closePopup: () => void;
}

type SortTypeItem = {
    id: number;
    title: string;
    property: string;
    asc: boolean;
}

function PopupSort({ closePopup }: PopupSortItem) {
  const sort = useSelector(selectSort);
  const dispatch = useDispatch();

  function onChangeSortProperty(type: SortTypeItem) {
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

export default PopupSort;
