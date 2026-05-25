document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.querySelectorAll("nav#toc li").forEach(function (el) {
      el.classList.remove("collapsed");
      el.classList.add("expanded");
    });

    document.querySelectorAll("nav#toc [aria-expanded]").forEach(function (el) {
      el.setAttribute("aria-expanded", "true");
    });
  }, 300);
});

alert("TOC script loaded");
console.log("TOC script loaded");