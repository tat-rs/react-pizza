import React from 'react';

import styles from './Loader.module.scss';

function Loader() {
  return (
    <div className={styles.ldsRing}>
      <div className={styles.ldsRing__container}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export default Loader;
