window.onload = function () {

    var miniMap = document.getElementById("mini-map");
    var modalMap = document.getElementById("modal-map");
    var closeBtn = document.getElementById("close-map-btn");

    miniMap.onclick = function () {
        modalMap.style.display="block";
    };

    closeBtn.onclick = function () {
        modalMap.style.display="none";
    };

};
