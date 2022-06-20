import React from 'react';
import LogoIcon from '../../images/logo.png';
import styles from './Logo.module.scss';

function Logo() {
  return (
    <a href="/" className={styles.logo}>
      <img className={styles.logo__image} src={LogoIcon} alt="Логотип" />
      <div className={styles.logo__desc}>
        <p className={styles.logo__text}>React Pizza</p>
        <p className={styles.logo__text}>самая вкусная пицца во вселенной</p>
      </div>
    </a>
  );
}

export default Logo;
