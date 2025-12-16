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

