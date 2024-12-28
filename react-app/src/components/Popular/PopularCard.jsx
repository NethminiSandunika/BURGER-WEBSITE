import React from 'react';
import './PopularCard.css';

const PopularCard = ({ image, title, description }) => {
  return (
    <div className="popular__card">
      <div className="popular__box">
        <img src={image} alt={title} />
      </div>
      <h3 className="popular__title">{title}</h3>
      <p className="popular__description">{description}</p>
    </div>
  );
};

export default PopularCard;
