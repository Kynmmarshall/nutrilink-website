const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
const animateTargets = document.querySelectorAll("[data-animate]");
const scrollButtons = document.querySelectorAll("[data-scroll-to]");
const yearTarget = document.getElementById("year");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

animateTargets.forEach(target => observer.observe(target));

navToggle?.addEventListener("click", () => {
  nav?.classList.toggle("is-open");
});

document.addEventListener("click", event => {
  if (event.target.closest(".nav-toggle")) {
    return;
  }
  if (!event.target.closest(".site-nav")) {
    nav?.classList.remove("is-open");
  }
});

scrollButtons.forEach(button => {
  button.addEventListener("click", () => {
    const selector = button.getAttribute("data-scroll-to");
    const target = selector ? document.querySelector(selector) : null;
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}
