var searchBtn = document.querySelector(".search-box__search-btn");

searchBtn.addEventListener("click", function () {
  this.parentElement.classList.toggle("open");
  this.previousElementSibling.focus();
});
