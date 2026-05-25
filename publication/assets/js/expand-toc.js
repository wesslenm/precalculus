document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.querySelectorAll("nav#toc details").forEach(function (el) {
      el.setAttribute("open", "open");
    });
  }, 100);
});