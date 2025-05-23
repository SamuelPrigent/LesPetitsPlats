import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

function RecipeCard({ recipe }) {
  if (!recipe) {
    return null;
  }
  // Handle potential issues with image paths if assets aren't found as expected
  const imageUrl = recipe.image && recipe.image.startsWith('assets/') ? `/${recipe.image}` : recipe.image;


  return (
    // Link wraps the entire card content
    <Link to={`/recipes/${recipe.id}`} className="card-recipes-link"> 
      <div className="card-recipes" tabIndex={-1} data-appliance={Array.isArray(recipe.appliance) ? recipe.appliance.join(',') : recipe.appliance} data-ustensils={recipe.ustensils ? recipe.ustensils.join(',') : ''}> {/* Added tabIndex -1 */}
        <div className="card-recipes-div">
          <img className="card-recipes-img" src={imageUrl} alt={recipe.name} />
        </div>
        <div className="card-recipes-txt">
          <div className="card-recipes-txt-top">
            <h2 className="card-recipes-txt-top-left">{recipe.name}</h2>
            <div className="card-recipes-txt-top-right">
              <img className="time-icon" src="/assets/time.svg" alt="time" />
              <div>{recipe.time} min</div>
            </div>
          </div>
          <div className="card-recipes-txt-bottom">
            <div className="card-recipes-txt-bottom-left">
              {recipe.ingredients.map((ing, index) => (
                <div key={index} className="card-recipes-txt-bottom-left-line">
                  <div className="card-recipes-txt-bottom-left-bold">{ing.ingredient}</div>
                  <div className="card-recipes-txt-bottom-left-quantity">
                    {ing.quantity ? (ing.unit ? `${ing.quantity}${ing.unit === 'grammes' ? 'g' : (ing.unit === 'cuillères à soupe' || ing.unit === 'cuillère à soupe' ? 'c.à.s' : ing.unit)}` : ing.quantity) : ''}
                  </div>
                </div>
              ))}
            </div>
            <div className="card-recipes-txt-bottom-right">
              {recipe.description}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default RecipeCard;
