// Factory for Ingredient Filter
function getIngredientFilter(element) {
  const filter = document.createElement("li");
  filter.innerText = element;
  filter.classList.add("ingredient-filter");
  return filter;
}

// Factory for Apparel Filter
function getApparelFilter(element) {
  const filter = document.createElement("li");
  filter.innerText = element;
  filter.classList.add("apparel-filter");
  return filter;
}

// Factory for Ustensil Filter
function getUstensilFilter(element) {
  const filter = document.createElement("li");
  filter.innerText = element;
  filter.classList.add("ustensil-filter");
  return filter;
}
