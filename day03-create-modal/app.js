var modal = document.querySelector(".modal");
var btnOpen = document.querySelector(".open-modal-btn");
var iconClose = document.querySelector(".modal__header i");
var iconBtn = document.querySelector(".close-btn");
var inner = document.querySelector(".modal__inner");

function toggleModal() {
  modal.classList.toggle("hide");
}

btnOpen.addEventListener("click", toggleModal);
iconClose.addEventListener("click", toggleModal);
iconBtn.addEventListener("click", toggleModal);
inner.addEventListener("click", function (e) {
  console.log("inner was clicked");
});
modal.addEventListener("click", function (e) {
  if (e.target == e.currentTarget) {
    toggleModal();
  }
});
