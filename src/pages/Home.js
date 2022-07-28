import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import { SearchContext } from '../context/SearchContext';
import '../index.css';

function Home({
  pizzas,
  isLoading,
}) {
  const [searchValue, setSearchValue] = useState('');

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      <Header />
      <main className="main">
        <Main
          pizzas={pizzas}
          isLoading={isLoading}
        />
      </main>
    </SearchContext.Provider>
  );
}

Home.propTypes = {
  pizzas: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Home;
