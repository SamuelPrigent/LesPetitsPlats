// ====== Dom elements ======
const recipesSection = document.querySelector(".section-recipes");
const ingredientSection = document.querySelector("#section-ingredient");
const apparelSection = document.querySelector("#section-apparel");
const ustensilSection = document.querySelector("#section-ustensil");

//
// ====== Call Factory for Recipes Card ======

// Create Recipes Card [50]
recipes.forEach((recipes) => {
  const newRecipeCard = getRecipeCard(recipes);
  recipesSection.appendChild(newRecipeCard);
});

//
// ====== Filtres ======

// === Création listes sans doubles [ingrédients, ustensiles, appareil] ===

// === Listes des ingrédients [112] ===
function getIngredientsList() {
  const ingredientsCombinaison = recipes.map((e) => e.ingredients); // all combinaison (recipes)
  const ingredientsValues = ingredientsCombinaison.flat(1); // all ingredients.array + qty + unit
  const ingredientOnlyArray = ingredientsValues.map((e) => e.ingredient); // all ingredient with double
  const ingredientOnlyArrayLowerCase = ingredientOnlyArray.map((element) => {
    return element.toLowerCase();
  });
  const ingredientsList = new Set(ingredientOnlyArrayLowerCase); // Remove Double
  const ingredientsArray = Array.from(ingredientsList);
  ingredientsArray.sort((a, b) => (a > b ? 1 : -1));
  // console.log(ingredientsArray);
  return ingredientsArray;
}

// Create [Ingrédients] with Search Result
function getIngredientsListWithSearchResult(searchResult) {
  // console.log(searchResult);
  let newIngredientListWithDouble = [];
  let newIngredientListWithoutDouble = [];
  let newIngredientListArray = [];
  //
  searchResult.forEach((element) => {
    // Ingredients Div in One Card
    const ingredientDiv = element.querySelectorAll(
      ".card-recipes-txt-bottom-left-bold"
    );
    ingredientDiv.forEach((element) => {
      const oneIngredientOfList = element.innerText; // pas besoins de lowercase
      newIngredientListWithDouble.push(oneIngredientOfList);
    });
    // Après avoir parcouru toute les div et fait la liste
    newIngredientListWithoutDouble = new Set(newIngredientListWithDouble); // Remove Double
    newIngredientListArray = Array.from(newIngredientListWithoutDouble);
    newIngredientListArray.sort((a, b) => (a > b ? 1 : -1));
  });
  // Liste total des ingredients avec double
  // console.log(newIngredientListWithDouble);
  // console.log(newIngredientListArray);

  return newIngredientListArray;
}

// === Liste des appareils [10] ===
function getApparelsList() {
  const apparelCombinaison = recipes.map((e) => e.appliance);
  const apparelValues = apparelCombinaison.flat(1); // all values with double
  const newApparelList = Array.from(apparelValues);
  const newApparelListWithoutUndefined = newApparelList.filter((element) => {
    return element !== undefined;
  });
  const newApparelListLowercase = newApparelListWithoutUndefined.map(
    (element) => {
      return element.toLowerCase();
    }
  );
  const apparelList = new Set(newApparelListLowercase); // Remove Double
  const apparelsArray = Array.from(apparelList);
  apparelsArray.sort((a, b) => (a > b ? 1 : -1));
  // console.log(apparelsArray);
  return apparelsArray;
}

// Create [Apparel] with Search Result
function getApparelsListWithSearchResult(searchResult) {
  // console.log(searchResult);
  let newApparelListWithDouble = [];
  let newApparelListWithoutDouble = [];
  let newApparelListArray = [];
  //
  searchResult.forEach((element) => {
    // Apparel Div in One Card
    if (element.dataset.apparellist) {
      const apparelDiv = element.dataset.apparellist.toLowerCase();
      const apparelList = apparelDiv.split(",");

      apparelList.forEach((element) => {
        newApparelListWithDouble.push(element);
      });
      // Après avoir parcouru toute les div et fait la liste
      newApparelListWithoutDouble = new Set(newApparelListWithDouble); // Remove Double
      newApparelListArray = Array.from(newApparelListWithoutDouble);
      newApparelListArray.sort((a, b) => (a > b ? 1 : -1));
    }
  });
  // Liste total des ingredients avec double
  // console.log(NewApparelListWithDouble);
  // console.log(NewApparelListArray);

  return newApparelListArray;
}

