import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Sort from '../Sort/Sort';
import Сategories from '../Сategories/Сategories';
import PopupSort from '../PopupSort/PopupSort';
import Menu from '../Menu/Menu';
import styles from './Main.module.scss';

function Main({ pizzas }) {
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  function handleChangePopup() {
    setIsOpenPopup(!isOpenPopup);
  }
  return (
    <main className={styles.main}>
      <div className={styles.main__sort}>
        <Сategories />
        <Sort isOpenPopup={isOpenPopup} handleChangePopup={() => handleChangePopup()} />
        {
          isOpenPopup && <PopupSort />
        }
      </div>
      <Menu pizzas={pizzas} />
    </main>
  );
}

Main.propTypes = {
  pizzas: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Main;
