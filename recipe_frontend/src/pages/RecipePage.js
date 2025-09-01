import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getRecipeById } from '../api/recipes';

// PUBLIC_INTERFACE
function RecipePage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const data = await getRecipeById(id);
      setRecipe(data);
    };
    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <div>Loading recipe...</div>;
  }

  return (
    <div className="recipe-detail-page">
       <div className="recipe-detail-header">
            <Link to="/" className="back-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18l-6-6 6-6" stroke="#292d32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Back</span>
            </Link>
            <h1 className="recipe-detail-title">{recipe.title}</h1>
      </div>

      <div className="recipe-detail-content">
        <img src={recipe.image} alt={recipe.title} className="recipe-detail-image" />
        <div className="recipe-info">
             <p className="creator">By {recipe.creator}</p>
             <div className="rating">
                <span className="star">★</span> {recipe.rating.toFixed(1)}
             </div>
        </div>
        
        <div className="recipe-instructions">
            <h2>Ingredients</h2>
            <ul>
                {recipe.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
            </ul>

            <h2>Instructions</h2>
            <p>{recipe.instructions}</p>
        </div>
      </div>
    </div>
  );
}

export default RecipePage;
