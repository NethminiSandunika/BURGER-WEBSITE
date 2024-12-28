import React from 'react';
import './Popular.css';
import PopularCard from './PopularCard';

const Popular = () => {
  return (
    <section className="popular section" id="popular">
      <h2 className="section__title">Popular Items</h2>
      <div className="popular__container container grid">
        <PopularCard 
          image="/assets/img/popular-1.jpg" 
          title="Veggie Burger" 
          description="A healthy veggie burger full of flavor."
        />
        <PopularCard 
          image="/assets/img/popular-2.jpg" 
          title="Beef Burger" 
          description="A juicy beef burger, tender and delicious."
        />
        {/* Add more PopularCard components as needed */}
      </div>
    </section>
  );
};

export default Popular;
