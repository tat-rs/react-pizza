import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import CartPage from '../../pages/CartPage';
import Home from '../../pages/Home';
import NotFoundPage from '../../pages/NotFoundPage';
import styles from './App.module.scss';
import { BASE_URL_API } from '../../utils/constants';

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId, sort } = useSelector((state) => state.filter);

  const category = categoryId > 0 ? categoryId : '';
  const asc = sort.asc ? 'asc' : 'desc';
  const property = sort.property === 'name' ? 'title' : sort.property;

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${BASE_URL_API}?category=${category}&sortBy=${property}&order=${asc}`)
      .then((res) => {
        setPizzas(res.data);
        setIsLoading(false);
      });
  }, [categoryId, sort]);

  return (
    <div className={styles.page__content}>
      <Routes>
        <Route
          exact
          path="/"
          element={(
            <Home
              pizzas={pizzas}
              isLoading={isLoading}
            />
          )}
        />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
