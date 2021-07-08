// const tagsContainer = document.querySelector(".js-tags");
// let selectedTag = null;
// console.log(tagsContainer);

// tagsContainer.addEventListener("click", onTagsContainerClick);

// function onTagsContainerClick(event) {
//   if (event.target.nodeName !== "BUTTON") {
//     return;
//   }

//   const currentBtn = document.querySelector(".tags__btn--active");
//   console.log(currentBtn);

//   //   if (currentBtn) {
//   //     currentBtn.classList.remove("tags__btn--active");
//   //   }
//   currentBtn?.classList.remove("tags__btn--active");

//   const nextActiveBtn = event.target;
//   nextActiveBtn.classList.add("tags__btn--active");
//   selectedTag = nextActiveBtn.dataset.value;
//   console.log(selectedTag);
// }

// ====================== задача 2 ==============================
// ------- убрать/добавить -------- toggle ----------
const tagsContainer = document.querySelector(".js-tags");
const selectedTags = new Set();

tagsContainer.addEventListener("click", onTagsContainerClick);

function onTagsContainerClick(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }

  const isActiveBtn = event.target.classList.contains("tags__btn--active");

  if (isActiveBtn) {
    selectedTags.delete(event.target.dataset.value);
  } else {
    selectedTags.add(event.target.dataset.value);
  }

  event.target.classList.toggle("tags__btn--active");
  console.log(selectedTags);
}
