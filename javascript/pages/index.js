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
const IngredientsValues = IngredientsCombinaison.flat(1); // all ingredients.array + qty + unit
const IngredientOnlyArray = IngredientsValues.map((e) => e.ingredient); // all ingredient with double
const IngredientOnlyArrayLowerCase = IngredientOnlyArray.map((element) => {
  return element.toLowerCase();
});
const IngredientsList = new Set(IngredientOnlyArrayLowerCase); // Remove Double
const IngredientsArray = Array.from(IngredientsList);
IngredientsArray.sort((a, b) => (a > b ? 1 : -1));
// console.log(IngredientsArray);

// === Liste des Appareils - 11 appareils ===
const ApparelCombinaison = recipes.map((e) => e.appliance);
const ApparelValues = ApparelCombinaison.flat(1); // all values with double
const newApparelList = Array.from(ApparelValues);
const newApparelListWithoutUndefined = newApparelList.filter((element) => {
  return element !== undefined;
});
const newApparelListLowercase = newApparelListWithoutUndefined.map(
  (element) => {
    return element.toLowerCase();
  }
);
const ApparelList = new Set(newApparelListLowercase); // Remove Double
const ApparelArray = Array.from(ApparelList);
ApparelArray.sort((a, b) => (a > b ? 1 : -1));
// console.log(ApparelArray);

// === Listes des Ustensils - 22 ustensils ===
const UstensilsCombinaison = recipes.map((e) => e.ustensils);
const UstensilsValues = UstensilsCombinaison.flat(1); // all values with double
const UstensilsOnlyArrayLowerCase = UstensilsValues.map((element) => {
  return element.toLowerCase();
});
const UstensilsList = new Set(UstensilsOnlyArrayLowerCase); // Remove Double
const UstensilsArray = Array.from(UstensilsList);
UstensilsArray.sort((a, b) => (a > b ? 1 : -1));
// console.log(UstensilsArray);

//
// ====== Create List in Dropdown menu ======

// Create Ingredients List
IngredientsArray.forEach((element) => {
  const newFilter = getIngredientFilter(element);
  ingredientSection.appendChild(newFilter);
});

// Create Apparel List
ApparelArray.forEach((element) => {
  const newFilter = getApparelFilter(element);
  apparelSection.appendChild(newFilter);
});

// Create Ustensils List
UstensilsArray.forEach((element) => {
  const newFilter = getUstensilFilter(element);
  ustensilSection.appendChild(newFilter);
});

//
// ======== Action des Filtres - Eventlistener sur tag présents ?  ========

// (Element qui ne contiennent QUE Saladier)
const apparel = recipes.filter((element) => element.appliance == "Saladier");
// console.log(apparel);
