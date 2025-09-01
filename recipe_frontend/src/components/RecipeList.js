import React from 'react';
import RecipeCard from './RecipeCard';

// PUBLIC_INTERFACE
function RecipeList({ recipes }) {
  if (!recipes.length) {
    return <p>No recipes found. Try a different search or category.</p>;
  }

  return (
    <div className="cards">
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}

export default RecipeList;
