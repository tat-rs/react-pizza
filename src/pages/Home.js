import React, { useEffect, useState } from 'react';

import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import { SearchContext } from '../context/SearchContext';
import '../index.css';
import api from '../utils/api';
import { defaultSortType } from '../utils/constants';

function Home() {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState(defaultSortType);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setIsLoading(true);
    api.getPizzas(categoryId, sortType)
      .then((res) => {
        setPizzas(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }, [categoryId, sortType]);

  const changeCategory = (id) => {
    setCategoryId(id);
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
          sortType={sortType}
          setSortType={setSortType}
        />
      </main>
    </SearchContext.Provider>
  );
}

export default Home;
