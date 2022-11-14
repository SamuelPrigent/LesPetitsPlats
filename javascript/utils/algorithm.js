// ===== Search Algorithm =====

// ==== Tags ====

// Déclenché a l'ajout d'un Tag
function searchRecipeWithAllTags() {
  const TagsArray = getTagsList();
  //   console.clear();
  //   console.log("Tags Array", TagsArray);

  // L'ajout de tag reset cette valeur
  let previousTagSearch = "";

  for (let i = 0; i < TagsArray.length; i++) {
    const searchValue = TagsArray[i].name.toLowerCase();
    const searchType = TagsArray[i].type;
    const errorMsg = document.querySelector(".section-recipes-error");

    if (i == 0) {
      // Stock les résultats
      previousTagSearch = searchRecipe(searchValue, searchType);
      // Toogle Msg if no result
      if (previousTagSearch == "") {
        errorMsg.style.display = "flex";
      } else {
        errorMsg.style.display = "none";
      }

      // console.log("/// i=" + i);
      // console.log("Search Result", previousTagSearch);
    }
    if (i >= 1) {
      // Recherche + stock les résultats pour la prochaine boucle
      previousTagSearch = searchRecipeWithPreviousResults(
        previousTagSearch,
        searchValue,
        searchType
      );
      // Toogle Msg if no result
      if (previousTagSearch == "") {
        errorMsg.style.display = "flex";
      } else {
        errorMsg.style.display = "none";
      }

      // console.log("/// i=" + i);
      // console.log("New Result", previousTagSearch);
      // console.log(`Search ${searchValue} (i) in ${TagsArray[i - 1].name} (i-1) `);
    }
  }
  return previousTagSearch;
}

// ==== Search Recipe Algoritm ====

function searchRecipeWithAlgorithm() {
  // reset valeur au début de la fonction et la return à la fin
  let GlobalSearchResult = "";

  // get input value
  const searchBar = document.getElementById("mainSearchBar");
  const searchValue = searchBar.value.toLowerCase();
  const TagsArray = getTagsList();
  const errorMsg = document.querySelector(".section-recipes-error");

  // if pas de recherche via tag //
  if (TagsArray == "") {
    GlobalSearchResult = searchRecipe(searchValue, "mainbar");
    // Toogle Msg if no result
    if (GlobalSearchResult == "") {
      errorMsg.style.display = "flex";
    } else {
      errorMsg.style.display = "none";
    }
  }
  //   if recherche déjà existante via tag
  if (TagsArray != "") {
    const tagSearch = searchRecipeWithAllTags(); // get tagSearch result
    GlobalSearchResult = searchRecipeWithPreviousResults(
      tagSearch,
      searchValue,
      "mainbar"
    );
    // Toogle Msg if no result
    if (GlobalSearchResult == "") {
      errorMsg.style.display = "flex";
    } else {
      errorMsg.style.display = "none";
    }
  }
  // Refresh Ingredients Filter List with results
  RefreshIngredientsList(GlobalSearchResult);
  EventListenerForIngredientTagCreation();
  //   FocusAndClearInputDropdownEventListener("Ingredient");
  // Refresh Apparels Filter List with results
  RefreshApparelsList(GlobalSearchResult);
  EventListenerForApparelTagCreation();
  //   FocusAndClearInputDropdownEventListener("Apparel");
  // Refresh Ustensils Filter List with results
  RefreshUstensilsList(GlobalSearchResult);
  EventListenerForUstensilTagCreation();
  //   FocusAndClearInputDropdownEventListener("Ustensil");

  return GlobalSearchResult;
}

// Input change call the Search
const mainSearchBar = document.getElementById("mainSearchBar");
// Change on Input
mainSearchBar.addEventListener("input", (e) => {
  // Search Recipe
  searchRecipeWithAlgorithm();
  // Refresh event listener on Filter
  CloseAfterFilterClickEventListener();
});
