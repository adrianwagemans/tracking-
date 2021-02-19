document.querySelector('.ham').onclick = function () {
  hamToggle();
};

var x = document.getElementById('mytopnav');
function hamToggle() {
  x.classList.toggle('responsive');
  document.querySelector('.ham').classList.toggle('showClose');
}

var menuLinks = document.querySelectorAll('nav');
menuLinks.forEach(function (menuLink) {
  menuLink.addEventListener('click', hamToggle);
});
