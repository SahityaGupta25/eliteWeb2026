// Placeholder for future JS logic
// Hamburger menu, animations, form handling will be added later

console.log("Elite Aavas website loaded successfully");

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const navItems = navLinks.querySelectorAll("a");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

navItems.forEach(item => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const fadeElements = document.querySelectorAll(".fade-up");

const revealOnScroll = () => {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

AOS.init({
  duration: 900,
  easing: "ease-out-cubic",
  once: true,
});

const lightbox = GLightbox({
  touchNavigation: true,
  loop: true,
});



