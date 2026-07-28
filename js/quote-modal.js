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
              '<img width="512" height="512" decoding="async" loading="lazy" src="' + assetBase + 'logo-web.png" alt="Silver Wing Exim">' +
            '</div>' +
            '<div class="quote-modal-feature">' +
              '<img loading="lazy" src="' + assetBase + 'product/Mix Fruits.png" alt="Premium export products">' +
            '</div>' +
            '<p class="quote-modal-kicker">Trusted Partner In</p>' +
            '<h3 class="quote-modal-tagline">Export &bull; Agro &bull; Food Excellence</h3>' +
            '<div class="quote-modal-contact-list">' +
              '<a class="quote-modal-contact-card" href="tel:+918780772092">' +
                '<span class="quote-modal-contact-icon" aria-hidden="true">' +
                  '<svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>' +
                '</span>' +
                '<span class="quote-modal-contact-text">' +
                  '<strong>Call Us</strong>' +
                  '<span>+91 8780772092</span>' +
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

  var whatsappMarkup =
    '<a class="floating-whatsapp" href="https://wa.me/918780772092?text=Hello%20Silver%20Wing%20Exim%2C%20I%20want%20to%20know%20more%20about%20your%20export%20products." target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">' +
      '<span class="floating-whatsapp-icon" aria-hidden="true">' +
        '<svg viewBox="0 0 32 32"><path d="M16.02 3C8.86 3 3.04 8.8 3.04 15.93c0 2.28.6 4.5 1.74 6.45L3 29l6.8-1.78a13 13 0 0 0 6.22 1.58C23.18 28.8 29 23 29 15.93S23.18 3 16.02 3zm0 23.6c-2 0-3.95-.54-5.66-1.56l-.4-.24-4.04 1.06L7 21.94l-.26-.42a10.7 10.7 0 0 1-1.5-5.59c0-5.9 4.84-10.72 10.78-10.72 5.95 0 10.78 4.81 10.78 10.72 0 5.9-4.83 10.67-10.78 10.67zm5.9-8c-.32-.16-1.9-.94-2.2-1.04-.3-.11-.52-.16-.74.16-.21.32-.84 1.04-1.03 1.25-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.6-1.6-.96-.86-1.6-1.91-1.8-2.24-.19-.32-.02-.5.14-.66.15-.15.32-.38.49-.57.16-.19.21-.32.32-.54.1-.21.05-.4-.03-.56-.08-.16-.73-1.76-1-2.4-.27-.64-.54-.55-.74-.56h-.63c-.21 0-.56.08-.86.4-.3.32-1.13 1.1-1.13 2.7s1.16 3.13 1.32 3.34c.16.21 2.28 3.48 5.54 4.88.77.34 1.38.54 1.85.69.78.25 1.48.21 2.04.13.62-.09 1.9-.77 2.17-1.52.27-.75.27-1.4.19-1.52-.08-.13-.3-.21-.62-.38z"/></svg>' +
      '</span>' +
    '</a>';

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

  function initMobileNavigation() {
    var navbar = document.querySelector(".navbar");
    var navLinks = document.querySelector(".nav-links");

    if (!navbar || !navLinks || navbar.querySelector(".mobile-menu-toggle")) return;

    var toggle = document.createElement("button");
    toggle.className = "mobile-menu-toggle";
    toggle.type = "button";
    toggle.setAttribute("aria-label", "Open menu");
    toggle.setAttribute("aria-expanded", "false");
    toggle.innerHTML = "<span></span><span></span><span></span>";

    navbar.insertBefore(toggle, navLinks);

    toggle.addEventListener("click", function () {
      var isOpen = document.body.classList.toggle("mobile-nav-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });

    navLinks.querySelectorAll(".dropdown > a").forEach(function (dropdownTrigger) {
      dropdownTrigger.setAttribute("aria-expanded", "false");

      dropdownTrigger.addEventListener("click", function (event) {
        if (!window.matchMedia("(max-width: 760px)").matches) return;

        event.preventDefault();
        var dropdown = dropdownTrigger.closest(".dropdown");
        var isOpen = dropdown.classList.toggle("is-mobile-open");

        dropdownTrigger.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (!window.matchMedia("(max-width: 760px)").matches) return;
        if (link.closest(".dropdown") && link.parentElement.classList.contains("dropdown")) return;

        document.body.classList.remove("mobile-nav-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");

        navLinks.querySelectorAll(".dropdown.is-mobile-open").forEach(function (dropdown) {
          dropdown.classList.remove("is-mobile-open");
          var trigger = dropdown.querySelector(":scope > a");
          if (trigger) {
            trigger.setAttribute("aria-expanded", "false");
          }
        });
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        document.body.classList.remove("mobile-nav-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");

        navLinks.querySelectorAll(".dropdown.is-mobile-open").forEach(function (dropdown) {
          dropdown.classList.remove("is-mobile-open");
          var trigger = dropdown.querySelector(":scope > a");
          if (trigger) {
            trigger.setAttribute("aria-expanded", "false");
          }
        });
      }
    });
  }

  function getContactUrl(productName) {
    var base = isSubPage ? "contact.html" : "page/contact.html";
    return base + "?product=" + encodeURIComponent(productName) + "#contactPageForm";
  }

  function getProductName(card) {
    var title = card.querySelector("h2, h3");
    if (title && title.textContent.trim()) {
      return title.textContent.trim();
    }

    var image = card.querySelector("img[alt]");
    if (image && image.alt.trim()) {
      return image.alt.trim();
    }

    return "";
  }

  function initCategoryDirectLinks() {
    document.querySelectorAll(".product-categories a.category-card[href], .product-image-page a.product-image-card[href]").forEach(function (card) {
      card.addEventListener("click", function (event) {
        if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

        event.preventDefault();
        event.stopImmediatePropagation();
        window.location.href = card.href;
      }, true);
    });
  }

  function initProductContactLinks() {
    document.querySelectorAll(".product-image-page .product-image-card, .product-categories .category-card").forEach(function (card) {
      var productName = getProductName(card);
      if (!productName) return;

      if (card.tagName.toLowerCase() === "a") return;

      card.setAttribute("role", "link");
      card.setAttribute("tabindex", "0");

      card.setAttribute("data-product-enquiry", productName);

      card.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = getContactUrl(productName);
      });

      card.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          window.location.href = getContactUrl(productName);
        }
      });
    });
  }

  function initProductCardAnimations() {
    var cards = document.querySelectorAll(".product-image-page .product-image-card, .product-categories .category-card");
    var revealClasses = ["reveal-left", "reveal-up", "reveal-right", "reveal-down"];

    if (!cards.length) return;

    cards.forEach(function (card, index) {
      var hasRevealClass = revealClasses.some(function (className) {
        return card.classList.contains(className);
      });

      if (!hasRevealClass) {
        card.classList.add(revealClasses[index % revealClasses.length]);
      }

      card.style.transitionDelay = (index % 6) * 70 + "ms";
      card.style.transitionDuration = "1.15s";
    });

    if (!("IntersectionObserver" in window)) {
      cards.forEach(function (card) {
        card.classList.add("revealed");
      });
      return;
    }

    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: "0px 0px -50px 0px",
      threshold: 0.1
    });

    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () {
        cards.forEach(function (card) {
          if (!card.classList.contains("revealed")) {
            revealObserver.observe(card);
          }
        });
      });
    });
  }

  function initCertificateAnimations() {
    var intro = document.querySelector(".certificate-intro");
    var cards = document.querySelectorAll(".certificate-card");
    var revealClasses = ["reveal-left", "reveal-up", "reveal-right"];

    if (intro) {
      intro.classList.add("reveal-up");
      intro.style.transitionDuration = "1.05s";
    }

    cards.forEach(function (card, index) {
      var hasRevealClass = revealClasses.some(function (className) {
        return card.classList.contains(className);
      });

      if (!hasRevealClass) {
        card.classList.add(revealClasses[index % revealClasses.length]);
      }

      card.style.transitionDelay = (index % 3) * 110 + "ms";
      card.style.transitionDuration = "1.15s";
    });

    var animatedItems = Array.prototype.slice.call(cards);
    if (intro) {
      animatedItems.unshift(intro);
    }

    if (!animatedItems.length) return;

    if (!("IntersectionObserver" in window)) {
      animatedItems.forEach(function (item) {
        item.classList.add("revealed");
      });
      return;
    }

    var certificateObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: "0px 0px -40px 0px",
      threshold: 0.12
    });

    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () {
        animatedItems.forEach(function (item) {
          if (!item.classList.contains("revealed")) {
            certificateObserver.observe(item);
          }
        });
      });
    });
  }

  function initContactAnimations() {
    var animatedItems = [];
    var motionTiming = "cubic-bezier(0.165, 0.84, 0.44, 1)";
    var pairs = [
      [document.querySelector(".contact-hero .product-page-hero-content"), "reveal-left", 0],
      [document.querySelector(".contact-form-col"), "reveal-left", 80],
      [document.querySelector(".contact-info-col"), "reveal-right", 160],
      [document.querySelector(".contact-map-card .contact-map-head"), "reveal-left", 0],
      [document.querySelector(".contact-map-card .contact-map-frame"), "reveal-right", 140]
    ];

    pairs.forEach(function (item) {
      var element = item[0];
      if (!element) return;

      element.classList.add(item[1]);
      element.style.transitionDelay = item[2] + "ms";
      element.style.transitionDuration = "1.15s";
      element.style.transitionProperty = "opacity, transform, background, border-color, box-shadow";
      element.style.transitionTimingFunction = motionTiming;
      animatedItems.push(element);
    });

    document.querySelectorAll(".contact-main-form label").forEach(function (label, index) {
      label.classList.add("reveal-up");
      label.style.transitionDelay = 220 + (index % 7) * 65 + "ms";
      label.style.transitionDuration = "0.95s";
      label.style.transitionProperty = "opacity, transform";
      label.style.transitionTimingFunction = motionTiming;
      animatedItems.push(label);
    });

    document.querySelectorAll(".contact-info-block").forEach(function (block, index) {
      block.classList.add(index % 2 === 0 ? "reveal-right" : "reveal-left");
      block.style.transitionDelay = 260 + (index % 5) * 75 + "ms";
      block.style.transitionDuration = "1s";
      block.style.transitionProperty = "opacity, transform, background, border-color, box-shadow";
      block.style.transitionTimingFunction = motionTiming;
      animatedItems.push(block);
    });

    document.querySelectorAll(".contact-map-details div, .contact-social-links a, .contact-maps-link").forEach(function (item, index) {
      item.classList.add("reveal-up");
      item.style.transitionDelay = 180 + (index % 5) * 70 + "ms";
      item.style.transitionDuration = "0.9s";
      item.style.transitionProperty = "opacity, transform, background, border-color, box-shadow";
      item.style.transitionTimingFunction = motionTiming;
      animatedItems.push(item);
    });

    if (!animatedItems.length) return;

    if (!("IntersectionObserver" in window)) {
      animatedItems.forEach(function (item) {
        item.classList.add("revealed");
      });
      return;
    }

    var contactObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: "0px 0px -35px 0px",
      threshold: 0.08
    });

    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () {
        animatedItems.forEach(function (item) {
          if (!item.classList.contains("revealed")) {
            contactObserver.observe(item);
          }
        });
      });
    });
  }

  function initAboutPageAnimations() {
    if (!document.body.classList.contains("about-page-body")) return;

    var animatedItems = [];
    var motionTiming = "cubic-bezier(0.165, 0.84, 0.44, 1)";
    var pairs = [
      [document.querySelector(".about-intro-copy"), "reveal-left", 0],
      [document.querySelector(".about-company-card"), "reveal-right", 120],
      [document.querySelector(".about-leadership-card"), "reveal-up", 80],
      [document.querySelector(".about-manager-card"), "reveal-up", 120],
      [document.querySelector(".about-mv-header"), "reveal-up", 0],
      [document.querySelector(".about-global-copy"), "reveal-left", 0],
      [document.querySelector(".about-global-map"), "reveal-right", 140]
    ];

    pairs.forEach(function (item) {
      var element = item[0];
      if (!element) return;

      element.classList.add(item[1]);
      element.style.transitionDelay = item[2] + "ms";
      element.style.transitionDuration = "1.05s";
      element.style.transitionProperty = "opacity, transform, background, border-color, box-shadow";
      element.style.transitionTimingFunction = motionTiming;
      animatedItems.push(element);
    });

    document.querySelectorAll(".about-value-card").forEach(function (card, index) {
      card.classList.add("reveal-up");
      card.style.transitionDelay = 80 + (index % 6) * 75 + "ms";
      card.style.transitionDuration = "0.95s";
      card.style.transitionProperty = "opacity, transform, background, border-color, box-shadow";
      card.style.transitionTimingFunction = motionTiming;
      animatedItems.push(card);
    });

    document.querySelectorAll(".about-mv-card").forEach(function (card, index) {
      card.classList.add(index % 2 === 0 ? "reveal-left" : "reveal-right");
      card.style.transitionDelay = 100 + index * 120 + "ms";
      card.style.transitionDuration = "1.05s";
      card.style.transitionProperty = "opacity, transform, background, border-color, box-shadow";
      card.style.transitionTimingFunction = motionTiming;
      animatedItems.push(card);
    });

    document.querySelectorAll(".about-global-stat").forEach(function (stat, index) {
      stat.classList.add("reveal-up");
      stat.style.transitionDelay = 120 + (index % 4) * 80 + "ms";
      stat.style.transitionDuration = "0.9s";
      stat.style.transitionProperty = "opacity, transform, background, border-color, box-shadow";
      stat.style.transitionTimingFunction = motionTiming;
      animatedItems.push(stat);
    });

    if (!animatedItems.length) return;

    if (!("IntersectionObserver" in window)) {
      animatedItems.forEach(function (item) {
        item.classList.add("revealed");
      });
      return;
    }

    var aboutObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: "0px 0px -45px 0px",
      threshold: 0.08
    });

    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () {
        animatedItems.forEach(function (item) {
          if (!item.classList.contains("revealed")) {
            aboutObserver.observe(item);
          }
        });
      });
    });
  }

  function initContactProductPrefill() {
    var params = new URLSearchParams(window.location.search);
    var productName = params.get("product");
    if (!productName) return;

    var productField = document.querySelector('input[name="product"]');
    if (productField) {
      productField.value = productName;
    }

    var messageField = document.querySelector('#contactPageForm textarea[name="message"]');
    if (messageField && !messageField.value.trim()) {
      messageField.value = "I am interested in " + productName + ". Please share product details, pricing, packaging options, minimum order quantity, and export delivery information.";
    }

    var modalProductField = document.querySelector('[name="service"]');
    if (modalProductField) {
      var matchingOption = Array.prototype.find.call(modalProductField.options, function (option) {
        return option.value.toLowerCase() === productName.toLowerCase();
      });

      if (matchingOption) {
        modalProductField.value = matchingOption.value;
      }
    }

    var modalMessageField = document.querySelector('#quoteModalForm textarea[name="message"]');
    if (modalMessageField && !modalMessageField.value.trim()) {
      modalMessageField.value = "I am interested in " + productName + ". Please share product details, pricing, packaging options, minimum order quantity, and export delivery information.";
    }
  }

  function initFloatingWhatsApp() {
    if (document.querySelector(".floating-whatsapp")) return;
    document.body.insertAdjacentHTML("beforeend", whatsappMarkup);
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

    initMobileNavigation();
    initCategoryDirectLinks();
    initProductContactLinks();
    initProductCardAnimations();
    initContactAnimations();
    initAboutPageAnimations();
    initContactProductPrefill();
    initFloatingWhatsApp();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
