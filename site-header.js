document.addEventListener('DOMContentLoaded', function () {
  document.body.classList.add('site-header-fix');

  document.querySelectorAll('.faq').forEach(function (faqSection) {
    faqSection.remove();
  });

  document.querySelectorAll('script[data-faq-schema]').forEach(function (faqSchema) {
    faqSchema.remove();
  });

  /* Keep article navigation identical to the redesigned public pages. */
  document.querySelectorAll('.nav-links').forEach(function (navLinks) {
    var links = [
      { href: '/', label: 'Home' },
      { href: '/support/', label: 'Support' },
      { href: '/privacy/', label: 'Privacy Policy' },
      { href: '/terms/', label: 'Terms of Service' }
    ];

    navLinks.replaceChildren();

    links.forEach(function (item) {
      var link = document.createElement('a');
      link.href = item.href;
      link.textContent = item.label;
      navLinks.appendChild(link);
    });
  });

  document.querySelectorAll('.nav-toggle').forEach(function (navToggle) {
    var nav = navToggle.closest('.nav');
    var navLinks = nav ? nav.querySelector('.nav-links') : document.querySelector('.nav-links');

    if (!navLinks) return;

    navToggle.addEventListener('click', function () {
      var isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!isOpen));
      navLinks.classList.toggle('is-open', !isOpen);
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('is-open');
      });
    });
  });

  var iosAppLink = document.querySelector('a.store-button[href="https://apps.apple.com/gb/app/answerable/id6785974132"]');

  if (iosAppLink) {
    iosAppLink.removeAttribute('onclick');
    iosAppLink.removeAttribute('aria-disabled');
    iosAppLink.setAttribute('aria-label', 'Download Answerable on the App Store');
  }
});
