// Dropdown of filter buttons
const dropdowns = document.querySelectorAll(".dropdown"); // récupère les 3 dropdown

dropdowns.forEach((dropdown) => {
  // get dom element
  const select = dropdown.querySelector(".dropdown-select");
  const arrow = dropdown.querySelector(".button-filter-arrow");
  const menu = dropdown.querySelector(".dropdown-menu");
  const options = dropdown.querySelectorAll(".dropdown-menu li");
  //   const selected = dropdown.querySelector(".dropdown-selected");

  // button element
  const ingredientFilterList = document.querySelector("#section-ingredient");
  const apparelFilterList = document.querySelector("#section-apparel");
  const ustensilFilterList = document.querySelector("#section-ustensil");
  // button arrow element
  const arrowIngredient = document.querySelector("#arrow-ingredient");
  const arrowApparel = document.querySelector("#arrow-apparel");
  const arrowUstensil = document.querySelector("#arrow-ustensil");

  // Button [Ingredients, Appareils, Ustensils]
  select.addEventListener("click", () => {
    // Close all list before open one new
    if (menu != ingredientFilterList) {
      ingredientFilterList.classList.remove("dropdown-menu-open");
      arrowIngredient.classList.remove("dropdown-arrow-rotate");
    }
    if (menu != apparelFilterList) {
      apparelFilterList.classList.remove("dropdown-menu-open");
      arrowApparel.classList.remove("dropdown-arrow-rotate");
    }
    if (menu != ustensilFilterList) {
      ustensilFilterList.classList.remove("dropdown-menu-open");
      arrowUstensil.classList.remove("dropdown-arrow-rotate");
    }
    // Toggle on clicked filter
    arrow.classList.toggle("dropdown-arrow-rotate"); // arrow animation
    menu.classList.toggle("dropdown-menu-open"); // toggle menu
    // select.classList.toggle("dropdown-select-clicked"); // style on filter button
  });

  // Options List for Button
  options.forEach((option) => {
    option.addEventListener("click", () => {
      arrow.classList.remove("dropdown-arrow-rotate"); // arrow animation
      menu.classList.remove("dropdown-menu-open"); // close menu
      //   select.classList.remove("dropdown-select-clicked"); // remove style on filter button
      //   selected.innerText = option.innerText; // if we want to replace in the button
      // Remove for all, each click & attribute active to the new target element after
      //   options.forEach((option) => {
      //     option.classList.remove("active");
      //   });
      //   option.classList.add("active");
    });
  });
}); // fin dropdown
