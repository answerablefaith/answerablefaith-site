document.addEventListener('DOMContentLoaded', function () {
  document.body.classList.add('site-header-fix');

  var navToggles = document.querySelectorAll('.nav-toggle');

  navToggles.forEach(function (navToggle) {
    var nav = navToggle.closest('.nav');
    var navLinks = nav ? nav.querySelector('.nav-links') : document.querySelector('.nav-links');

    if (!navLinks) return;

    navToggle.addEventListener('click', function () {
      var isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!isOpen));

      if (isOpen) {
        navLinks.classList.remove('is-open');
      } else {
        navLinks.classList.add('is-open');
      }
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('is-open');
      });
    });
  });
});
