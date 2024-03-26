var images = document.querySelectorAll(".image img");
var closeBtn = document.querySelector(".close");
var prevBtn = document.querySelector(".prev");
var nextBtn = document.querySelector(".next");
var gallery = document.querySelector(".gallery");
var displayImg = document.querySelector(".gallery__inner img");

var currentIndex = 0;

function showGallery() {
  currentIndex == 0
    ? prevBtn.classList.add("hide")
    : prevBtn.classList.remove("hide");

  currentIndex == images.length - 1
    ? nextBtn.classList.add("hide")
    : nextBtn.classList.remove("hide");

  displayImg.src = images[currentIndex].src;
  gallery.classList.add("show");
}

images.forEach((item, index) => {
  item.addEventListener("click", function (e) {
    currentIndex = index;
    showGallery();
  });
});

closeBtn.addEventListener("click", (e) => {
  gallery.classList.remove("show");
});

prevBtn.addEventListener("click", (e) => {
  if (currentIndex > 0) {
    currentIndex--;
    showGallery();
  }
});

nextBtn.addEventListener("click", (e) => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    showGallery();
  }
});
