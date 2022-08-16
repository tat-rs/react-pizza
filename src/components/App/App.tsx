import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Loader from '../Loader/Loader';
import styles from './App.module.scss';

const CartPage = lazy(() => import('../../pages/CartPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage'));

function App() {
  return (
    <div className={styles.page__content}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
