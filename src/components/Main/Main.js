import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Sort from '../Sort/Sort';
import Сategories from '../Сategories/Сategories';
import PopupSort from '../PopupSort/PopupSort';
import Menu from '../Menu/Menu';
import styles from './Main.module.scss';
import { selectError } from '../../store/pizzas/selectors';
import Message from '../Message/Message';
import { SERVER_ERROR_MESSAGE } from '../../utils/constants';

function Main() {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const error = useSelector(selectError);
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
      {
        error ? <Message text={SERVER_ERROR_MESSAGE} /> : <Menu />
      }
    </>
  );
}

export default Main;
