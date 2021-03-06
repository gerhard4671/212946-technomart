window.onload = function() {

  var mapOpn = document.querySelector('#mini-map');
  var modalMap = document.querySelector('.modal-map');
  var closeMap = document.querySelector(".modal-map-close");

  var formOpn = document.querySelector("#contact-form");
  var modalForm = document.querySelector(".wright-us");
  var closeForm = document.querySelector(".modal-form-close");

  mapOpn.addEventListener("click", function(event) {
    event.preventDefault();
    modalMap.classList.add("modal-map-show");
  });

  closeMap.addEventListener("click", function(event) {
    event.preventDefault();
    modalMap.classList.remove("modal-map-show");
  });

  formOpn.addEventListener("click", function(event) {
    event.preventDefault();
    modalForm.classList.add("wright-us-show");
  });

  closeForm.addEventListener("click", function(event) {
    event.preventDefault();
    modalForm.classList.remove("wright-us-show");
  });

};


var confirmOpnElems = document.querySelectorAll(".buy-btn");
var modalConfirm = document.querySelector(".confirm-block");
var continueBuy = document.querySelector(".continue");
var closeConfirm = document.querySelector('.confirm-close-btn');


for (var i = 0; i < confirmOpnElems.length; i++) {
  confirmOpnElems[i].addEventListener("click", function(event) {
    event.preventDefault();
    modalConfirm.classList.add("confirm-block-show");
  });
}

continueBuy.addEventListener("click", function(event) {
  event.preventDefault();
  modalConfirm.classList.remove("confirm-block-show");
});

closeConfirm.addEventListener("click", function(event) {
  event.preventDefault();
  modalConfirm.classList.remove("confirm-block-show");
});
