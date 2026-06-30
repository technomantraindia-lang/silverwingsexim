document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(
    ".reveal-left, .reveal-right, .reveal-up, .reveal-down"
  );

  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -50px 0px", // Trigger slightly before element reaches viewport bottom
    threshold: 0.1, // Trigger when 10% of the element is visible
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        // Stop observing once revealed to lock state
        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
});