// === Listes des ustensils [22] ===
function getUstensilsList() {
  const ustensilsCombinaison = recipes.map((e) => e.ustensils);
  const ustensilsValues = ustensilsCombinaison.flat(1); // all values with double
  const ustensilsOnlyArrayLowerCase = ustensilsValues.map((element) => {
    return element.toLowerCase();
  });
  const ustensilsList = new Set(ustensilsOnlyArrayLowerCase); // Remove Double
  const ustensilsArray = Array.from(ustensilsList);
  ustensilsArray.sort((a, b) => (a > b ? 1 : -1));
  // console.log(UstensilsArray);
  return ustensilsArray;
}

// Create [Ustensils] with Search Result
function getUstensilsListWithSearchResult(searchResult) {
  // console.log(searchResult);
  let newUstensilListWithDouble = [];
  let newUstensilListWithoutDouble = [];
  let newUstensilListArray = [];
  //
  searchResult.forEach((element) => {
    if (element.dataset.ustensillist) {
      // Ustensil Div in One Card
      const ustensilDiv = element.dataset.ustensillist.toLowerCase();
      const ustensilList = ustensilDiv.split(",");

      ustensilList.forEach((element) => {
        newUstensilListWithDouble.push(element);
      });
      // Après avoir parcouru toute les div et fait la liste
      newUstensilListWithoutDouble = new Set(newUstensilListWithDouble); // Remove Double
      newUstensilListArray = Array.from(newUstensilListWithoutDouble);
      newUstensilListArray.sort((a, b) => (a > b ? 1 : -1));
    }
  });
  // Liste total des ingredients avec double
  // console.log(NewUstensilListWithDouble);
  // console.log(NewUstensilListArray);

  return newUstensilListArray;
}

//
// ====== Factory for Dropdown List ======

// === Create <li> in Dropdown with All Recipe ===

// Create Ingredients List
const ingredientsArray = getIngredientsList();
ingredientsArray.forEach((element) => {
  const newFilter = getIngredientFilter(element);
  ingredientSection.appendChild(newFilter);
});

// Create Apparel List
const apparelsArray = getApparelsList();
apparelsArray.forEach((element) => {
  const newFilter = getApparelFilter(element);
  apparelSection.appendChild(newFilter);
});

// Create Ustensils List
const ustensilsArray = getUstensilsList();
ustensilsArray.forEach((element) => {
  const newFilter = getUstensilFilter(element);
  ustensilSection.appendChild(newFilter);
});

// === Create <li> in Dropdown from searchResult ===

// Refresh Ingredients List w/ searchResult (from global algortihm)
function refreshIngredientsList(searchResult) {
  ingredientSection.innerHTML = ""; // vide l'ancienne liste
  const newIngredientsArray = getIngredientsListWithSearchResult(searchResult);
  newIngredientsArray.forEach((element) => {
    const newFilter = getIngredientFilter(element);
    ingredientSection.appendChild(newFilter);
  });
}

// Refresh Apparel List w/ searchResult (from global algortihm)
function refreshApparelsList(searchResult) {
  apparelSection.innerHTML = ""; // vide l'ancienne liste
  const newApparelsArray = getApparelsListWithSearchResult(searchResult);
  newApparelsArray.forEach((element) => {
    const newFilter = getApparelFilter(element);
    apparelSection.appendChild(newFilter);
  });
}

