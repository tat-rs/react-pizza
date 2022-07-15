import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Sort from '../Sort/Sort';
import Сategories from '../Сategories/Сategories';
import PopupSort from '../PopupSort/PopupSort';
import Menu from '../Menu/Menu';
import styles from './Main.module.scss';

function Main({
  pizzas,
  isLoading,
  categoryId,
  changeCategory,
  sortType,
  setSortType,
}) {
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const handleChangePopup = () => {
    setIsOpenPopup(!isOpenPopup);
  };

  const closePopup = () => {
    setIsOpenPopup(false);
  };
  return (
    <>
      <div className={styles.sort}>
        <Сategories
          categoryId={categoryId}
          changeCategory={changeCategory}
        />
        <Sort
          isOpenPopup={isOpenPopup}
          handleChangePopup={handleChangePopup}
          sortType={sortType}
        />
        {
          isOpenPopup
            && (
            <PopupSort
              sortType={sortType}
              setSortType={setSortType}
              closePopup={closePopup}
            />
            )
        }
      </div>
      <Menu pizzas={pizzas} isLoading={isLoading} />
    </>
  );
}

Main.propTypes = {
  pizzas: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  isLoading: PropTypes.bool.isRequired,
  categoryId: PropTypes.number.isRequired,
  changeCategory: PropTypes.func.isRequired,
  sortType: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    property: PropTypes.string.isRequired,
    asc: PropTypes.bool.isRequired,
  }).isRequired,
  setSortType: PropTypes.func.isRequired,
};

export default Main;
