import React from 'react';
import Cart from '../Cart/Cart';
import Logo from '../Logo/Logo';

import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Cart />
    </header>
  );
}

export default Header;
