/* ============================================
   WORLD TRAVEL JUNCTIONS — MAIN SCRIPTS
   File: js/script.js
   (Section-specific JS will be added here
    as each section is built)
============================================ */


/* ── SMOOTH SCROLL FOR ANCHOR LINKS ─────── */
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});


/* ── SCROLL REVEAL (FADE IN ON SCROLL) ───── */
/* Sections fade in as user scrolls down */
const wtjObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('wtj-visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.wtj-reveal').forEach(function (el) {
  wtjObserver.observe(el);
});


/* ============================================
   SECTION JS WILL BE ADDED BELOW
   as each section is built.

   Example structure:

   SECTION 3: ENQUIRY BAR
   (WhatsApp pre-filled message builder)

   SECTION 4: DESTINATIONS HOVER

   SECTION 5: PACKAGE TAB FILTER

   SECTION 8: TESTIMONIAL SLIDER

   ... and so on
============================================ */


/* ── STATS COUNTER (Home About-Snippet + About page Stats Strip) ── */
(function () {
  function animateCount(el) {
    const target = parseInt(el.getAttribute('data-count'), 10);
    const duration = 1500;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * target);
      el.textContent = value + '+';
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target + '+';
      }
    }
    requestAnimationFrame(update);
  }

  const sections = document.querySelectorAll('#about-snippet, .wtj-stats-strip');

  sections.forEach(function (section) {
    const stats = section.querySelectorAll('h3[data-count]');
    if (!stats.length) return;

    let hasAnimated = false;
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          stats.forEach(animateCount);
        }
      });
    }, { threshold: 0.3 });

    observer.observe(section);
  });
})();
