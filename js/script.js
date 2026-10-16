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


/* ── SECTION 7: ABOUT STATS COUNTER ───────── */
(function () {
  const stats = document.querySelectorAll('.wtj-about-stat h3[data-count]');
  if (!stats.length) return;

  let hasAnimated = false;

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

  const aboutSection = document.getElementById('about-snippet');
  if (!aboutSection) return;

  const statsObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        stats.forEach(animateCount);
      }
    });
  }, { threshold: 0.3 });

  statsObserver.observe(aboutSection);
})();



/* ── SECTION 3: QUICK ENQUIRY BAR ─────────── */
(function () {
  const form = document.getElementById('wtjEnquiryForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const destination = document.getElementById('wtjDestination').value.trim();
    const travelDate = document.getElementById('wtjTravelDate').value;
    const persons = document.getElementById('wtjPersons').value.trim();

    // Format date nicely (e.g. 25 Dec 2026)
    let formattedDate = travelDate;
    if (travelDate) {
      const dateObj = new Date(travelDate);
      formattedDate = dateObj.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });
    }

    const message =
      `Hi, I'm interested in a tour package.\n` +
      `Destination: ${destination}\n` +
      `Travel Date: ${formattedDate}\n` +
      `No. of Persons: ${persons}`;

    const whatsappUrl =
      `https://wa.me/919766969246?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
  });
})();



/* ── SECTION 5: PACKAGE TAB FILTER ────────── */
(function () {
  const tabs = document.querySelectorAll('#wtjPackageTabs .wtj-tab');
  const cards = document.querySelectorAll('#wtjPackageGrid .wtj-package-card');
  if (!tabs.length || !cards.length) return;

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      const filter = tab.getAttribute('data-filter');

      // Update active tab
      tabs.forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');

      // Show/hide cards
      cards.forEach(function (card) {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('wtj-hidden');
        } else {
          card.classList.add('wtj-hidden');
        }
      });
    });
  });
})();