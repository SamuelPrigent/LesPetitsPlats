import React from 'react';
import RecipeCard from './RecipeCard';

function RecipeList({ recipes }) { // Accept recipes as a prop
  if (!recipes || recipes.length === 0) {
    return (
      <div className="section-recipes-error" style={{ display: 'flex' }}> {/* Make visible */}
        Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc.
        <img alt="error no recipes" className="section-recipes-error-svg" src="/assets/NoData.svg" />
      </div>
    );
  }

  return (
    <div className="section-recipes">
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}

export default RecipeList;
