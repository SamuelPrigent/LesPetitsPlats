import React from 'react';
import { useParams, Link } from 'react-router-dom'; // Import Link for a back button

function RecipePage({ recipes }) { // Accept all recipes as a prop
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === parseInt(id));

  if (!recipe) {
    return (
      <div className="recipe-page-container recipe-page-not-found"> {/* Added class for not found */}
        <h2>Recipe not found!</h2>
        <Link to="/" className="back-link">Go back to recipes</Link>
      </div>
    );
  }

  // Handle potential issues with image paths
  const imageUrl = recipe.image && recipe.image.startsWith('assets/') ? `/${recipe.image}` : recipe.image;

  return (
    <div className="recipe-page-container">
      <Link to="/" className="back-link">← Back to all recipes</Link>
      <h1>{recipe.name}</h1>
      <img src={imageUrl} alt={recipe.name} className="recipe-page-image" />
      <div className="recipe-page-details">
        <p><strong>Servings:</strong> {recipe.servings}</p>
        <p><strong>Time:</strong> {recipe.time} minutes</p>
        {/* Handle appliance being an array or string */}
        <p><strong>Appliance:</strong> {Array.isArray(recipe.appliance) ? recipe.appliance.join(', ') : (recipe.appliance || 'N/A')}</p>
        <div>
          <strong>Ingredients:</strong>
          <ul>
            {recipe.ingredients.map((ing, index) => (
              <li key={index}>
                {ing.ingredient}
                {ing.quantity ? ` - ${ing.quantity}` : ''}
                {/* Corrected unit display for consistency */}
                {ing.quantity && ing.unit ? ` ${ing.unit === 'grammes' ? 'g' : (ing.unit === 'cuillères à soupe' || ing.unit === 'cuillère à soupe' ? 'c.à.s' : ing.unit)}` : (ing.unit ? ` ${ing.unit}` : '')}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <strong>Ustensils:</strong>
          <ul>
            {recipe.ustensils.map((ust, index) => (
              <li key={index}>{ust}</li>
            ))}
          </ul>
        </div>
        <p><strong>Description:</strong> {recipe.description}</p>
      </div>
    </div>
  );
}

export default RecipePage;