// Refresh Ustensils List w/ searchResult (from global algortihm)
function refreshUstensilsList(searchResult) {
  ustensilSection.innerHTML = ""; // vide l'ancienne liste
  const newUstensilsArray = getUstensilsListWithSearchResult(searchResult);
  newUstensilsArray.forEach((element) => {
    const newFilter = getUstensilFilter(element);
    ustensilSection.appendChild(newFilter);
  });
}

//
// ====== Fonctionnalités de Recherche ======

//
// === Search One Filter in Dropdown (=> Create Tag) ===

function searchOneFilter() {
  const dropdownsElement = document.querySelectorAll(".dropdown"); // récupère les 3 dropdown

  // for each dropdown
  dropdownsElement.forEach((dropdown) => {
    // get input value
    const searchBar = dropdown.querySelector(".dropdown-searchBar"); // class name
    const search = searchBar.value.toLowerCase();
    // const for loop
    const ul = dropdown.querySelector(".dropdown-menu");
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
  });
}

// == Check input change forEach Dropdown SearchBar ==
const AllSearchBar = document.querySelectorAll(".dropdown-searchBar");
AllSearchBar.forEach((element) => {
  element.addEventListener("input", (e) => {
    searchOneFilter();
  });
});

//
// ===== Actions de Recherche par Type ======

// ** master  with forEach + Array push **

// === Première Recherche ===

function searchRecipe(searchValue, searchType) {
  // get card elements for loop in
  const divSection = document.querySelector(".section-recipes");
  const recipesCard = divSection.querySelectorAll(".card-recipes");
  const recipeArray = Array.from(recipesCard);

  // Initialiser un array
  const tagSearchResultElement = [];

  // Hide/Show Tag + Create an array of [elements] w/ those who mach
  recipeArray.forEach((element) => {
    //
    // for Ingredient Tag
    if (searchType == "ingredient") {
      const textIngredient = element
        .querySelector(".card-recipes-txt-bottom-left")
        .innerText.toLocaleLowerCase();
      const textIngredientSimple = textIngredient
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      if (
        textIngredient.includes(searchValue) ||
        textIngredientSimple.includes(searchValue)
      ) {
        // reshow it after hide it
        element.style.display = "";
        // Create Array with Element who match
        tagSearchResultElement.push(element);
      } else {
        // hide it
        element.style.display = "none";
      }
    }

    // for Apparel Tag
    if (searchType == "apparel") {
      if (element.dataset.apparellist) {
        const textApparel = element.dataset.apparellist.toLowerCase();
        const textApparelSimple = textApparel
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");

        if (
          textApparel.includes(searchValue) ||
          textApparelSimple.includes(searchValue)
        ) {
          // reshow it after hide it
          element.style.display = "";
          // Create Array with Element who match
          tagSearchResultElement.push(element);
        } else {
          // hide it
          element.style.display = "none";
        }
      } else {
        // hide it
        element.style.display = "none";
      }
    }

    // for Ustensil Tag
    if (searchType == "ustensil") {
      if (element.dataset.ustensillist) {
        const textUstensil = element.dataset.ustensillist.toLowerCase();
        const textUstensilSimple = textUstensil
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");

        if (
          textUstensil.includes(searchValue) ||
          textUstensilSimple.includes(searchValue)
        ) {
          // reshow it after hide it
          element.style.display = "";
          // Create Array with Element who match
          tagSearchResultElement.push(element);
        } else {
          // hide it
          element.style.display = "none";
        }
      } else {
        // hide it
        element.style.display = "none";
      }
    }

    // for main bar search input text
    if (searchType == "mainbar") {
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
      // Ingredients list
      const textIngredient = element
        .querySelector(".card-recipes-txt-bottom-left")
        .innerText.toLocaleLowerCase();
      const textIngredientSimple = textIngredient
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      // if Value >= 3
      if (searchValue.length >= 3) {
        if (
          textTitle.includes(searchValue) ||
          textDsc.includes(searchValue) ||
          textTitleSimple.includes(searchValue) ||
          textDscSimple.includes(searchValue) ||
          textIngredient.includes(searchValue) ||
          textIngredientSimple.includes(searchValue)
        ) {
          // reshow it after hide it
          element.style.display = "";
          // Create Array with Element who match
          tagSearchResultElement.push(element);
        } else {
          // hide it
          element.style.display = "none";
        }
      }
      // if Value < 3 => Show all
      if (searchValue.length < 3) {
        // reshow all after hide it
        element.style.display = "";
        // Create Array with Element who match
        tagSearchResultElement.push(element); // here ?
      }
    }
  });

  return tagSearchResultElement;
}

