// ==========================================
// SECTION 1: NOTIFICATION BACK BUTTON
// ==========================================

const notificationBackButton =
  document.getElementById("notificationBackButton");

if (notificationBackButton) {
  notificationBackButton.addEventListener("click", function () {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = "home.html";
    }
  });
}