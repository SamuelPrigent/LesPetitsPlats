// ====== Display data ======
// via console.log(recipes);

// Dom elements
const recipesSection = document.querySelector(".section-recipes");

// forEach Recipe => Create Card via a Factory Patern (getRecipeCard)
recipes.forEach((recipes) => {
  const newRecipeCard = getRecipeCard(recipes);
  recipesSection.appendChild(newRecipeCard);
});

// ====== Filtres ======

// Listes des éléments des boutons Filter Search - Ingrédients
console.log(recipes);

// Filtre Array
const set = new Set(recipes);

const ustensilsValues = recipes.map((e) => e.ustensils);
console.log(ustensilsValues);

const setUstensils = new Set(ustensilsValues);
// console.log(setUstensils);

// Filtre par Appareil - button value // (Element qui ne contiennent QUE Saladier)
const apparel = recipes.filter((element) => element.appliance == "Saladier");
// console.log(apparel);
