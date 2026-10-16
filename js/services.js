// ============================================
// WORLD TRAVEL JUNCTIONS — SERVICE PAGES SCRIPT
// File: js/services.js
// Shared across all service pages (Flight, Visa,
// Passport, Train, Cruise) for FAQ accordion toggle.
// ============================================

document.addEventListener('DOMContentLoaded', function () {
  var faqItems = document.querySelectorAll('.wtj-faq-item');

  faqItems.forEach(function (item) {
    var question = item.querySelector('.wtj-faq-question');

    question.addEventListener('click', function () {
      var isOpen = item.classList.contains('wtj-faq-open');

      // Close all other open items (accordion behaviour)
      faqItems.forEach(function (other) {
        other.classList.remove('wtj-faq-open');
        other.querySelector('.wtj-faq-question').setAttribute('aria-expanded', 'false');
      });

      // Toggle the clicked item
      if (!isOpen) {
        item.classList.add('wtj-faq-open');
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });
});
