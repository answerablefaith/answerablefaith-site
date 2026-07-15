document.addEventListener('DOMContentLoaded', function () {
  document.body.classList.add('site-header-fix');

  function normaliseSiteLinks() {
    document.querySelectorAll('a.brand, a.logo, header a[aria-label*="Answerable" i], nav a[aria-label*="Answerable" i]').forEach(function (link) {
      link.setAttribute('href', '/');
    });

    document.querySelectorAll('header a, nav a, footer a').forEach(function (link) {
      var label = (link.textContent || '').trim().toLowerCase();
      if (label === 'home') {
        link.setAttribute('href', '/');
      }
      if (label === 'get the app' || label === 'download answerable faith' || label === 'practise in the app' || label === 'practise in answerable') {
        link.setAttribute('href', '/#download');
      }
    });

    document.querySelectorAll('a[href="#download"]').forEach(function (link) {
      link.setAttribute('href', '/#download');
    });
  }

  normaliseSiteLinks();

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