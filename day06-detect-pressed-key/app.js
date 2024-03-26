var alert = document.querySelector(".alert");
var result = document.querySelector(".result");
var wrapper = document.querySelector(".wrapper");
var itemKey = document.querySelector(".detail-item.key p:last-child ");
var itemLocation = document.querySelector(
  ".detail-item.location p:last-child "
);
var itemWhich = document.querySelector(".detail-item.which p:last-child ");
var itemCode = document.querySelector(".detail-item.code p:last-child ");

var isPressed = false;

document.addEventListener("keypress", function (event) {
  if (!isPressed) {
    alert.classList.add("hide");
    wrapper.classList.remove("hide");
    isPressed = true;
  }

  result.innerText = event.which;
  itemKey.innerText = event.key === " " ? event.code : event.key;
  itemLocation.innerText = event.location;
  itemWhich.innerText = event.which;
  itemCode.innerText = event.code;
});
