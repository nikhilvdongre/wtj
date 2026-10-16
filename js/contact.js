/* ============================================
   WORLD TRAVEL JUNCTIONS — CONTACT PAGE SCRIPT
   File: js/contact.js
============================================ */

(function () {
  const form = document.getElementById('wtjContactForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('wtjName').value.trim();
    const phone = document.getElementById('wtjPhone').value.trim();
    const email = document.getElementById('wtjEmail').value.trim();
    const destination = document.getElementById('wtjDestinationContact').value.trim();
    const message = document.getElementById('wtjMessage').value.trim();

    let text = `Hi, I'd like to enquire about a tour.\n`;
    text += `Name: ${name}\n`;
    text += `Phone: ${phone}\n`;
    if (email) text += `Email: ${email}\n`;
    if (destination) text += `Destination: ${destination}\n`;
    text += `Message: ${message}`;

    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  });
})();
