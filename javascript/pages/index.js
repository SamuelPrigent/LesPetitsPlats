// ====== Dom elements ======
const recipesSection = document.querySelector(".section-recipes");
const ingredientSection = document.querySelector("#section-ingredient");
const apparelSection = document.querySelector("#section-apparel");
const ustensilSection = document.querySelector("#section-ustensil");

//
// ====== Factory for Recipes Card ======

// Create Recipes Card [50]
recipes.forEach((recipes) => {
  const newRecipeCard = getRecipeCard(recipes);
  recipesSection.appendChild(newRecipeCard);
});

//
// ====== Filtres ======

// === Création listes sans doubles [ingrédients, ustensiles, appareil] ===

// === Listes des ingrédients [112] ===
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

// === Liste des appareils [10] ===
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

// === Listes des ustensils [22] ===
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
// ====== Factory for Dropdown List ======

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
// ====== Fonctionnalités de Recherche ======

// === Barre principale (recettes) ===
function searchRecipe() {
  // get input value
  const searchBar = document.getElementById("mainSearchBar");
  const search = searchBar.value.toLowerCase();
  // const for loop
  const divSection = document.querySelector(".section-recipes");
  const recipe = divSection.querySelectorAll(".card-recipes");
  const recipeArray = Array.from(recipe);

  // Check if mach for all items => hide those who don't match
  recipeArray.forEach((element) => {
    // const text = element.innerText.toLocaleLowerCase(); // Tout le text de l'élément

    // Titre
    const textTitle = element
      .querySelector(".card-recipes-txt-top-left")
      .innerText.toLocaleLowerCase();
    // Title sans accent
    const textTitleSimple = textTitle
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    // Description
    const textDsc = element
      .querySelector(".card-recipes-txt-bottom-right")
      .innerText.toLocaleLowerCase();
    // Description sans accent
    const textDscSimple = textDsc
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    // search.length >= 3
    if (search.length >= 3) {
    }
    if (
      textTitle.includes(search) ||
      textDsc.includes(search) ||
      textTitleSimple.includes(search) ||
      textDscSimple.includes(search)
    ) {
      // reshow it after hide it
      element.style.display = "";
      //   console.log(text);
    } else {
      // hide it
      element.style.display = "none";
    }
  });
}

const mainSearchBar = document.getElementById("mainSearchBar");
// Change on Input
mainSearchBar.addEventListener("input", (e) => {
  searchRecipe();
});

// === Dropdown Searchbar (ingredients) ===
// const newText = text.charAt(0).toUpperCase() + text.slice(1); // If have to capitalise first letter

function searchIngredient() {
  // get input value
  const searchBar = document.getElementById("searchIngredient");
  const search = searchBar.value.toLowerCase();
  // const for loop
  const ul = document.getElementById("section-ingredient");
  const li = ul.getElementsByTagName("li");
  const liArray = Array.from(li);

  // Check if mach for all items => hide those who don't match
  liArray.forEach((element) => {
    const text = element.innerText.toLocaleLowerCase();
    const textSimple = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (text.includes(search) || textSimple.includes(search)) {
      // reshow it after hide it
      element.style.display = "";
      //   console.log(text);
    } else {
      // hide it
      element.style.display = "none";
    }
  });
}

const ingredientSearchBar = document.getElementById("searchIngredient");
// Change on Input
ingredientSearchBar.addEventListener("input", (e) => {
  searchIngredient();
});

// === Dropdown Searchbar (appareil) ===
function searchApparel() {
  // get input value
  const searchBar = document.getElementById("searchApparel");
  const search = searchBar.value.toLowerCase();
  // const for loop
  const ul = document.getElementById("section-apparel");
  const li = ul.getElementsByTagName("li");
  const liArray = Array.from(li);

  // Check if mach for all items => hide those who don't match
  liArray.forEach((element) => {
    const text = element.innerText.toLocaleLowerCase();
    const textSimple = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (text.includes(search) || textSimple.includes(search)) {
      // reshow it after hide it
      element.style.display = "";
    } else {
      // hide it
      element.style.display = "none";
    }
  });
}

const apparelSearchBar = document.getElementById("searchApparel");
// Change on Input
apparelSearchBar.addEventListener("input", (e) => {
  searchApparel();
});

// === Dropdown Searchbar (ustensil) ===
function searchUstensil() {
  // get input value
  const searchBar = document.getElementById("searchUstensil");
  const search = searchBar.value.toLowerCase();
  // const for loop
  const ul = document.getElementById("section-ustensil");
  const li = ul.getElementsByTagName("li");
  const liArray = Array.from(li);

  // Check if mach for all items => hide those who don't match
  liArray.forEach((element) => {
    const text = element.innerText.toLocaleLowerCase();
    const textSimple = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (text.includes(search) || textSimple.includes(search)) {
      // reshow it after hide it
      element.style.display = "";
    } else {
      // hide it
      element.style.display = "none";
    }
  });
}

const ustensilSearchBar = document.getElementById("searchUstensil");
// Change on Input
ustensilSearchBar.addEventListener("input", (e) => {
  searchUstensil();
});

//
// ====== Fonctionnalités des Tags (filtres)  ======

// === TAG - Eventlistener tag existant ? ===
