// Create Card HTML
function getRecipeCard(data) {
  // main div
  const article = document.createElement("div");
  article.classList.add("card-recipes");
  // Img (vide)
  const imgDiv = document.createElement("div");
  imgDiv.classList.add("card-recipes-img");
  // Text
  const textDiv = document.createElement("div");
  textDiv.classList.add("card-recipes-txt");
  // Text Top
  const textTop = document.createElement("div");
  textTop.classList.add("card-recipes-txt-top");
  // Recipe Top Left Title
  const textTopTitle = document.createElement("h2");
  textTopTitle.innerText = data.name;
  textTopTitle.classList.add("card-recipes-txt-top-left");
  // Recipe Top Right
  const textTopRight = document.createElement("div");
  textTopRight.classList.add("card-recipes-txt-top-right");
  // Recipe Top Right - Logo
  const textTopRightLogo = document.createElement("img");
  textTopRightLogo.classList.add("time-icon");
  textTopRightLogo.setAttribute("src", "assets/time.svg");
  // Recipe Top Right - Time
  const textTopRightTime = document.createElement("div");
  textTopRightTime.innerText = `${data.time} min`;
  // Text Bottom
  const textBottom = document.createElement("div");
  textBottom.classList.add("card-recipes-txt-bottom");
  // Text Bottom Left
  const textBottomLeft = document.createElement("div");
  textBottomLeft.classList.add("card-recipes-txt-bottom-left");

  // BOUCLE => ingredients.forEach
  const ingredients = data.ingredients;
  ingredients.forEach((element) => {
    // new line
    const newLine = document.createElement("div");
    newLine.classList.add("card-recipes-txt-bottom-left-line");
    // Ingredient Name
    const ingredientName = document.createElement("div");
    ingredientName.classList.add("card-recipes-txt-bottom-left-bold");
    ingredientName.innerText = `${element.ingredient}`;
    // Ingredient Qty
    const ingredientQty = document.createElement("div");
    ingredientQty.classList.add("card-recipes-txt-bottom-left-quantity");
    if (element.quantity) {
      ingredientQty.innerText = `${element.quantity}`;
    }
    if (element.quantity && element.unit) {
      ingredientQty.innerText = `${element.quantity}${element.unit}`;
      // Abréviations des unités
      // Cuillère à soupe
      if (element.unit == "cuillère à soupe") {
        ingredientQty.innerText = `${element.quantity}c.à.s`;
      }
      // Cuillères à soupe
      if (element.unit == "cuillères à soupe") {
        ingredientQty.innerText = `${element.quantity}c.à.s`;
      }
      // Grammes
      if (element.unit == "grammes") {
        ingredientQty.innerText = `${element.quantity}g`;
      }
      // Tranches
      if (element.unit == "tranches") {
        ingredientQty.innerText = `${element.quantity}tr`;
      }
    }
    // NewLine
    textBottomLeft.appendChild(newLine);
    newLine.appendChild(ingredientName);
    newLine.appendChild(ingredientQty);
  });

  // Text Bottom Right
  const textBottomRight = document.createElement("div");
  textBottomRight.classList.add("card-recipes-txt-bottom-right");
  textBottomRight.innerText = data.description;

  // article
  article.appendChild(imgDiv);
  article.appendChild(textDiv);
  // textDiv
  textDiv.appendChild(textTop);
  textDiv.appendChild(textBottom);
  // TextTop
  textTop.appendChild(textTopTitle);
  textTop.appendChild(textTopRight);
  // TextTopRight
  textTopRight.appendChild(textTopRightLogo);
  textTopRight.appendChild(textTopRightTime);
  // Text Bottom
  textBottom.appendChild(textBottomLeft);
  textBottom.appendChild(textBottomRight);
  // Text Bottom Left // via boucle

  // Nav via tab index
  article.setAttribute("tabindex", 0);

  return article;
}
