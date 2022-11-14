// Dropdown of filter buttons
const dropdowns = document.querySelectorAll(".dropdown"); // récupère les 3 dropdown
const ingredientInput = document.querySelector("#searchIngredient");
const apparelInput = document.querySelector("#searchApparel");
const ustensilInput = document.querySelector("#searchUstensil");

dropdowns.forEach((dropdown) => {
  // get dom element
  const dropdownWidth = dropdown;
  const select = dropdown.querySelector(".dropdown-select");
  const arrow = dropdown.querySelector(".button-filter-arrow");
  // const arrowDiv = dropdown.querySelector(".button-filter-arrow-div");
  const menu = dropdown.querySelector(".dropdown-menu");
  const main = dropdown.querySelector(".dropdown-main");
  // const options = dropdown.querySelectorAll(".dropdown-menu li");
  // const selected = dropdown.querySelector(".dropdown-selected");

  // Text and input Target
  const searchText = dropdown.querySelector(".dropdown-text");
  const searchInput = dropdown.querySelector(".dropdown-searchBar");
  // ID element
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
  // dropdown Text
  const searchTextIngredient = document.querySelector("#searchIngredientText");
  const searchTextApparel = document.querySelector("#searchApparelText");
  const searchTextUstensil = document.querySelector("#searchUstensilText");
  // dropdown Input
  const searchInputIngredient = document.querySelector("#searchIngredient");
  const searchInputApparel = document.querySelector("#searchApparel");
  const searchInputUstensil = document.querySelector("#searchUstensil");
  // select for border radius
  const selectIngredient = document.querySelector("#selectIngredient");
  const selectApparel = document.querySelector("#selectApparel");
  const selectUstensil = document.querySelector("#selectUstensil");
  // dropdown for width
  const dropdownIngredient = document.querySelector("#dropdown-ingredient");
  const dropdownApparel = document.querySelector("#dropdown-apparel");
  const dropdownUstensil = document.querySelector("#dropdown-ustensil");

  // === Dropdown CLICK Open/Close ===
  select.addEventListener("click", () => {
    // Button change
    dropdownWidth.classList.toggle("dropdown-open");
    searchText.classList.toggle("dropdown-selected-invisible");
    searchInput.classList.toggle("dropdown-searchBar-visible");
    select.classList.toggle("dropdown-borderRadius");
    searchInput.focus(); // focus input
    searchInput.value = ""; // clean input value
    searchOneFilter(); // refresh

    // Toggle menu visibility
    main.classList.toggle("dropdown-main-open");
    arrow.classList.toggle("dropdown-arrow-rotate"); // arrow animation
    menu.classList.toggle("dropdown-menu-open"); // toggle menu
    // select.classList.toggle("dropdown-select-clicked"); // style on filter button

    // Close menu if open an other
    if (menu != ingredientFilterList) {
      mainIngredient.classList.remove("dropdown-main-open");
      ingredientFilterList.classList.remove("dropdown-menu-open");
      arrowIngredient.classList.remove("dropdown-arrow-rotate");
      // new
      searchTextIngredient.classList.remove("dropdown-selected-invisible"); // show text
      searchInputIngredient.classList.remove("dropdown-searchBar-visible"); // hide input
      selectIngredient.classList.remove("dropdown-borderRadius"); // reset border radius
      dropdownIngredient.classList.remove("dropdown-open");
    }
    if (menu != apparelFilterList) {
      mainApparel.classList.remove("dropdown-main-open");
      apparelFilterList.classList.remove("dropdown-menu-open");
      arrowApparel.classList.remove("dropdown-arrow-rotate");
      // new
      searchTextApparel.classList.remove("dropdown-selected-invisible"); // show text
      searchInputApparel.classList.remove("dropdown-searchBar-visible"); // hide input
      selectApparel.classList.remove("dropdown-borderRadius"); // reset border radius
      dropdownApparel.classList.remove("dropdown-open");
    }
    if (menu != ustensilFilterList) {
      mainUstensil.classList.remove("dropdown-main-open");
      ustensilFilterList.classList.remove("dropdown-menu-open");
      arrowUstensil.classList.remove("dropdown-arrow-rotate");
      //new
      searchTextUstensil.classList.remove("dropdown-selected-invisible"); // show text
      searchInputUstensil.classList.remove("dropdown-searchBar-visible"); // hide input
      selectUstensil.classList.remove("dropdown-borderRadius"); // reset border radius
      dropdownUstensil.classList.remove("dropdown-open");
    }
  });
}); // fin dropdowns for each

// Refocus input and clear after add a tag
// function FocusAndClearInputDropdownEventListener(type) {
//   const dropdowns = document.querySelectorAll(".dropdown"); // récupère les 3 dropdown
//   const searchInput = document.querySelector(`#search${type}`); // by type

//   dropdowns.forEach((dropdown) => {
//     const options = dropdown.querySelectorAll(".dropdown-menu li");
//     options.forEach((option) => {
//       option.addEventListener("click", () => {
//         searchInput.focus(); // re focus input
//         searchInput.value = ""; // clean input value
//       });
//     });
//   });
// }
// Init first Event listener for First List
// FocusAndClearInputDropdownEventListener("Ingredient");
// FocusAndClearInputDropdownEventListener("Apparel");
// FocusAndClearInputDropdownEventListener("Ustensil");

// Close Dropdown after Add a Tag
function CloseAfterFilterClickEventListener() {
  const dropdowns = document.querySelectorAll(".dropdown"); // récupère les 3 dropdown
  dropdowns.forEach((dropdown) => {
    const options = dropdown.querySelectorAll(".dropdown-menu li");
    const dropdownWidth = dropdown;
    const select = dropdown.querySelector(".dropdown-select");
    const arrow = dropdown.querySelector(".button-filter-arrow");
    const menu = dropdown.querySelector(".dropdown-menu");
    const main = dropdown.querySelector(".dropdown-main");
    const searchText = dropdown.querySelector(".dropdown-text");
    const searchInput = dropdown.querySelector(".dropdown-searchBar");

    options.forEach((option) => {
      option.addEventListener("click", () => {
        // if want to close dropdown
        main.classList.remove("dropdown-main-open");
        arrow.classList.remove("dropdown-arrow-rotate"); // arrow animation
        menu.classList.remove("dropdown-menu-open"); // close menu
        select.classList.remove("dropdown-borderRadius");
        searchText.classList.remove("dropdown-selected-invisible");
        searchInput.classList.remove("dropdown-searchBar-visible");
        dropdownWidth.classList.remove("dropdown-open");
      });
    });
  });
}
CloseAfterFilterClickEventListener();
