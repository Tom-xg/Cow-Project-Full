// Navbar Scroll On + Scroll Top

let nav = document.querySelector(".navbar");
let scrollBtn = document.querySelector(".scroll-btn a");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 15) {
    nav.classList.add("scroll-on");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("scroll-on");
    scrollBtn.style.display = "none";
  }
};

//Navmenu Hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse ");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});

// Copy Text

(function () {
  "use strict";
  jQuery(document).ready(function () {
    // copy to clipboard
    $(document).ready(function () {
      const tokenText = $("#tokenText").text();
      const copyIcon = $("#copyIcon");

      copyIcon.on("click", function () {
        navigator.clipboard.writeText(tokenText).then(
          function () {
            alert("Copied to clipboard: " + tokenText);
          },
          function (err) {
            console.error("Could not copy text: ", err);
          }
        );
      });
    });
    // copy to clipboard
    $(document).ready(function () {
      const tokenText = $("#tokenTextTwo").text();
      const copyIcon = $("#copyIconTwo");

      copyIcon.on("click", function () {
        navigator.clipboard.writeText(tokenText).then(
          function () {
            alert("Copied to clipboard: " + tokenText);
          },
          function (err) {
            console.error("Could not copy text: ", err);
          }
        );
      });
    });
  });
})();
