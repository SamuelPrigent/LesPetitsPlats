// Dropdown of filter buttons
const dropdowns = document.querySelectorAll(".dropdown"); // récupère les 3 dropdown

dropdowns.forEach((dropdown) => {
  // get dom element
  const select = dropdown.querySelector(".dropdown-select");
  const arrow = dropdown.querySelector(".button-filter-arrow");
  // TEST
  const menu = dropdown.querySelector(".dropdown-menu"); // Changer cette div ??
  const main = dropdown.querySelector(".dropdown-main");
  // fin test
  const options = dropdown.querySelectorAll(".dropdown-menu li");
  // const selected = dropdown.querySelector(".dropdown-selected");
  // button element
  const ingredientFilterList = document.querySelector("#section-ingredient");
  const apparelFilterList = document.querySelector("#section-apparel");
  const ustensilFilterList = document.querySelector("#section-ustensil");
  // button arrow element
  const arrowIngredient = document.querySelector("#arrow-ingredient");
  const arrowApparel = document.querySelector("#arrow-apparel");
  const arrowUstensil = document.querySelector("#arrow-ustensil");
  // main element (list + search bar)
  const mainIngredient = document.querySelector("#main-ingredient");
  const mainApparel = document.querySelector("#main-apparel");
  const mainUstensil = document.querySelector("#main-ustensil");

  // Button [Ingredients, Appareils, Ustensils]
  select.addEventListener("click", () => {
    // Close menu if open an other
    if (menu != ingredientFilterList) {
      mainIngredient.classList.remove("dropdown-main-open");
      ingredientFilterList.classList.remove("dropdown-menu-open");
      arrowIngredient.classList.remove("dropdown-arrow-rotate");
    }
    if (menu != apparelFilterList) {
      mainApparel.classList.remove("dropdown-main-open");
      apparelFilterList.classList.remove("dropdown-menu-open");
      arrowApparel.classList.remove("dropdown-arrow-rotate");
    }
    if (menu != ustensilFilterList) {
      mainUstensil.classList.remove("dropdown-main-open");
      ustensilFilterList.classList.remove("dropdown-menu-open");
      arrowUstensil.classList.remove("dropdown-arrow-rotate");
    }
    // Toggle menu on clicked element
    main.classList.toggle("dropdown-main-open");
    arrow.classList.toggle("dropdown-arrow-rotate"); // arrow animation
    menu.classList.toggle("dropdown-menu-open"); // toggle menu
    // select.classList.toggle("dropdown-select-clicked"); // style on filter button
  });

  // Options List for Button
  options.forEach((option) => {
    option.addEventListener("click", () => {
      main.classList.remove("dropdown-main-open");
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
