var navBtn = document.querySelector(".nav__btn");
var nav = document.querySelector(".nav ul");
var navBtnImg = document.getElementById("navLogo");
var closeNavBtn = document.getElementById("closeNavLogo");
var signup = document.getElementById("signup");
var signup2 = document.getElementById("signup2");
var modal = document.getElementById("modal");
var closeModal = document.getElementById("close-modal");

navBtn.addEventListener("click", function () {
  nav.classList.toggle("visible");
  navBtnImg.classList.toggle("hidden");
  closeNavBtn.classList.toggle("hidden");
});

// Show Modal
signup.addEventListener("click", function () {
  modal.classList.add("show-modal");
});
signup2.addEventListener("click", function () {
  modal.classList.add("show-modal");
});

//Hide modal
closeModal.addEventListener("click", function () {
  modal.classList.remove("show-modal");
});

// Hide modal on outside click
//window.addEventListener('click', e => e.target == modal ? modal.classList.remove('show-modal') : false);

window.addEventListener("click", function (e) {
  if (e.target == modal) {
    modal.classList.remove("show-modal");
  } else {
    false;
  }
});
