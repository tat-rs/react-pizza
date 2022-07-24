import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import { SearchContext } from '../context/SearchContext';
import '../index.css';
import { setCategoryId, setSortType } from '../store/filter/filterSlice';
import api from '../utils/api';

function Home() {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const { categoryId, sort } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    api.getPizzas(categoryId, sort)
      .then((res) => {
        setPizzas(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }, [categoryId, sort]);

  const changeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const changeSortType = (type) => {
    dispatch(setSortType(type));
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      <Header />
      <main className="main">
        <Main
          pizzas={pizzas}
          isLoading={isLoading}
          categoryId={categoryId}
          changeCategory={changeCategory}
          sortType={sort}
          setSortType={changeSortType}
        />
      </main>
    </SearchContext.Provider>
  );
}

export default Home;
