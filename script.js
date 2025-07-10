new Typed(".text", {
  strings: [
    "Frontend Developer",
    "UI/UX Designer",
    "Backend Developer",
    "Web Developer",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const navbar = document.getElementById("navbar");

// Menu toggle handlers
menuIcon.onclick = () => toggleNavbar(true);
closeIcon.onclick = () => toggleNavbar(false);

function toggleNavbar(show) {
  navbar.classList.toggle("active", show);
  menuIcon.style.display = show ? "none" : "block";
  closeIcon.style.display = show ? "block" : "none";
}

// Scroll animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) =>
      entry.target.classList.toggle("visible", entry.isIntersecting)
    );
  },
  { threshold: 0.3 }
);

document
  .querySelectorAll(".animate-on-scroll")
  .forEach((el) => observer.observe(el));

// Handle nav link click
document.querySelectorAll("#navbar a").forEach((link) =>
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    if (window.innerWidth <= 820) {
      menuIcon.style.display = "block";
      closeIcon.style.display = "none";
    }
  })
);

// Handle window load & resize
function updateNavIcons() {
  const isMobile = window.innerWidth <= 820;
  navbar.classList.remove("active");
  menuIcon.style.display = isMobile ? "block" : "none";
  closeIcon.style.display = "none";
}

window.addEventListener("load", updateNavIcons);
window.addEventListener("resize", updateNavIcons);
