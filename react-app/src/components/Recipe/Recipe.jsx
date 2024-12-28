import React from 'react';
import './Recipe.css';
import RecipeCard from './RecipeCard';

const Recipe = () => {
  return (
    <section className="recipe section" id="recipe">
      <h2 className="section__title">Our Recipes</h2>
      <div className="recipe__container container grid">
        <RecipeCard 
          image="/assets/img/recipe-1.jpg" 
          title="Cheese Burger" 
          description="A delicious cheese burger with fresh ingredients."
        />
        <RecipeCard 
          image="/assets/img/recipe-2.jpg" 
          title="Chicken Burger" 
          description="A tasty chicken burger with a crispy touch."
        />
        {/* Add more RecipeCard components as needed */}
      </div>
    </section>
  );
};

export default Recipe;
