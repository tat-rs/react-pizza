import React from 'react';
import Cart from '../components/Cart/Cart';
import Header from '../components/Header/Header';

function CartPage() {
  return (
    <>
      <Header />
      <main className="main">
        <Cart />
      </main>
    </>
  );
}

export default CartPage;
