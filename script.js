/* ==========================================================================
   The Vine - Site scripts
   ========================================================================== */

/* --------------------------------------------------------------------------
   Mobile navigation toggle

   The menu is hidden by CSS on small screens. Clicking the button adds or
   removes the "is-open" class, and keeps aria-expanded in sync so screen
   readers announce whether the menu is open or closed.
   -------------------------------------------------------------------------- */

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', function () {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';

    navToggle.setAttribute('aria-expanded', String(!isOpen));
    navMenu.classList.toggle('is-open', !isOpen);
  });

  // Close the menu when a link is chosen, so the page arrives with it shut.
  navMenu.addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
      navToggle.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('is-open');
    }
  });
}
