import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Recipe from './components/Recipe';
import Popular from './components/Popular';
import Delivery from './components/Delivery';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <Recipe />
        <Popular />
        <Delivery />
        <Contact />
      </main>
    </div>
  );
};

export default App;
