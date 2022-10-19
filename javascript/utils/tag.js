// ===== Event listener to call => CreateTag =====

// Add Ingredient Tag
const ingredientFilter = document.querySelectorAll(".ingredient-filter");
ingredientFilter.forEach((element) => {
  element.addEventListener("click", () => {
    const filterText = element.innerText;
    createTag(filterText, "ingredient");
  });
});

// Add Apparel Tag
const apparelFilter = document.querySelectorAll(".apparel-filter");
apparelFilter.forEach((element) => {
  element.addEventListener("click", () => {
    const filterText = element.innerText;
    createTag(filterText, "apparel");
  });
});

// Add Ustensil Tag
const ustensilFilter = document.querySelectorAll(".ustensil-filter");
ustensilFilter.forEach((element) => {
  element.addEventListener("click", () => {
    const filterText = element.innerText;
    createTag(filterText, "ustensil");
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
  // Cross
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
  // const tagSection = document.querySelector(".section-tag");
  // tagSection.appendChild(tag);
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

  // Event listener to Remove it
  tagSvg.addEventListener("click", () => {
    tag.remove();
  });
}
