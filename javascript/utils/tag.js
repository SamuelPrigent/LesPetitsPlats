// ===== Event listener to call => CreateTag =====

// Event listener for Tag Creation
function EventListenerForTagCreation(type) {
  const typeFilter = document.querySelectorAll(`.${type}-filter`);
  typeFilter.forEach((element) => {
    element.addEventListener("click", () => {
      const filterText = element.innerText;
      createTag(filterText, type); // Add Tag in HTML
      searchRecipeWithAlgorithm(); // Search Recipe
      CloseAfterFilterClickEventListener(); // Close Dropdown Event listener
    });
  });
}
EventListenerForTagCreation("ingredient");
EventListenerForTagCreation("apparel");
EventListenerForTagCreation("ustensil");

// ===== CreateTag ===== //

// Create Tag (html / css)
function createTag(tagName, type) {
  // console.log(tagName, type);

  // === Create HTML ===
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
  // tag structure
  tag.appendChild(tagTxt);
  tag.appendChild(tagSvg);

  // 3 possibles parents
  const tagSectionIngredient = document.querySelector(
    ".section-tag-ingredient"
  );
  const tagSectionApparel = document.querySelector(".section-tag-apparel");
  const tagSectionUstensil = document.querySelector(".section-tag-ustensil");

  // Add Color and Inject Tag in Html
  if (type == "ingredient") {
    tag.classList.add("button-filter-blue");
    tagSectionIngredient.appendChild(tag);
  }
  if (type == "apparel") {
    tag.classList.add("button-filter-green");
    tagSectionApparel.appendChild(tag);
  }
  if (type == "ustensil") {
    tag.classList.add("button-filter-red");
    tagSectionUstensil.appendChild(tag);
  }

  // Remove it when click on Cross
  tagSvg.addEventListener("click", () => {
    tag.remove();
    // Search Recipe
    searchRecipeWithAlgorithm();
    // Refresh event listener on Filter list
    CloseAfterFilterClickEventListener();
  });
}

// ===== Get Tag [List] ===== //

// == Push in tagArray by type ==
function getTagArray(type, tagArray) {
  // Add Tags in an Array
  const Tags = document.querySelector(`.section-tag-${type}`);
  const allIngredientsTags = Tags.querySelectorAll(".tagFilter");
  allIngredientsTags.forEach((tag) => {
    const tagElement = tag.querySelector(".tagFilter-txt");
    const tagObject = {
      name: tagElement.innerText.toLowerCase(),
      type: type,
    }; // create object
    tagArray.push(tagObject); // push in tagArray
  });
}

// == Push all Tag in tagArray ==
function getTagsList() {
  const tagArray = [];

  getTagArray("ingredient", tagArray);
  getTagArray("apparel", tagArray);
  getTagArray("ustensil", tagArray);

  return tagArray;
}
