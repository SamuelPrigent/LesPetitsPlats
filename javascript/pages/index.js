// Display data
console.log(recipes);

// Dom elements
const recipesSection = document.querySelector(".section-recipes");

// for Each Recipe => Create Card
recipes.forEach((recipes) => {
  const newRecipeCard = getRecipeCard(recipes);
  recipesSection.appendChild(newRecipeCard);
  console.log(recipes.name);
});
