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

//
// ====== Filtres ======

// Généreration d'une liste pour chaque filtre : [ Ingrédients - Ustensiles - Appareil ]

// === Listes d'Ingrédients - 114 ingrédients ===
const IngredientsCombinaison = recipes.map((e) => e.ingredients); // all combinaison (recipes)
const IngredientsValues = IngredientsCombinaison.flat(1); // all ingredients array with qty
const IngredientOnlyArray = IngredientsValues.map((e) => e.ingredient); // all ingredient name with double
const IngredientOnlyArrayLowerCase = IngredientOnlyArray.map((element) => {
  return element.toLowerCase();
});
const IngredientsList = new Set(IngredientOnlyArrayLowerCase); // list without double (sauf err majuscules)
const newIngredientsList = Array.from(IngredientsList);
newIngredientsList.sort((a, b) => (a > b ? 1 : -1));
// console.log(newIngredientsList);

// === Liste des Appareils - 11 appareils ===
const ApparelCombinaison = recipes.map((e) => e.appliance);
const ApparelValues = ApparelCombinaison.flat(1); // all values with double
const ApparelList = new Set(ApparelValues); // list without double
// console.log(ApparelList);

// === Listes des Ustensils - 29 ustensils ===
const UstensilsCombinaison = recipes.map((e) => e.ustensils);
const UstensilsValues = UstensilsCombinaison.flat(1); // all values with double
const UstensilsList = new Set(UstensilsValues); // list without double
// console.log(UstensilsList);

//
// ====== Create List in Dropdown menu with Lists ======

// Create Ingredients List
newIngredientsList.forEach((element) => {
  const newFilter = getFilter(element);
  ingredientSection.appendChild(newFilter);
});

// Create Apparel List
ApparelList.forEach((element) => {
  const newFilter = getFilter(element);
  apparelSection.appendChild(newFilter);
});

// Create Ustensils List
UstensilsList.forEach((element) => {
  const newFilter = getFilter(element);
  ustensilSection.appendChild(newFilter);
});

//
// ======== Action des Filtre - Eventlistener sur lestag ?  ========

// (Element qui ne contiennent QUE Saladier)
const apparel = recipes.filter((element) => element.appliance == "Saladier");
// console.log(apparel);
