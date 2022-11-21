// ===== Search Algorithm =====

// ==== Tags ====

// Déclenché a l'ajout d'un Tag
function searchRecipeWithAllTags() {
  const tagsArray = getTagsList();

  // L'ajout de tag reset cette valeur
  let previousTagSearch = "";

  for (let i = 0; i < tagsArray.length; i++) {
    const searchValue = tagsArray[i].name.toLowerCase();
    const searchType = tagsArray[i].type;
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
    }
  }
  return previousTagSearch;
}

// ==== Search Recipe Algoritm ====

function searchRecipeWithAlgorithm() {
  // reset valeur au début de la fonction et la return à la fin
  let algoSearchResult = "";

  // get input value
  const searchBar = document.getElementById("mainSearchBar");
  const searchValue = searchBar.value.toLowerCase();
  const tagsArray = getTagsList();
  const errorMsg = document.querySelector(".section-recipes-error");

  // if pas de tag existant
  if (tagsArray == "") {
    algoSearchResult = searchRecipe(searchValue, "mainbar");
    // Toogle Msg if no result
    if (algoSearchResult == "") {
      errorMsg.style.display = "flex";
    } else {
      errorMsg.style.display = "none";
    }
  }
  //   if recherche existante via tag
  // == if recherche existante via tag ==
  // if searchValue < 3
  if (tagsArray != "" && searchValue.length < 3) {
    algoSearchResult = searchRecipeWithAllTags();
  }
  // if searchValue >= 3
  if (tagsArray != "" && searchValue.length >= 3) {
    const tagSearch = searchRecipeWithAllTags(); // get tagSearch result
    algoSearchResult = searchRecipeWithPreviousResults(
      tagSearch,
      searchValue,
      "mainbar"
    );
    // Toogle Msg if no result
    if (algoSearchResult == "") {
      errorMsg.style.display = "flex";
    } else {
      errorMsg.style.display = "none";
    }
  }
  // Refresh Filters Lists with Recipe results
  refreshIngredientsList(algoSearchResult);
  refreshApparelsList(algoSearchResult);
  refreshUstensilsList(algoSearchResult);
  // Refresh Event listener for TagCreation + Close dropdown for the new list
  eventListenerForTagCreation("ingredient");
  eventListenerForTagCreation("apparel");
  eventListenerForTagCreation("ustensil");

  return algoSearchResult;
}

// Input change call the Search
const mainSearchBar = document.getElementById("mainSearchBar");
// Change on Input
mainSearchBar.addEventListener("input", (e) => {
  // Search Recipe
  searchRecipeWithAlgorithm();
  // Refresh event listener on Filter
  closeAfterFilterClickEventListener();
});
