// Navbar shrink saat di-scroll
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("shrink", window.scrollY > 50);
});

// Animasi fade-in saat scroll
const faders = document.querySelectorAll(".fade-section");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

faders.forEach(f => observer.observe(f));

// Tombol scroll ke atas
const scrollToTopBtn = document.createElement("button");
scrollToTopBtn.innerText = "↑";
scrollToTopBtn.classList.add("scroll-top-btn");
document.body.appendChild(scrollToTopBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
