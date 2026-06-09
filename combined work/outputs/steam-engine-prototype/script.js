const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const floatingCta = document.querySelector(".floating-cta");
const revealItems = document.querySelectorAll(".reveal");

const updateHeader = () => {
  header.classList.toggle("scrolled", window.scrollY > 12);
  floatingCta.classList.toggle("visible", window.scrollY > window.innerHeight * 0.62);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  header.classList.toggle("nav-active", isOpen);
  document.body.classList.toggle("nav-open", isOpen);
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    header.classList.remove("nav-active");
    document.body.classList.remove("nav-open");
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const filterButtons = document.querySelectorAll("[data-filter]");
const occasionCards = document.querySelectorAll("[data-category]");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    occasionCards.forEach((card) => {
      const shouldShow = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("hidden", !shouldShow);
    });
  });
});

const testimonials = document.querySelectorAll(".testimonial");
const prevTestimonial = document.querySelector("[data-testimonial-prev]");
const nextTestimonial = document.querySelector("[data-testimonial-next]");
let testimonialIndex = 0;

const showTestimonial = (nextIndex) => {
  testimonials[testimonialIndex].classList.remove("active");
  testimonialIndex = (nextIndex + testimonials.length) % testimonials.length;
  testimonials[testimonialIndex].classList.add("active");
};

prevTestimonial.addEventListener("click", () => showTestimonial(testimonialIndex - 1));
nextTestimonial.addEventListener("click", () => showTestimonial(testimonialIndex + 1));

window.setInterval(() => {
  showTestimonial(testimonialIndex + 1);
}, 6200);

const galleryTrack = document.querySelector("[data-gallery-track]");
const galleryToggle = document.querySelector("[data-gallery-toggle]");
let galleryMoving = true;

galleryTrack.classList.add("is-moving");

galleryToggle.addEventListener("click", () => {
  galleryMoving = !galleryMoving;
  galleryTrack.classList.toggle("is-moving", galleryMoving);
  galleryToggle.setAttribute("aria-label", galleryMoving ? "Pause gallery motion" : "Resume gallery motion");
  galleryToggle.innerHTML = galleryMoving ? '<i data-lucide="pause"></i>' : '<i data-lucide="play"></i>';
  if (window.lucide) {
    lucide.createIcons();
  }
});

document.querySelector(".contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("[data-form-note]").textContent =
    "Prototype note: this form is ready for integration with WhatsApp, email, or your backend.";
});

if (window.lucide) {
  lucide.createIcons();
}
