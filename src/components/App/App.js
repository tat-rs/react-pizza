import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import CartPage from '../../pages/CartPage';
import Home from '../../pages/Home';
import NotFoundPage from '../../pages/NotFoundPage';
import styles from './App.module.scss';
import fetchPizzas from '../../store/pizzas/thunk';
import { selectCategoryId, selectSort } from '../../store/filter/selectors';

function App() {
  const categoryId = useSelector(selectCategoryId);
  const sort = useSelector(selectSort);

  const dispatch = useDispatch();

  async function getPizzas() {
    const category = categoryId > 0 ? categoryId : '';
    const asc = sort.asc ? 'asc' : 'desc';
    const property = sort.property === 'name' ? 'title' : sort.property;

    dispatch(fetchPizzas({
      category,
      asc,
      property,
    }));
  }

  useEffect(() => {
    getPizzas();
  }, [categoryId, sort]);

  return (
    <div className={styles.page__content}>
      <Routes>
        <Route
          exact
          path="/"
          element={<Home />}
        />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
