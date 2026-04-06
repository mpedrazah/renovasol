document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("navToggle");
  const nav = document.getElementById("navMenu");
  if (!btn || !nav) return;

  btn.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
});