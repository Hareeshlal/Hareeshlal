document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     MOBILE MENU
  ========================= */
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      nav.classList.toggle("open");
      menuBtn.setAttribute(
        "aria-label",
        nav.classList.contains("open") ? "Close menu" : "Open menu"
      );
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
      });
    });
  }


  /* =========================
     PROFESSIONAL TESTIMONIAL SLIDER
  ========================= */
  const slider = document.querySelector(".testimonial-grid");

  if (slider) {

    const slides = Array.from(
      slider.querySelectorAll(".testimonial")
    );

    if (slides.length > 0) {

      let currentSlide = 0;
      let autoSlide;

      /* Create slider controls */
      const controls = document.createElement("div");
      controls.className = "slider-controls";

      const prevBtn = document.createElement("button");
      prevBtn.className = "slider-btn";
      prevBtn.type = "button";
      prevBtn.innerHTML = "←";
      prevBtn.setAttribute("aria-label", "Previous testimonial");

      const dots = document.createElement("div");
      dots.className = "slider-dots";

      const nextBtn = document.createElement("button");
      nextBtn.className = "slider-btn";
      nextBtn.type = "button";
      nextBtn.innerHTML = "→";
      nextBtn.setAttribute("aria-label", "Next testimonial");

      controls.appendChild(prevBtn);
      controls.appendChild(dots);
      controls.appendChild(nextBtn);

      slider.parentNode.appendChild(controls);


      /* Create dots */
      slides.forEach(function (slide, index) {

        const dot = document.createElement("button");

        dot.className = "slider-dot";
        dot.type = "button";
        dot.setAttribute(
          "aria-label",
          "Go to testimonial " + (index + 1)
        );

        dot.addEventListener("click", function () {
          showSlide(index);
          restartAutoSlide();
        });

        dots.appendChild(dot);
      });


      /* Show slide */
      function showSlide(index) {

        if (index >= slides.length) {
          currentSlide = 0;
        } else if (index < 0) {
          currentSlide = slides.length - 1;
        } else {
          currentSlide = index;
        }

        slides.forEach(function (slide, i) {
          slide.classList.toggle(
            "active",
            i === currentSlide
          );
        });

        const allDots =
          dots.querySelectorAll(".slider-dot");

        allDots.forEach(function (dot, i) {
          dot.classList.toggle(
            "active",
            i === currentSlide
          );
        });
      }


      /* Previous */
      prevBtn.addEventListener("click", function () {
        showSlide(currentSlide - 1);
        restartAutoSlide();
      });


      /* Next */
      nextBtn.addEventListener("click", function () {
        showSlide(currentSlide + 1);
        restartAutoSlide();
      });


      /* Automatic sliding */
      function startAutoSlide() {
        autoSlide = setInterval(function () {
          showSlide(currentSlide + 1);
        }, 5000);
      }


      function restartAutoSlide() {
        clearInterval(autoSlide);
        startAutoSlide();
      }


      /* Pause when mouse is over slider */
      slider.addEventListener("mouseenter", function () {
        clearInterval(autoSlide);
      });

      slider.addEventListener("mouseleave", function () {
        startAutoSlide();
      });


      /* Mobile swipe */
      let touchStartX = 0;
      let touchEndX = 0;

      slider.addEventListener("touchstart", function (e) {
        touchStartX = e.changedTouches[0].screenX;
        clearInterval(autoSlide);
      });

      slider.addEventListener("touchend", function (e) {

        touchEndX = e.changedTouches[0].screenX;

        const difference =
          touchStartX - touchEndX;

        if (Math.abs(difference) > 50) {

          if (difference > 0) {
            showSlide(currentSlide + 1);
          } else {
            showSlide(currentSlide - 1);
          }
        }

        startAutoSlide();
      });


      /* Start */
      showSlide(0);
      startAutoSlide();

    }
  }

});
