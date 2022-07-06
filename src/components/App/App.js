import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CartPage from '../../pages/CartPage';
import MainPage from '../../pages/MainPage';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.page__content}>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
