import React from 'react';
import { useLocation } from 'react-router-dom';
import CartButton from '../CartButton/CartButton';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';

import styles from './Header.module.scss';

function Header() {
  const location = useLocation();
  return (
    <header className={styles.header}>
      <Logo />
      {
        location.pathname === '/' && (
          <div className={styles.header__item}>
            <Search />
            <CartButton />
          </div>
        )
      }
    </header>
  );
}

export default Header;
