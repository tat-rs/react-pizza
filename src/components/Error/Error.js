import React from 'react';
import styles from './Error.module.scss';

function Error() {
  return (
    <div className={styles.error}>
      <p className={styles.error__text}>
        К сожалению, произошла ошибка при запросе к серверу :(
      </p>
      <p className={styles.error__text}>Попробуйте обновить страницу позже</p>
    </div>
  );
}

export default Error;
