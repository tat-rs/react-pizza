import React from 'react';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';

function Home() {
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <>
      <Header />
      <main className="main">
        <Main />
      </main>
    </>
  );
}

export default Home;
