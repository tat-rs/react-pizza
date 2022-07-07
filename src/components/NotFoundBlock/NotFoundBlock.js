import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NotFoundBlock.module.scss';

function NotFoundBlock() {
  const navigate = useNavigate();
  return (
    <section className={styles.notFound}>
      <div className={styles.notFound__content}>
        <h2 className={styles.notFound__title}>404</h2>
        <p className={styles.notFound__text}>Страница не найдена</p>
      </div>
      <button className={styles.notFound__btnBack} onClick={() => navigate('/')} type="button">На главную страницу</button>
    </section>
  );
}

export default NotFoundBlock;
