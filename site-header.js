document.addEventListener('DOMContentLoaded', function () {
  document.body.classList.add('site-header-fix');

  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');

  if (!navToggle || !navLinks) return;

  navToggle.addEventListener('click', function () {
    var isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isOpen));
    if (isOpen) {
      navLinks.classList.remove('is-open');
    } else {
      navLinks.classList.add('is-open');
    }
  });
});
