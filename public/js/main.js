// Mobile nav toggle
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const btn = document.querySelector("#burger");
  if (!header || !btn) return;

  btn.addEventListener("click", () => {
    header.classList.toggle("nav-open");
    const expanded = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", (!expanded).toString());
  });
});