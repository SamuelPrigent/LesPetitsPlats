// Dropdown of filter buttons
const dropdowns = document.querySelectorAll(".dropdown"); // moi j'en ai que 1

dropdowns.forEach((dropdown) => {
  // get dom element
  const select = dropdown.querySelector(".dropdown-select");
  const arrow = dropdown.querySelector(".button-filter-arrow");
  const menu = dropdown.querySelector(".dropdown-menu");
  const options = dropdown.querySelectorAll(".dropdown-menu li");
  const selected = dropdown.querySelector(".dropdown-selected");

  // add event listener
  select.addEventListener("click", () => {
    select.classList.toggle("dropdown-select-clicked"); // add style clicked element
    arrow.classList.toggle("dropdown-arrow-rotate"); // add arrow animation
    menu.classList.toggle("dropdown-menu-open");
  });

  //
  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerText = option.innerText; // replace text
      select.classList.remove("dropdown-select-clicked");
      arrow.classList.remove("dropdown-arrow-rotate");
      menu.classList.remove("dropdown-menu-open");
      // remove active class
      options.forEach((option) => {
        option.classList.remove("active");
      });
      // add active class
      option.classList.add("active");
    });
  });
}); // fin dropdown
