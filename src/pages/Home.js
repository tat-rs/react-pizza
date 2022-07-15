import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import '../index.css';
import api from '../utils/api';

function Home() {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    id: 0,
    title: 'популярности',
    property: 'rating',
    asc: true,
  });

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
    <>
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
    </>
  );
}

export default Home;
