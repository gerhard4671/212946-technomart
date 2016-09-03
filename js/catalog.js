window.onload = function() {

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



};
