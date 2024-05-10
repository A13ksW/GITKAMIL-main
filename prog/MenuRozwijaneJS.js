// function toggleMenu() {
//   var navbar = document.querySelector('.navbar');
//   navbar.classList.toggle('responsive');
// }
function toggleMenu() {
  var navbar = document.getElementById('navbar');
  navbar.classList.toggle('responsive');
  var contentElements = document.querySelectorAll('body > *:not(header)');
  contentElements.forEach(function (element) {
    if (navbar.classList.contains('responsive')) {
      element.setAttribute('hidden', true);
    } else {
      element.removeAttribute('hidden');
    }
  });
}
