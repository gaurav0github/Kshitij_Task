$("#doToggle").click(function (e) {
  e.preventDefault();
  $("#toToggle").toggleClass("d-none");
});

document.querySelector(".first-button").addEventListener("click", function () {
  document.querySelector(".animated-icon1").classList.toggle("open");
});
