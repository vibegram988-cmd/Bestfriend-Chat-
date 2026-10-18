/* ==========================================
BESTFRIENDCHAT
SEARCH.JS
Bottom navigation: Home | Search | Messages | Reels | Profile
========================================== */

document.addEventListener("DOMContentLoaded", function () {

  /* ==========================================
  PAGE LINKS
  Kisi page ka naam alag ho to sirf yahan badlo
  ========================================== */

  var PAGES = {
    home: "home.html",
    search: "search.html",
    messages: "message.html",
    reels: "reels.html",
    profile: "profile.html"
  };

  /* Helper: button dhundho (data-nav ya data-page dono chalenge) */
  function findButtons(name) {
    return document.querySelectorAll(
      '[data-nav="' + name + '"], [data-page="' + PAGES[name] + '"]'
    );
  }

  /* Helper: button click par page kholo */
  function bindNav(name) {
    var buttons = findButtons(name);

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        var target = PAGES[name];

        /* Already isi page par ho to kuch mat karo */
        if (window.location.pathname.split("/").pop() === target) return;

        window.location.href = target;
      });
    });
  }


  /* ==========================================
  SECTION 1: HOME BUTTON
  ========================================== */

  bindNav("home");


  /* ==========================================
  SECTION 2: SEARCH BUTTON + SEARCH INPUT
  ========================================== */

  bindNav("search");

  var searchInput = document.getElementById("searchInput");
  var searchResults = document.getElementById("searchResults");

  /* Search input filhaal interface ready karta hai.
     Real users/posts search ke liye database se connect karna hoga. */
  if (searchInput && searchResults) {
    searchInput.addEventListener("input", function () {
      var query = searchInput.value.trim();

      if (!query) {
        searchResults.textContent = "";
        return;
      }

      searchResults.textContent =
        'Searching for "' + query + '" — results will appear after search is connected.';
    });
  }


  /* ==========================================
  SECTION 3: MESSAGES BUTTON
  ========================================== */

  bindNav("messages");


  /* ==========================================
  SECTION 4: REELS BUTTON
  ========================================== */

  bindNav("reels");


  /* ==========================================
  SECTION 5: PROFILE BUTTON
  ========================================== */

  bindNav("profile");

});
