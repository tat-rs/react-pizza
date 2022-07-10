import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';

function MainPage({ pizzas }) {
  return (
    <>
      <Header />
      <Main pizzas={pizzas} />
    </>
  );
}

MainPage.propTypes = {
  pizzas: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default MainPage;
