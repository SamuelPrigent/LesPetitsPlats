// ===== Event listener to call => CreateTag =====

// init ingredients tag event listener ?

// Add Ingredient Tag
const ingredientFilter = document.querySelectorAll(".ingredient-filter");
ingredientFilter.forEach((element) => {
  element.addEventListener("click", () => {
    const filterText = element.innerText;
    // Add Tag in HTML
    createTag(filterText, "ingredient");
    // Get New Tag Array
    getTagsList();
    // Search Recipe with Tag Array
  });
});

// Add Apparel Tag
const apparelFilter = document.querySelectorAll(".apparel-filter");
apparelFilter.forEach((element) => {
  element.addEventListener("click", () => {
    const filterText = element.innerText;
    // Add Tag in HTML
    createTag(filterText, "apparel");
    // Get New Tag Array
    getTagsList();
  });
});

// Add Ustensil Tag
const ustensilFilter = document.querySelectorAll(".ustensil-filter");
ustensilFilter.forEach((element) => {
  element.addEventListener("click", () => {
    const filterText = element.innerText;
    // Add Tag in HTML
    createTag(filterText, "ustensil");
    // Get New Tag Array
    getTagsList();
  });
});

// ===== CreateTag =====

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
  });
}

// ===== Create Tag Lists =====

function getTagsList() {
  // All array
  const IngredientsArray = [];
  const ApparelsArray = [];
  const UstensilsArray = [];
  // Ingredients
  const IngredientTags = document.querySelector(".section-tag-ingredient");
  const allIngredientsTags = IngredientTags.querySelectorAll(".tagFilter");
  allIngredientsTags.forEach((tag) => {
    const tagFilterTxt = tag.querySelector(".tagFilter-txt");
    IngredientsArray.push(tagFilterTxt.innerText);
  });
  // Apparels
  const ApparelsTags = document.querySelector(".section-tag-apparel");
  const allApparelsTags = ApparelsTags.querySelectorAll(".tagFilter");
  allApparelsTags.forEach((tag) => {
    const tagFilterTxt = tag.querySelector(".tagFilter-txt");
    ApparelsArray.push(tagFilterTxt.innerText);
  });
  // Ustensils
  const UstensilTags = document.querySelector(".section-tag-ustensil");
  const allUstensilsTags = UstensilTags.querySelectorAll(".tagFilter");
  allUstensilsTags.forEach((tag) => {
    const tagFilterTxt = tag.querySelector(".tagFilter-txt");
    UstensilsArray.push(tagFilterTxt.innerText);
  });

  console.clear();
  console.log(IngredientsArray);
  console.log(ApparelsArray);
  console.log(UstensilsArray);

  return { IngredientsArray, ApparelsArray, UstensilsArray };
}

// ===== Filter Recipes with Tag Array =====
