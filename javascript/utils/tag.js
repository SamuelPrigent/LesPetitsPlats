// ====== Event listener ======

const filterList = document.querySelectorAll(".filter");

filterList.forEach((element) => {
  element.addEventListener("click", () => {
    const filterText = element.innerText;
    createTag(filterText);
  });
});

// ====== Create a Tag ======
function createTag(tagName) {
  console.log(tagName);

  // Dom element
  const tagSection = document.querySelector(".section-tag");

  // Create the Tag in HTML
  //
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
  // Structure
  tag.appendChild(tagTxt);
  tag.appendChild(tagSvg);
  tagSection.appendChild(tag);
}
