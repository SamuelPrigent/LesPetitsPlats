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
  return IngredientsArray;
}

// Create [Ingrédients] with Search Result
function getIngredientsListWithSearchResult(searchResult) {
  // console.log(searchResult);
  let NewIngredientListWithDouble = [];
  let NewIngredientListWithoutDouble = [];
  let NewIngredientListArray = [];
  //
  searchResult.forEach((element) => {
    // Ingredients Div in One Card
    const IngredientDiv = element.querySelectorAll(
      ".card-recipes-txt-bottom-left-bold"
    );
    IngredientDiv.forEach((element) => {
      const OneIngredientOfList = element.innerText; // pas besoins de lowercase
      NewIngredientListWithDouble.push(OneIngredientOfList);
    });
    // Après avoir parcouru toute les div et fait la liste
    NewIngredientListWithoutDouble = new Set(NewIngredientListWithDouble); // Remove Double
    NewIngredientListArray = Array.from(NewIngredientListWithoutDouble);
    NewIngredientListArray.sort((a, b) => (a > b ? 1 : -1));
  });
  // Liste total des ingredients avec double
  // console.log(NewIngredientListWithDouble);
  // console.log(NewIngredientListArray);

  return NewIngredientListArray;
}

// === Liste des appareils [10] ===
function getApparelsList() {
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
  const ApparelsArray = Array.from(ApparelList);
  ApparelsArray.sort((a, b) => (a > b ? 1 : -1));
  // console.log(ApparelsArray);
  return ApparelsArray;
}

// Create [Apparel] with Search Result
function getApparelsListWithSearchResult(searchResult) {
  // console.log(searchResult);
  let NewApparelListWithDouble = [];
  let NewApparelListWithoutDouble = [];
  let NewApparelListArray = [];
  //
  searchResult.forEach((element) => {
    // Apparel Div in One Card
    if (element.dataset.apparellist) {
      const ApparelDiv = element.dataset.apparellist.toLowerCase();
      const ApparelList = ApparelDiv.split(",");

      ApparelList.forEach((element) => {
        NewApparelListWithDouble.push(element);
      });
      // Après avoir parcouru toute les div et fait la liste
      NewApparelListWithoutDouble = new Set(NewApparelListWithDouble); // Remove Double
      NewApparelListArray = Array.from(NewApparelListWithoutDouble);
      NewApparelListArray.sort((a, b) => (a > b ? 1 : -1));
    }
  });
  // Liste total des ingredients avec double
  // console.log(NewApparelListWithDouble);
  // console.log(NewApparelListArray);

  return NewApparelListArray;
}

// === Listes des ustensils [22] ===
function getUstensilsList() {
  const UstensilsCombinaison = recipes.map((e) => e.ustensils);
  const UstensilsValues = UstensilsCombinaison.flat(1); // all values with double
  const UstensilsOnlyArrayLowerCase = UstensilsValues.map((element) => {
    return element.toLowerCase();
  });
  const UstensilsList = new Set(UstensilsOnlyArrayLowerCase); // Remove Double
  const UstensilsArray = Array.from(UstensilsList);
  UstensilsArray.sort((a, b) => (a > b ? 1 : -1));
  // console.log(UstensilsArray);
  return UstensilsArray;
}

// Create [Ustensils] with Search Result
function getUstensilsListWithSearchResult(searchResult) {
  // console.log(searchResult);
  let NewUstensilListWithDouble = [];
  let NewUstensilListWithoutDouble = [];
  let NewUstensilListArray = [];
  //
  searchResult.forEach((element) => {
    if (element.dataset.ustensillist) {
      // Ustensil Div in One Card
      const UstensilDiv = element.dataset.ustensillist.toLowerCase();
      const UstensilList = UstensilDiv.split(",");

      UstensilList.forEach((element) => {
        NewUstensilListWithDouble.push(element);
      });
      // Après avoir parcouru toute les div et fait la liste
      NewUstensilListWithoutDouble = new Set(NewUstensilListWithDouble); // Remove Double
      NewUstensilListArray = Array.from(NewUstensilListWithoutDouble);
      NewUstensilListArray.sort((a, b) => (a > b ? 1 : -1));
    }
  });
  // Liste total des ingredients avec double
  // console.log(NewUstensilListWithDouble);
  // console.log(NewUstensilListArray);

  return NewUstensilListArray;
}