// ===== Recherche dans le tableau de la précédente recherche =====
function searchRecipeWithPreviousResults(
  previousTagSearchResult,
  searchValue,
  searchType
) {
  // Initialiser un array
  const tagSearchResultElement = [];

  // Hide/Show Tag + Create an array of [elements] w/ those who mach
  previousTagSearchResult.forEach((element) => {
    //
    // for Ingredient Tag
    if (searchType == "ingredient") {
      const textIngredient = element
        .querySelector(".card-recipes-txt-bottom-left")
        .innerText.toLocaleLowerCase();
      const textIngredientSimple = textIngredient
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      if (
        textIngredient.includes(searchValue) ||
        textIngredientSimple.includes(searchValue)
      ) {
        // reshow it after hide it
        element.style.display = "";
        // Create Array with Element who match
        tagSearchResultElement.push(element);
      } else {
        // hide it
        element.style.display = "none";
      }
    }

    // for Apparel Tag
    if (searchType == "apparel") {
      if (element.dataset.apparellist) {
        const textApparel = element.dataset.apparellist.toLowerCase();
        const textApparelSimple = textApparel
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");

        if (
          textApparel.includes(searchValue) ||
          textApparelSimple.includes(searchValue)
        ) {
          // reshow it after hide it
          element.style.display = "";
          // Create Array with Element who match
          tagSearchResultElement.push(element);
        } else {
          // hide it
          element.style.display = "none";
        }
      } else {
        // hide it
        element.style.display = "none";
      }
    }

    // for Ustensil Tag
    if (searchType == "ustensil") {
      if (element.dataset.ustensillist) {
        const textUstensil = element.dataset.ustensillist.toLowerCase();
        const textUstensilSimple = textUstensil
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");

        if (
          textUstensil.includes(searchValue) ||
          textUstensilSimple.includes(searchValue)
        ) {
          // reshow it after hide it
          element.style.display = "";
          // Create Array with Element who match
          tagSearchResultElement.push(element);
        } else {
          // hide it
          element.style.display = "none";
        }
      } else {
        // hide it
        element.style.display = "none";
      }
    }

    // for main bar search input text
    if (searchType == "mainbar") {
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
      // Ingredients list
      const textIngredient = element
        .querySelector(".card-recipes-txt-bottom-left")
        .innerText.toLocaleLowerCase();
      const textIngredientSimple = textIngredient
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      // search.length >= 3 // fonctionne aussi pour les tag
      if (searchValue.length >= 3) {
        if (
          textTitle.includes(searchValue) ||
          textDsc.includes(searchValue) ||
          textTitleSimple.includes(searchValue) ||
          textDscSimple.includes(searchValue) ||
          textIngredient.includes(searchValue) ||
          textIngredientSimple.includes(searchValue)
        ) {
          // reshow it after hide it
          element.style.display = "";
          // Create Array with Element who match
          tagSearchResultElement.push(element);
        } else {
          // hide it
          element.style.display = "none";
        }
      }
      if (searchValue.length < 3) {
        // reshow all after hide it
        element.style.display = "";
        // Create Array with Element who match
        tagSearchResultElement.push(element);
      }
    }
  });

  return tagSearchResultElement;
}
