/* ==========================================
   BESTFRIENDCHAT
   STORY.JS
   SECTION 1: BACK BUTTON WORKING
========================================== */

document.addEventListener("DOMContentLoaded", function () {

  const storyBackButton = document.getElementById("storyBackButton");

  if (!storyBackButton) {
    console.error("Story back button nahi mila!");
    return;
  }

  function goBackToPreviousPage() {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = "home.html";
    }
  }

  storyBackButton.addEventListener("click", goBackToPreviousPage);

  storyBackButton.addEventListener("touchend", function (event) {
    event.preventDefault();
    goBackToPreviousPage();
  }, { passive: false });

});