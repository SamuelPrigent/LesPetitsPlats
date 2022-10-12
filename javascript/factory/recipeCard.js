// Create Card HTML
function getRecipeCard(data) {
  // main div
  const article = document.createElement("div");
  article.classList.add("card-recipes");
  article.innerText = data.name;
  return article;
}
