import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Sort from '../Sort/Sort';
import Сategories from '../Сategories/Сategories';
import PopupSort from '../PopupSort/PopupSort';
import Menu from '../Menu/Menu';
import styles from './Main.module.scss';

function Main({
  pizzas,
  isLoading,
}) {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const sortRef = useRef();

  const closePopup = () => {
    setIsOpenPopup(false);
  };

  useEffect(() => {
    const handleUpdateClick = (event) => {
      if (!event.path.includes(sortRef.current)) {
        closePopup();
      }
    };
    document.body.addEventListener('click', handleUpdateClick);

    return () => {
      document.body.removeEventListener('click', handleUpdateClick);
    };
  }, []);

  const handleChangePopup = () => {
    setIsOpenPopup(!isOpenPopup);
  };

  return (
    <>
      <div className={styles.sort} ref={sortRef}>
        <Сategories />
        <div className={styles.sort__ref}>
          <Sort
            isOpenPopup={isOpenPopup}
            handleChangePopup={handleChangePopup}
          />
          {
          isOpenPopup
            && (
            <PopupSort
              closePopup={closePopup}
            />
            )
        }
        </div>
      </div>
      <Menu pizzas={pizzas} isLoading={isLoading} />
    </>
  );
}

Main.propTypes = {
  pizzas: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Main;
