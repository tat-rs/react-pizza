import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import CartPage from '../../pages/CartPage';
import MainPage from '../../pages/MainPage';
import NotFoundPage from '../../pages/NotFoundPage';
import { BASE_URL_API } from '../../utils/constants';
import styles from './App.module.scss';

function App() {
  const [pizzas, setPizzas] = useState([]);

  function getPizzas() {
    return fetch(BASE_URL_API, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error();
      });
  }

  useEffect(() => {
    getPizzas()
      .then((res) => {
        setPizzas(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.page__content}>
      <Routes>
        <Route exact path="/" element={<MainPage pizzas={pizzas} />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
