// ===== Search Algorithm =====

// ==== Tags ====

// for loop in (searchRecipeWithAllTags)
let previousTag = "";

// Déclenché a l'ajout d'un Tag
function searchRecipeWithAllTags() {
  const TagsArray = getTagsList();
  //
  //   console.clear();
  //   console.log("Tags Array", TagsArray);

  // L'ajout de tag reset cette valeur
  let previousTagSearch = "";

  for (let i = 0; i < TagsArray.length; i++) {
    const searchValue = TagsArray[i].name.toLowerCase();
    const searchType = TagsArray[i].type;
    const errorMsg = document.querySelector(".section-recipes-error");

    if (i == 0) {
      // check if mainBarSearch exist = logique qui créé boucle infini

      // Stock les résultats
      previousTagSearch = searchRecipe(searchValue, searchType);
      // Toogle Msg if no result
      if (previousTagSearch == "") {
        errorMsg.style.display = "flex";
      } else {
        errorMsg.style.display = "none";
      }

      // console
      //   console.log("/// i=" + i);
      //   console.log("Search Result", previousTagSearch);
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

      // console
      //   console.log("/// i=" + i);
      //   console.log("New Result", previousTagSearch);
      // console.log(`Search ${searchValue} (i) in ${TagsArray[i - 1].name} (i-1) `);
    }
  }
  return previousTagSearch;
}

// ==== Search Recipe Algoritm ====

function searchRecipeWithAlgoritm() {
  // reset valeur au début de la fonction et la return à la fin
  let mainBarSearch = "";

  // get input value
  const searchBar = document.getElementById("mainSearchBar");
  const searchValue = searchBar.value.toLowerCase();
  const TagsArray = getTagsList();
  const errorMsg = document.querySelector(".section-recipes-error");

  // if pas de recherche via tag //
  if (TagsArray == "") {
    mainBarSearch = searchRecipe(searchValue, "mainbar");
    // Toogle Msg if no result
    if (mainBarSearch == "") {
      errorMsg.style.display = "flex";
    } else {
      errorMsg.style.display = "none";
    }
  }
  //   if recherche déjà existante via tag
  if (TagsArray != "") {
    const tagSearch = searchRecipeWithAllTags(); // get tagSearch result
    mainBarSearch = searchRecipeWithPreviousResults(
      tagSearch,
      searchValue,
      "mainbar"
    );
    // Toogle Msg if no result
    if (mainBarSearch == "") {
      errorMsg.style.display = "flex";
    } else {
      errorMsg.style.display = "none";
    }
  }
  // Refresh Ingredients Filter List with results
  RefreshIngredientsList(mainBarSearch);
  EventListenerForIngredientTagCreation();
  // Refresh Apparels Filter List with results
  RefreshApparelsList(mainBarSearch);
  EventListenerForApparelTagCreation();
  // Refresh Ustensils Filter List with results
  RefreshUstensilsList(mainBarSearch);
  EventListenerForUstensilTagCreation();

  return mainBarSearch;
}

// Input change call the Search
const mainSearchBar = document.getElementById("mainSearchBar");
// Change on Input
mainSearchBar.addEventListener("input", (e) => {
  // Search Recipe
  searchRecipeWithAlgoritm();
});
