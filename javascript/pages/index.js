// ====== Display data (recipes) ======

// Dom elements
const recipesSection = document.querySelector(".section-recipes");
const ingredientSection = document.querySelector("#section-ingredient");
const apparelSection = document.querySelector("#section-apparel");
const ustensilSection = document.querySelector("#section-ustensil");

// forEach Recipe => Create Card via a Factory Patern (getRecipeCard)
recipes.forEach((recipes) => {
  const newRecipeCard = getRecipeCard(recipes);
  recipesSection.appendChild(newRecipeCard);
});

// ====== Filtres ======

// Listes : [ Ingrédients - Ustensiles - Appareil ]

// === Listes des Ingrédients (IngredientsList) ===
const IngredientsCombinaison = recipes.map((e) => e.ingredients); // all combinaison (recipes)
const IngredientsValues = IngredientsCombinaison.flat(1); // all ingredients array with qty
const IngredientOnlyArray = IngredientsValues.map((e) => e.ingredient); // all ingredient name with double
const IngredientOnlyArrayLowerCase = IngredientOnlyArray.map((element) => {
  return element.toLowerCase();
});
const IngredientsList = new Set(IngredientOnlyArrayLowerCase); // list without double (sauf err majuscules)
const newIngredientsList = Array.from(IngredientsList);
newIngredientsList.sort((a, b) => (a > b ? 1 : -1));
// console.log(newIngredientsList); // 114 ingrédients

// === Liste des Appareils (ApparelList) ===
const ApparelCombinaison = recipes.map((e) => e.appliance);
const ApparelValues = ApparelCombinaison.flat(1); // all values with double
const ApparelList = new Set(ApparelValues); // list without double
// console.log(ApparelList); // 11 appareils

// === Listes des Ustensils (UstensilsList) ===
const UstensilsCombinaison = recipes.map((e) => e.ustensils);
const UstensilsValues = UstensilsCombinaison.flat(1); // all values with double
const UstensilsList = new Set(UstensilsValues); // list without double
// console.log(UstensilsList); // 29 ustensils

// ====== Create Filter ForEach ======

// ForEach create one Filter
newIngredientsList.forEach((element) => {
  const newFilter = getFilter(element);
  ingredientSection.appendChild(newFilter);
});

// ForEach create one Filter
ApparelList.forEach((element) => {
  const newFilter = getFilter(element);
  apparelSection.appendChild(newFilter);
});

UstensilsList.forEach((element) => {
  const newFilter = getFilter(element);
  ustensilSection.appendChild(newFilter);
});
//
// ======== Action des Filtre - button value  ========

// (Element qui ne contiennent QUE Saladier)
const apparel = recipes.filter((element) => element.appliance == "Saladier");
// console.log(apparel);