//
// ====== Factory for Dropdown List ======

// === Create <li> in Dropdown with All Recipe ===

// Create Ingredients List
const IngredientsArray = getIngredientsList();
IngredientsArray.forEach((element) => {
  const newFilter = getIngredientFilter(element);
  ingredientSection.appendChild(newFilter);
});

// Create Apparel List
const ApparelsArray = getApparelsList();
ApparelsArray.forEach((element) => {
  const newFilter = getApparelFilter(element);
  apparelSection.appendChild(newFilter);
});

// Create Ustensils List
const UstensilsArray = getUstensilsList();
UstensilsArray.forEach((element) => {
  const newFilter = getUstensilFilter(element);
  ustensilSection.appendChild(newFilter);
});

// === Create <li> in Dropdown from searchResult ===

// Refresh Ingredients List w/ searchResult (from global algortihm)
function RefreshIngredientsList(searchResult) {
  ingredientSection.innerHTML = ""; // vide l'ancienne liste
  const NewIngredientsArray = getIngredientsListWithSearchResult(searchResult);
  NewIngredientsArray.forEach((element) => {
    const newFilter = getIngredientFilter(element);
    ingredientSection.appendChild(newFilter);
  });
}

// Refresh Apparel List w/ searchResult (from global algortihm)
function RefreshApparelsList(searchResult) {
  apparelSection.innerHTML = ""; // vide l'ancienne liste
  const NewApparelsArray = getApparelsListWithSearchResult(searchResult);
  NewApparelsArray.forEach((element) => {
    const newFilter = getApparelFilter(element);
    apparelSection.appendChild(newFilter);
  });
}

// Refresh Ustensils List w/ searchResult (from global algortihm)
function RefreshUstensilsList(searchResult) {
  ustensilSection.innerHTML = ""; // vide l'ancienne liste
  const NewUstensilsArray = getUstensilsListWithSearchResult(searchResult);
  NewUstensilsArray.forEach((element) => {
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

// ** branch "native" avec des boucles native "for" **

// === Première Recherche ===

function searchRecipe(searchValue, searchType) {
  // get card elements for loop in
  const divSection = document.querySelector(".section-recipes");
  const recipesCard = divSection.querySelectorAll(".card-recipes");
  const recipeArray = Array.from(recipesCard);

  // Initialiser un array
  const TagSearchResultElement = [];

  // Hide/Show Tag + Create an array of [elements] w/ those who mach

  for (let i = 0; i < recipeArray.length; i++) {
    const element = recipeArray[i];
    // console.log(element);

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
        TagSearchResultElement.push(element);
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
          TagSearchResultElement.push(element);
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
          TagSearchResultElement.push(element);
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
          TagSearchResultElement.push(element);
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
        TagSearchResultElement.push(element); // here ?
      }
    }
  }

  return TagSearchResultElement;
}

// ===== Recherche dans le tableau de la précédente recherche =====
function searchRecipeWithPreviousResults(
  previousTagSearchResult,
  searchValue,
  searchType
) {
  // Initialiser un array
  const TagSearchResultElement = [];

  // Hide/Show Tag + Create an array of [elements] w/ those who mach
  for (let i = 0; i < previousTagSearchResult.length; i++) {
    const element = previousTagSearchResult[i];
    // console.log(element);

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
        TagSearchResultElement.push(element);
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
          TagSearchResultElement.push(element);
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
          TagSearchResultElement.push(element);
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
          TagSearchResultElement.push(element);
        } else {
          // hide it
          element.style.display = "none";
        }
      }
      if (searchValue.length < 3) {
        // reshow all after hide it
        element.style.display = "";
        // Create Array with Element who match
        TagSearchResultElement.push(element);
      }
    }
  }

  return TagSearchResultElement;
}
