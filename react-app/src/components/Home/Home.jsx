import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__container container grid">
        <div className="home__data">
          <h1 className="home__title">Best Burger in Town</h1>
          <p className="home__description">
            Taste the best quality burgers made with fresh ingredients and a lot of love.
          </p>
          <a href="#recipe" className="button">Order Now</a>
        </div>
      </div>
    </section>
  );
};

export default Home;
