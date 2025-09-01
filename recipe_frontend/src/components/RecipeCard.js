import React from 'react';
import { Link } from 'react-router-dom';

// PUBLIC_INTERFACE
function RecipeCard({ recipe }) {
  return (
    <div className="card">
      <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="thumb">
          <img src={recipe.image} alt={recipe.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div className="rating">
            <span className="star" aria-hidden="true">★</span>
            <span className="score">{recipe.rating.toFixed(1)}</span>
          </div>
        </div>
        <div className="card-body">
            <div className="title">{recipe.title}</div>
            <div className="creator">{recipe.creator}</div>
        </div>
      </Link>
    </div>
  );
}

export default RecipeCard;
