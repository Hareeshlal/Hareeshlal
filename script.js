document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     MOBILE MENU
  ========================= */

  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      nav.classList.toggle("open");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
      });
    });
  }


  /* =========================
     TESTIMONIAL SLIDER
  ========================= */

  const slides =
    document.querySelectorAll(".testimonial-slide");

  const dots =
    document.querySelectorAll(".testimonial-dot");

  const previous =
    document.querySelector(".testimonial-prev");

  const next =
    document.querySelector(".testimonial-next");

  if (!slides.length) {
    return;
  }

  let current = 0;
  let timer;


  function showSlide(index) {

    if (index >= slides.length) {
      index = 0;
    }

    if (index < 0) {
      index = slides.length - 1;
    }

    current = index;


    slides.forEach(function (slide, i) {

      slide.classList.toggle(
        "active",
        i === current
      );

    });


    dots.forEach(function (dot, i) {

      dot.classList.toggle(
        "active",
        i === current
      );

    });

  }


  function nextSlide() {
    showSlide(current + 1);
  }


  function previousSlide() {
    showSlide(current - 1);
  }


  function startAutoSlide() {

    clearInterval(timer);

    timer = setInterval(function () {
      nextSlide();
    }, 5000);

  }


  if (next) {

    next.addEventListener("click", function () {

      nextSlide();
      startAutoSlide();

    });

  }


  if (previous) {

    previous.addEventListener("click", function () {

      previousSlide();
      startAutoSlide();

    });

  }


  dots.forEach(function (dot, index) {

    dot.addEventListener("click", function () {

      showSlide(index);
      startAutoSlide();

    });

  });


  /* Touch swipe */

  let touchStart = 0;

  const slider =
    document.querySelector(".testimonial-slider");

  if (slider) {

    slider.addEventListener("touchstart", function (event) {

      touchStart =
        event.changedTouches[0].screenX;

      clearInterval(timer);

    });


    slider.addEventListener("touchend", function (event) {

      const touchEnd =
        event.changedTouches[0].screenX;

      const difference =
        touchStart - touchEnd;


      if (Math.abs(difference) > 50) {

        if (difference > 0) {
          nextSlide();
        } else {
          previousSlide();
        }

      }

      startAutoSlide();

    });

  }


  /* Start */

  showSlide(0);
  startAutoSlide();

});
// =========================
// CONTACT FORM - WHATSAPP
// =========================

function sendWhatsAppEnquiry(event) {

    event.preventDefault();

    const name =
        document.getElementById("enquiryName").value;

    const email =
        document.getElementById("enquiryEmail").value;

    const phone =
        document.getElementById("enquiryPhone").value;

    const course =
        document.getElementById("enquiryCourse").value;

    const message =
        document.getElementById("enquiryMessage").value;

    const whatsappMessage =
        `Hello Hareesh, I would like to enquire about training.%0A%0A` +
        `Name: ${name}%0A` +
        `Email: ${email}%0A` +
        `Phone: ${phone}%0A` +
        `Course: ${course}%0A` +
        `Requirement: ${message}`;

    window.open(
        `https://wa.me/919544900152?text=${whatsappMessage}`,
        "_blank"
    );
}
const whatsappForm = document.getElementById("whatsappForm");

if (whatsappForm) {

    whatsappForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const course = document.getElementById("course").value;
        const message = document.getElementById("message").value.trim();

        const whatsappNumber = "919544900152";

        const whatsappMessage =
`Hello Hareesh,

I would like to enquire about your training.

Name: ${name}
Email: ${email}
Phone: ${phone}
Training: ${course}

Requirement:
${message}

Thank you.`;

        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(whatsappMessage);

        window.open(whatsappURL, "_blank");

    });
}

