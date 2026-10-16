/* ============================================
   WORLD TRAVEL JUNCTIONS — HEADER SCRIPTS
   File: js/header.js
============================================ */

/* ── MOBILE MENU TOGGLE ───────────────────── */
function wtjToggleMenu(btn) {
  const menu = document.getElementById('wtjMobileMenu');
  const isOpen = menu.classList.toggle('open');
  btn.classList.toggle('open', isOpen);
  btn.setAttribute('aria-expanded', isOpen);
}

/* ── CLOSE MENU ON OUTSIDE CLICK ─────────── */
document.addEventListener('click', function (e) {
  const nav  = document.querySelector('.wtj-navbar');
  const menu = document.getElementById('wtjMobileMenu');
  const btn  = document.querySelector('.wtj-hamburger');
  if (nav && !nav.contains(e.target) && menu.classList.contains('open')) {
    menu.classList.remove('open');
    btn.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }
});

/* ── NAVBAR SHADOW ON SCROLL ──────────────── */
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.wtj-navbar');
  if (!navbar) return;
  if (window.scrollY > 10) {
    navbar.style.boxShadow = '0 4px 20px rgba(2,31,89,0.15)';
  } else {
    navbar.style.boxShadow = '0 2px 16px rgba(2,31,89,0.10)';
  }
});

/* ── AUTO ACTIVE NAV LINK ─────────────────── */
(function () {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.wtj-nav-links a, .wtj-mobile-links a').forEach(function (link) {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
})();
