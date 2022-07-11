import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import { BASE_URL_API } from '../utils/constants';

function MainPage() {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <Header />
      <Main pizzas={pizzas} isLoading={isLoading} />
    </>
  );
}

export default MainPage;
