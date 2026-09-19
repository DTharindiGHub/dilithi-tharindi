(function () {
  "use strict";

  /* ------------------------------------------------------------------
     Mobile nav toggle
     ------------------------------------------------------------------ */
  var navToggle = document.getElementById("navToggle");
  var mainNav = document.getElementById("mainNav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = mainNav.classList.toggle("open");
      navToggle.classList.toggle("open", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close the mobile menu after a link is tapped
    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("open");
        navToggle.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ------------------------------------------------------------------
     Reveal-on-load: fade content in once, section by section, as it
     scrolls into view. A single considered entrance, not per-hover fx.
     ------------------------------------------------------------------ */
  var revealTargets = document.querySelectorAll("[data-reveal]");
  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (revealTargets.length && !prefersReducedMotion && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealTargets.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // No IntersectionObserver support, or reduced motion requested:
    // just show everything immediately.
    revealTargets.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* ------------------------------------------------------------------
     Background audio toggle
     ------------------------------------------------------------------ */
  var soundToggle = document.getElementById("soundToggle");
  var bgAudio = document.getElementById("bgAudio");

  if (soundToggle && bgAudio) {
    bgAudio.volume = 0.45;

    soundToggle.addEventListener("click", function () {
      if (bgAudio.paused) {
        bgAudio
          .play()
          .then(function () {
            soundToggle.classList.add("playing");
            soundToggle.setAttribute("aria-pressed", "true");
            soundToggle.setAttribute("aria-label", "Pause background music");
          })
          .catch(function () {
            // Autoplay/decoding was blocked, or assets/epic.m4a hasn't
            // been added yet — disable the control instead of failing silently.
            soundToggle.disabled = true;
            soundToggle.title = "Add assets/epic.m4a to enable background music";
          });
      } else {
        bgAudio.pause();
        soundToggle.classList.remove("playing");
        soundToggle.setAttribute("aria-pressed", "false");
        soundToggle.setAttribute("aria-label", "Play background music");
      }
    });

    bgAudio.addEventListener("error", function () {
      soundToggle.disabled = true;
      soundToggle.title = "Add assets/epic.m4a to enable background music";
    });
  }

  /* ------------------------------------------------------------------
     Footer year
     ------------------------------------------------------------------ */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
