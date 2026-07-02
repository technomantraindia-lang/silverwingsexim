(function () {
  var isSubPage = /\/page\//.test(window.location.pathname);
  var assetBase = isSubPage ? "../assets/" : "assets/";

  var modalMarkup =
    '<div class="quote-modal" id="quoteModal" aria-hidden="true">' +
      '<div class="quote-modal-overlay" data-quote-close></div>' +
      '<div class="quote-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="quoteModalTitle">' +
        '<aside class="quote-modal-info">' +
          '<div class="quote-modal-info-inner">' +
            '<div class="quote-modal-brand">' +
              '<img src="' + assetBase + 'logo.png" alt="Silver Wing Exim">' +
            '</div>' +
            '<div class="quote-modal-feature">' +
              '<img src="' + assetBase + 'product/Mix Fruits.png" alt="Premium export products">' +
            '</div>' +
            '<p class="quote-modal-kicker">Trusted Partner In</p>' +
            '<h3 class="quote-modal-tagline">Export &bull; Agro &bull; Food Excellence</h3>' +
            '<div class="quote-modal-contact-list">' +
              '<a class="quote-modal-contact-card" href="tel:+919876543210">' +
                '<span class="quote-modal-contact-icon" aria-hidden="true">' +
                  '<svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>' +
                '</span>' +
                '<span class="quote-modal-contact-text">' +
                  '<strong>Call Us</strong>' +
                  '<span>+91 98765 43210</span>' +
                '</span>' +
              '</a>' +
              '<a class="quote-modal-contact-card" href="mailto:info@silverwingexim.com">' +
                '<span class="quote-modal-contact-icon" aria-hidden="true">' +
                  '<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>' +
                '</span>' +
                '<span class="quote-modal-contact-text">' +
                  '<strong>Email Us</strong>' +
                  '<span>info@silverwingexim.com</span>' +
                '</span>' +
              '</a>' +
              '<div class="quote-modal-contact-card">' +
                '<span class="quote-modal-contact-icon" aria-hidden="true">' +
                  '<svg viewBox="0 0 24 24"><path d="M12 1a3 3 0 0 0-3 3v1H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3V4a3 3 0 0 0-3-3zm-1 4V4a1 1 0 0 1 2 0v1h-2zm-1 3h8v9H9V8z"/></svg>' +
                '</span>' +
                '<span class="quote-modal-contact-text">' +
                  '<strong>24/7 Support</strong>' +
                  '<span>We are always here to help</span>' +
                '</span>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</aside>' +
        '<section class="quote-modal-form-wrap">' +
          '<button class="quote-modal-close" type="button" aria-label="Close form" data-quote-close>&times;</button>' +
          '<div class="quote-modal-form-content">' +
            '<h2 id="quoteModalTitle">Get in Touch</h2>' +
            '<p class="quote-modal-subtitle">We\'d love to hear from you. Send us an enquiry and our team will get back to you shortly.</p>' +
            '<form class="quote-modal-form" id="quoteModalForm">' +
              '<div class="quote-modal-row">' +
                '<label class="quote-modal-field">' +
                  '<span class="quote-modal-field-icon" aria-hidden="true">' +
                    '<svg viewBox="0 0 24 24"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>' +
                  '</span>' +
                  '<input type="text" name="fullName" placeholder="Full Name" required>' +
                '</label>' +
                '<label class="quote-modal-field">' +
                  '<span class="quote-modal-field-icon" aria-hidden="true">' +
                    '<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>' +
                  '</span>' +
                  '<input type="email" name="email" placeholder="Email Address" required>' +
                '</label>' +
              '</div>' +
              '<div class="quote-modal-row">' +
                '<label class="quote-modal-field">' +
                  '<span class="quote-modal-field-icon" aria-hidden="true">' +
                    '<svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>' +
                  '</span>' +
                  '<input type="tel" name="phone" placeholder="Phone Number" required>' +
                '</label>' +
                '<label class="quote-modal-field">' +
                  '<span class="quote-modal-field-icon" aria-hidden="true">' +
                    '<svg viewBox="0 0 24 24"><path d="M12 7V3H2v18h20V7H12zm-2 12H4v-2h6v2zm0-4H4v-2h6v2zm0-4H4V9h6v2zm10 8h-8v-2h8v2zm0-4h-8v-2h8v2zm0-4h-8V9h8v2z"/></svg>' +
                  '</span>' +
                  '<input type="text" name="company" placeholder="Company Name">' +
                '</label>' +
              '</div>' +
              '<label class="quote-modal-field quote-modal-field-full">' +
                '<span class="quote-modal-field-icon" aria-hidden="true">' +
                  '<svg viewBox="0 0 24 24"><path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8-2h4v2h-4V4z"/></svg>' +
                '</span>' +
                '<select name="service" required>' +
                  '<option value="" selected disabled>Select Product</option>' +
                  '<option value="Mix Fruits">Mix Fruits</option>' +
                  '<option value="Vegetables">Vegetables</option>' +
                  '<option value="Confectionery">Confectionery</option>' +
                  '<option value="Spices">Spices</option>' +
                  '<option value="Frozen">Frozen</option>' +
                  '<option value="Rice">Rice</option>' +
                  '<option value="Flour">Flour</option>' +
                  '<option value="Salt">Salt</option>' +
                  '<option value="Makhana / Fox Nuts">Makhana / Fox Nuts</option>' +
                  '<option value="Dehydrated Products">Dehydrated Products</option>' +
                  '<option value="Seeds">Seeds</option>' +
                  '<option value="Other">Other</option>' +
                '</select>' +
                '<span class="quote-modal-select-arrow" aria-hidden="true">&#8964;</span>' +
              '</label>' +
              '<label class="quote-modal-field quote-modal-field-full">' +
                '<span class="quote-modal-field-icon" aria-hidden="true">' +
                  '<svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>' +
                '</span>' +
                '<input type="text" name="subject" placeholder="Subject" required>' +
              '</label>' +
              '<label class="quote-modal-field quote-modal-field-full">' +
                '<span class="quote-modal-field-icon quote-modal-field-icon-top" aria-hidden="true">' +
                  '<svg viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>' +
                '</span>' +
                '<textarea name="message" rows="4" placeholder="Message" required></textarea>' +
              '</label>' +
              '<button class="quote-modal-submit" type="submit">' +
                '<span class="quote-modal-submit-icon" aria-hidden="true">' +
                  '<svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>' +
                '</span>' +
                '<span>Send Enquiry</span>' +
                '<span class="quote-modal-submit-arrow" aria-hidden="true">&rarr;</span>' +
              '</button>' +
              '<p class="quote-modal-note">' +
                '<span class="quote-modal-note-icon" aria-hidden="true">' +
                  '<svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>' +
                '</span>' +
                'We\'ll respond within 24 hours' +
              '</p>' +
            '</form>' +
          '</div>' +
        '</section>' +
      '</div>' +
    '</div>';

  function openModal() {
    var modal = document.getElementById("quoteModal");
    if (!modal) return;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("quote-modal-open");
  }

  function closeModal() {
    var modal = document.getElementById("quoteModal");
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("quote-modal-open");
  }

  function init() {
    if (!document.getElementById("quoteModal")) {
      document.body.insertAdjacentHTML("beforeend", modalMarkup);
    }

    document.querySelectorAll("[data-quote-open], .quote-btn").forEach(function (trigger) {
      trigger.addEventListener("click", function (event) {
        event.preventDefault();
        openModal();
      });
    });

    document.addEventListener("click", function (event) {
      if (event.target.closest("[data-quote-close]")) {
        closeModal();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeModal();
      }
    });

    var form = document.getElementById("quoteModalForm");
    if (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        closeModal();
        form.reset();
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
