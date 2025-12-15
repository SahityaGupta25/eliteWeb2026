// Placeholder for future JS logic
// Hamburger menu, animations, form handling will be added later

console.log("Elite Aavas website loaded successfully");

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
