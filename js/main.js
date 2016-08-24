window.onload = function () {

    var miniMap = document.getElementById("mini-map");
    var modalMap = document.getElementById("modal-map");
    var closeBtn = document.getElementById("close-map-btn");
    var contactForm = document.getElementById("contact-form");
    var closeForm = document.getElementById("close-form-btn");
    var modalForm = document.getElementById("modal-form");


    miniMap.onclick = function () {
        modalMap.style.display="block";
    };

    closeBtn.onclick = function () {
        modalMap.style.display="none";
    };

    contactForm.onclick = function () {
        modalForm.style.display="block";
    };
    closeForm.onclick = function () {
        modalForm.style.display="none";
    };

};
