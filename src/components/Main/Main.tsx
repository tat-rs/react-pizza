import React, { useEffect, useRef, useState } from 'react';
import Sort from '../Sort/Sort';
import Сategories from '../Сategories/Сategories';
import PopupSort from '../PopupSort/PopupSort';
import Menu from '../Menu/Menu';
import styles from './Main.module.scss';

function Main() {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const sortRef = useRef(null);

  const closePopup = () => {
    setIsOpenPopup(false);
  };

  useEffect(() => {
    const handleUpdateClick = (event: MouseEvent) => {
      if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
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
      <Menu />
    </>
  );
}

export default Main;
