document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("testimonial-track");
  const prevBtn = document.getElementById("testimonial-prev");
  const nextBtn = document.getElementById("testimonial-next");
  const dotsContainer = document.getElementById("testimonial-dots");

  if (!track) return;

  const originalCards = Array.from(track.children);
  const N = originalCards.length;
  if (N === 0) return;

  // Number of cloned elements to place at each end
  const cloneCount = 3;

  // Clone elements and append/prepend
  // Prepend last 3 elements in correct order
  for (let i = 0; i < cloneCount; i++) {
    const clone = originalCards[N - 1 - i].cloneNode(true);
    clone.classList.add("cloned");
    track.insertBefore(clone, track.firstChild);
  }
  // Append first 3 elements
  for (let i = 0; i < cloneCount; i++) {
    const clone = originalCards[i].cloneNode(true);
    clone.classList.add("cloned");
    track.appendChild(clone);
  }

  // Update lists after cloning
  const allCards = Array.from(track.children);
  let currentIndex = cloneCount; // Starts at the first original card (index 3)
  let isTransitioning = false;
  let autoplayInterval;

  // Create dot navigation
  for (let i = 0; i < N; i++) {
    const dot = document.createElement("button");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
    dot.addEventListener("click", () => {
      if (isTransitioning) return;
      goToSlide(i + cloneCount);
      resetAutoplay();
    });
    dotsContainer.appendChild(dot);
  }
  const dots = Array.from(dotsContainer.children);

  // Apply positions
  function updatePosition(animate = true) {
    if (!animate) {
      track.style.transition = "none";
    } else {
      track.style.transition = "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    }

    const cardWidth = allCards[0].getBoundingClientRect().width;
    const gap = parseFloat(window.getComputedStyle(track).gap) || 0;
    const offset = currentIndex * (cardWidth + gap);

    track.style.transform = `translateX(-${offset}px)`;

    if (!animate) {
      // Force repaint to make sure transition-less style is applied immediately
      track.offsetHeight;
    }
  }

  function updateDots() {
    const activeIndex = (currentIndex - cloneCount + N) % N;
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === activeIndex);
    });
  }

  function goToSlide(index, animate = true) {
    if (animate) isTransitioning = true;
    currentIndex = index;
    updatePosition(animate);
    updateDots();
  }

  function nextSlide() {
    if (isTransitioning) return;
    goToSlide(currentIndex + 1);
  }

  // Next and Prev click listeners
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide();
      resetAutoplay();
    });
  }
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (isTransitioning) return;
      goToSlide(currentIndex - 1);
      resetAutoplay();
    });
  }

  // Handle transition end for wrapping
  track.addEventListener("transitionend", () => {
    isTransitioning = false;
    
    // If we've scrolled past the original elements
    if (currentIndex >= N + cloneCount) {
      // Jump to the original first element
      goToSlide(cloneCount, false);
    } else if (currentIndex < cloneCount) {
      // Jump to the original last element
      goToSlide(N + currentIndex, false);
    }
  });

  // Autoplay functionality
  function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 4000);
  }

  // Only start autoplay if we aren't dragging
  let isDragging = false;
  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  // Pause on hover
  const sliderContainer = document.querySelector(".testimonial-slider-container");
  if (sliderContainer) {
    sliderContainer.addEventListener("mouseenter", stopAutoplay);
    sliderContainer.addEventListener("mouseleave", () => {
      if (!isDragging) startAutoplay();
    });
  }

  // Touch support for swipe navigation
  let startX = 0;
  let currentX = 0;

  track.addEventListener("touchstart", (e) => {
    if (isTransitioning) return;
    startX = e.touches[0].clientX;
    currentX = startX;
    isDragging = true;
    stopAutoplay();
  }, { passive: true });

  track.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    
    const cardWidth = allCards[0].getBoundingClientRect().width;
    const gap = parseFloat(window.getComputedStyle(track).gap) || 0;
    const currentOffset = currentIndex * (cardWidth + gap);
    
    // Shift track based on user touch drag
    track.style.transition = "none";
    track.style.transform = `translateX(-${currentOffset - diff}px)`;
  }, { passive: true });

  track.addEventListener("touchend", () => {
    if (!isDragging) return;
    isDragging = false;
    const diff = currentX - startX;
    const threshold = 50; // swipe threshold in px

    if (diff < -threshold) {
      nextSlide();
    } else if (diff > threshold) {
      if (!isTransitioning) {
        goToSlide(currentIndex - 1);
      }
    } else {
      goToSlide(currentIndex);
    }
    startAutoplay();
  });

  // Resize handler
  let resizeTimer;
  window.addEventListener("resize", () => {
    goToSlide(currentIndex, false);
    
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      goToSlide(currentIndex, false);
    }, 100);
  });

  // Initial set position after DOM layout stabilizes
  setTimeout(() => {
    goToSlide(cloneCount, false);
    startAutoplay();
  }, 50);
});
