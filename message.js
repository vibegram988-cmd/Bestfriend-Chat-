/* ==========================================
BESTFRIENDCHAT
GROUP.JS
MESSAGES PAGE NAVIGATION
========================================== */

/* ==========================================
SECTION 1: PAGE READY
========================================== */

document.addEventListener("DOMContentLoaded", () => {
setupBottomNavigation();
});

/* ==========================================
SECTION 2: BOTTOM NAVIGATION
========================================== */

function setupBottomNavigation() {
const navigationButtons = document.querySelectorAll(".bottom-nav .nav-btn");

navigationButtons.forEach((button) => {
button.addEventListener("click", () => {
const page = button.dataset.nav;

  switch (page) {
    case "home":
      window.location.href = "home.html";
      break;

    case "search":
      window.location.href = "search.html";
      break;

    case "messages":
      window.location.href = "group.html";
      break;

    case "reels":
      window.location.href = "reels.html";
      break;

    case "profile":
      window.location.href = "profile.html";
      break;
  }
});

});
}