const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });
}

/* Feedback auto-slider */

const feedback = document.querySelector(".testimonial-grid");

if (feedback) {
  let autoSlide;

  const startSlider = () => {
    autoSlide = setInterval(() => {
      const card = feedback.querySelector(".testimonial");

      if (!card) return;

      const cardWidth = card.offsetWidth + 25;

      if (
        feedback.scrollLeft + feedback.clientWidth >=
        feedback.scrollWidth - 10
      ) {
        feedback.scrollTo({
          left: 0,
          behavior: "smooth"
        });
      } else {
        feedback.scrollBy({
          left: cardWidth,
          behavior: "smooth"
        });
      }
    }, 4000);
  };

  const stopSlider = () => {
    clearInterval(autoSlide);
  };

  startSlider();

  feedback.addEventListener("mouseenter", stopSlider);
  feedback.addEventListener("mouseleave", startSlider);

  feedback.addEventListener("touchstart", stopSlider);
  feedback.addEventListener("touchend", startSlider);
}
