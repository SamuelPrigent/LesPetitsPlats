// ===== Event listener to call => CreateTag =====

// init ingredients tag event listener ?

// Add Ingredient Tag
const ingredientFilter = document.querySelectorAll(".ingredient-filter");
ingredientFilter.forEach((element) => {
  element.addEventListener("click", () => {
    const filterText = element.innerText;
    // Add Tag in HTML
    createTag(filterText, "ingredient");
    // Search Recipe with Tag Array
    searchRecipeWithAllTags();
    // Search Recipe with Main Bar After (pas de boucle infini)
    searchRecipeWithMainBar();
  });
});

// Add Apparel Tag
const apparelFilter = document.querySelectorAll(".apparel-filter");
apparelFilter.forEach((element) => {
  element.addEventListener("click", () => {
    const filterText = element.innerText;
    // Add Tag in HTML
    createTag(filterText, "apparel");
    // Search Recipe with Tag Array
    searchRecipeWithAllTags();
    // Search Recipe with Main Bar After (pas de boucle infini)
    searchRecipeWithMainBar();
  });
});

// Add Ustensil Tag
const ustensilFilter = document.querySelectorAll(".ustensil-filter");
ustensilFilter.forEach((element) => {
  element.addEventListener("click", () => {
    const filterText = element.innerText;
    // Add Tag in HTML
    createTag(filterText, "ustensil");
    // Search Recipe with Tag Array
    searchRecipeWithAllTags();
    // Search Recipe with Main Bar After (pas de boucle infini)
    searchRecipeWithMainBar();
  });
});

// ===== CreateTag ===== //

// Create Tag (html / css)
function createTag(tagName, type) {
  // console.log(tagName, type);

  // Main Tag div
  const tag = document.createElement("div");
  tag.classList.add("tagFilter");
  // Txt
  const tagTxt = document.createElement("div");
  tagTxt.classList.add("tagFilter-txt");
  tagTxt.innerText = tagName;
  // Cross svg
  const tagSvg = document.createElement("img");
  tagSvg.classList.add("tagFilter-svg");
  tagSvg.setAttribute("src", "assets/removeTag.svg");

  // Type color
  if (type == "ingredient") {
    tag.classList.add("button-filter-blue");
  }
  if (type == "apparel") {
    tag.classList.add("button-filter-green");
  }
  if (type == "ustensil") {
    tag.classList.add("button-filter-red");
  }
  // Structure
  tag.appendChild(tagTxt);
  tag.appendChild(tagSvg);

  // Les 3 possibles parents
  const tagSectionIngredient = document.querySelector(
    ".section-tag-ingredient"
  );
  const tagSectionApparel = document.querySelector(".section-tag-apparel");
  const tagSectionUstensil = document.querySelector(".section-tag-ustensil");

  if (type == "ingredient") {
    tagSectionIngredient.appendChild(tag);
  }
  if (type == "apparel") {
    tagSectionApparel.appendChild(tag);
  }
  if (type == "ustensil") {
    tagSectionUstensil.appendChild(tag);
  }

  // Remove it when click on Cross
  tagSvg.addEventListener("click", () => {
    tag.remove();
    searchRecipeWithMainBar();
    searchRecipeWithAllTags();
    // searchRecipeWithMainBar();
  });
}

// ===== Get Tag [List] ===== //

function getTagsList() {
  const TagsArray = [];

  // Add Ingredients Tags
  const IngredientTags = document.querySelector(".section-tag-ingredient");
  const allIngredientsTags = IngredientTags.querySelectorAll(".tagFilter");
  allIngredientsTags.forEach((tag) => {
    const tagElement = tag.querySelector(".tagFilter-txt");
    const tagObject = {
      name: tagElement.innerText.toLowerCase(),
      type: "ingredient",
    }; // create object
    TagsArray.push(tagObject); // push in TagsArray
  });
  // Add Apparels Tags
  const ApparelsTags = document.querySelector(".section-tag-apparel");
  const allApparelsTags = ApparelsTags.querySelectorAll(".tagFilter");
  allApparelsTags.forEach((tag) => {
    const tagElement = tag.querySelector(".tagFilter-txt");
    const tagObject = {
      name: tagElement.innerText.toLowerCase(),
      type: "apparel",
    }; // create object
    TagsArray.push(tagObject); // push in TagsArray
  });
  // Add Ustensils Tags
  const UstensilTags = document.querySelector(".section-tag-ustensil");
  const allUstensilsTags = UstensilTags.querySelectorAll(".tagFilter");
  allUstensilsTags.forEach((tag) => {
    const tagElement = tag.querySelector(".tagFilter-txt");
    const tagObject = {
      name: tagElement.innerText.toLowerCase(),
      type: "ustensil",
    }; // create object
    TagsArray.push(tagObject); // push in TagsArray
  });

  // console.clear();
  // console.log(TagsArray);

  return TagsArray;
}

// // ===== Filter Recipes with Tag Array =====

// // for loop in (searchRecipeWithAllTags)
// let previousTag = "";

// // Déclenché a l'ajout d'un Tag
// function searchRecipeWithAllTags() {
//   const TagsArray = getTagsList();
//   //
//   console.clear();
//   console.log("Tags Array", TagsArray);

//   // L'ajout de tag reset cette valeur
//   let previousTagSearch = "";

//   for (let i = 0; i < TagsArray.length; i++) {
//     const searchValue = TagsArray[i].name.toLowerCase();
//     const searchType = TagsArray[i].type;

//     if (i == 0) {
//       // Stock les résultats
//       previousTagSearch = searchRecipe(searchValue, searchType);
//       // Toogle Msg if no result
//       const errorMsg = document.querySelector(".section-recipes-error");
//       if (previousTagSearch == "") {
//         errorMsg.style.display = "flex";
//       } else {
//         errorMsg.style.display = "none";
//       }

//       // console
//       console.log("/// i=" + i);
//       console.log("Search Result", previousTagSearch);
//     }
//     if (i >= 1) {
//       // Recherche + stock les résultats pour la prochaine boucle
//       previousTagSearch = searchRecipeWithPreviousResults(
//         previousTagSearch,
//         searchValue,
//         searchType
//       );
//       // Toogle Msg if no result
//       const errorMsg = document.querySelector(".section-recipes-error");
//       if (previousTagSearch == "") {
//         errorMsg.style.display = "flex";
//       } else {
//         errorMsg.style.display = "none";
//       }

//       // console
//       console.log("/// i=" + i);
//       console.log("New Result", previousTagSearch);
//       // console.log(`Search ${searchValue} (i) in ${TagsArray[i - 1].name} (i-1) `);
//     }
//   }
// }
