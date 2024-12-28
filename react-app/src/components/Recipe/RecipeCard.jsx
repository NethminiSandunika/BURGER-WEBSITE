import React from 'react';
import './RecipeCard.css';

const RecipeCard = ({ image, title, description }) => {
  return (
    <div className="recipe__card">
      <div className="recipe__box">
        <img src={image} alt={title} />
      </div>
      <h3 className="recipe__title">{title}</h3>
      <p className="recipe__description">{description}</p>
    </div>
  );
};

export default RecipeCard;
