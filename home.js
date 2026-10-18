/* SECTION: 01 CREATE POPUP CONTROLS */

const plusButton = document.querySelector(".plus-icon-box");
const createPopupOverlay =
  document.getElementById("createPopupOverlay");

const createPostBtn = document.getElementById("createPostBtn");
const createReelBtn = document.getElementById("createReelBtn");

if (plusButton && createPopupOverlay) {
  plusButton.addEventListener("click", (event) => {
    event.stopPropagation();
    createPopupOverlay.classList.toggle("active");
  });

  createPopupOverlay.addEventListener("click", (event) => {
    if (
      event.target === createPopupOverlay ||
      event.target.closest(".create-option")
    ) {
      createPopupOverlay.classList.remove("active");
    }
  });
}

if (createPostBtn) {
  createPostBtn.addEventListener("click", () => {
    console.log("Post selected");
    // Yahan baad mein Post page open karenge.
  });
}

if (createReelBtn) {
  createReelBtn.addEventListener("click", () => {
    console.log("Reel selected");
    // Yahan baad mein Reel page open karenge.
  });
}

// ==========================================
// SECTION:02 NOTIFICATION PAGE NAVIGATION
// ==========================================

const notificationButton =
  document.getElementById("notificationButton");

if (notificationButton) {
  notificationButton.addEventListener("click", function () {
    window.location.href = "notification.html";
  });
}

// ==========================================
// SECTION 03: LEFT SLIDE MENU
// ==========================================

const menuButton = document.querySelector(".menu-icon-box");

// Menu HTML create karna
const menuOverlay = document.createElement("div");
menuOverlay.className = "side-menu-overlay";
menuOverlay.id = "sideMenuOverlay";
menuOverlay.innerHTML = `
  <aside class="side-menu-panel" aria-label="Main menu">

    <div class="side-menu-header">
      <span class="side-menu-title">BestfriendChat</span>

      <button class="side-menu-close" id="sideMenuClose"
        type="button" aria-label="Close menu">
        <svg viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2"
          stroke-linecap="round">
          <path d="M6 6l12 12M18 6 6 18"></path>
        </svg>
      </button>
    </div>

    <div class="side-menu-list">

      <button class="side-menu-item" data-menu="profile">
        <svg viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="1.8"
          stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="8" r="4"></circle>
          <path d="M4 21a8 8 0 0 1 16 0"></path>
        </svg>
        <span>Edit Profile</span>
      </button>

      <button class="side-menu-item" data-menu="saved">
        <svg viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="1.8"
          stroke-linejoin="round">
          <path d="M6 3h12v18l-6-4-6 4z"></path>
        </svg>
        <span>Saved Posts</span>
      </button>

      <button class="side-menu-item" data-menu="settings">
        <svg viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="1.8"
          stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.8 3.1-.2-.1a1.7 1.7 0 0 0-1.8.2l-.2.1h-3.6l-.1-.2a1.7 1.7 0 0 0-1.6-1l-.2.1-3.1-1.8.1-.2a1.7 1.7 0 0 0-.2-1.8l-.1-.2v-3.6l.2-.1a1.7 1.7 0 0 0 1-1.6l-.1-.2 1.8-3.1.2.1a1.7 1.7 0 0 0 1.8-.2l.2-.1h3.6l.1.2a1.7 1.7 0 0 0 1.6 1l.2-.1 3.1 1.8-.1.2a1.7 1.7 0 0 0 .2 1.8l.1.2v3.6z"></path>
        </svg>
        <span>Settings</span>
      </button>

      <button class="side-menu-item" data-menu="privacy">
        <svg viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="1.8"
          stroke-linecap="round" stroke-linejoin="round">
          <rect x="4" y="10" width="16" height="11" rx="2"></rect>
          <path d="M8 10V7a4 4 0 0 1 8 0v3"></path>
        </svg>
        <span>Privacy &amp; Security</span>
      </button>

      <button class="side-menu-item" data-menu="notification-settings">
        <svg viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="1.8"
          stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"></path>
          <path d="M10 21h4"></path>
        </svg>
        <span>Notification Settings</span>
      </button>

      <button class="side-menu-item" data-menu="youtube">
        <svg viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="1.8"
          stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="5" width="20" height="14" rx="4"></rect>
          <path d="m10 9 5 3-5 3z"></path>
        </svg>
        <span>YouTube</span>
      </button>

      <button class="side-menu-item" data-menu="music">
        <svg viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="1.8"
          stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 18V5l12-2v13"></path>
          <circle cx="6" cy="18" r="3"></circle>
          <circle cx="18" cy="16" r="3"></circle>
        </svg>
        <span>Music</span>
      </button>

      <button class="side-menu-item" data-menu="help">
        <svg viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="1.8"
          stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M9.5 9a2.6 2.6 0 1 1 4.3 2c-1.2 1-1.8 1.4-1.8 3"></path>
          <path d="M12 17.5h.01"></path>
        </svg>
        <span>Help &amp; Support</span>
      </button>

      <button class="side-menu-item" data-menu="about">
        <svg viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="1.8"
          stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 11v5M12 7h.01"></path>
        </svg>
        <span>About BestfriendChat</span>
      </button>

      <button class="side-menu-item logout-item" data-menu="logout">
        <svg viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="1.8"
          stroke-linecap="round" stroke-linejoin="round">
          <path d="M10 17l5-5-5-5M15 12H3"></path>
          <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7"></path>
        </svg>
        <span>Log Out</span>
      </button>

    </div>
  </aside>
`;

document.body.appendChild(menuOverlay);

const sideMenuClose = document.getElementById("sideMenuClose");

function openSideMenu() {
  menuOverlay.classList.add("active");
  document.body.classList.add("side-menu-open");
}

function closeSideMenu() {
  menuOverlay.classList.remove("active");
  document.body.classList.remove("side-menu-open");
}

if (menuButton) {
  menuButton.addEventListener("click", openSideMenu);
}

if (sideMenuClose) {
  sideMenuClose.addEventListener("click", closeSideMenu);
}

menuOverlay.addEventListener("click", function (event) {
  if (event.target === menuOverlay) {
    closeSideMenu();
  }
});

// Menu option clicks
menuOverlay.querySelectorAll(".side-menu-item").forEach(function (item) {
  item.addEventListener("click", function () {
    const selectedOption = item.dataset.menu;

    closeSideMenu();

    // In options ke pages baad mein connect kar sakte hain.
    if (selectedOption === "youtube") {
      window.open("https://www.youtube.com/", "_blank");
    } else if (selectedOption === "music") {
      window.open("https://music.youtube.com/", "_blank");
    } else {
      console.log("Menu option selected:", selectedOption);
    }
  });
});

// Escape key se menu band
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeSideMenu();
  }
});


/* ==========================================
SECTION: 4 STORY PLUS BUTTON NAVIGATION
========================================== */

const storyPlusButton = document.querySelector(".story-plus-badge");

if (storyPlusButton) {
  storyPlusButton.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();

    window.location.href = "story.html";
  });
}


/* ==========================================
   SECTION 5: POST THREE-DOT OPTIONS
   Hide / Unhide Like, Comment, Share + Delete
========================================== */

let activePostMenu = null;
let activePostCard = null;
let activePostButton = null;

// Popup create karo
const postOptionsPopup = document.createElement("div");
postOptionsPopup.className = "post-options-popup";
postOptionsPopup.id = "postOptionsPopup";
postOptionsPopup.setAttribute("role", "menu");
postOptionsPopup.hidden = true;

document.body.appendChild(postOptionsPopup);

// Har post ke hide status ko alag rakho
const postHideStates = new WeakMap();

function getPostHideState(postCard) {
  if (!postHideStates.has(postCard)) {
    postHideStates.set(postCard, {
      like: false,
      comment: false,
      share: false
    });
  }

  return postHideStates.get(postCard);
}

// Like, Comment aur Share buttons chhupao / dikhao
function applyPostHideState(postCard) {
  const state = getPostHideState(postCard);
  const actionButtons = postCard.querySelectorAll(
    ".post-actions .post-action-btn"
  );

  // Buttons ka order: Like, Comment, Share
  const actionNames = ["like", "comment", "share"];

  actionButtons.forEach(function (button, index) {
    const actionName = actionNames[index];

    if (!actionName) return;

    button.hidden = state[actionName];
  });
}

// Popup ke options banao
function renderPostOptions(postCard) {
  const state = getPostHideState(postCard);

  postOptionsPopup.innerHTML = `
    <button type="button" class="post-options-item"
      data-post-action="like" role="menuitem">
      ${state.like ? "Unhide like" : "Hide like"}
    </button>

    <button type="button" class="post-options-item"
      data-post-action="comment" role="menuitem">
      ${state.comment ? "Unhide comment" : "Hide comment"}
    </button>

    <button type="button" class="post-options-item"
      data-post-action="share" role="menuitem">
      ${state.share ? "Unhide share" : "Hide share"}
    </button>

    <div class="post-options-divider"></div>

    <button type="button"
      class="post-options-item post-delete-option"
      data-post-action="delete" role="menuitem">
      Delete
    </button>
  `;
}

// Popup ko three-dot button ke paas kholo
function openPostOptions(postCard, moreButton) {
  if (activePostCard === postCard && !postOptionsPopup.hidden) {
    closePostOptions();
    return;
  }

  activePostCard = postCard;
  activePostButton = moreButton;

  renderPostOptions(postCard);

  postOptionsPopup.hidden = false;
  postOptionsPopup.style.visibility = "hidden";

  const buttonRect = moreButton.getBoundingClientRect();

  // Position calculate karne ke liye popup ka size lo
  postOptionsPopup.style.top = "0px";
  postOptionsPopup.style.left = "0px";

  const popupRect = postOptionsPopup.getBoundingClientRect();
  const margin = 8;

  let left = buttonRect.right - popupRect.width;
  let top = buttonRect.bottom + 6;

  // Screen ke andar rakho
  left = Math.max(
    margin,
    Math.min(left, window.innerWidth - popupRect.width - margin)
  );

  if (top + popupRect.height > window.innerHeight - margin) {
    top = buttonRect.top - popupRect.height - 6;
  }

  top = Math.max(
    margin,
    Math.min(top, window.innerHeight - popupRect.height - margin)
  );

  postOptionsPopup.style.left = `${left}px`;
  postOptionsPopup.style.top = `${top}px`;
  postOptionsPopup.style.visibility = "visible";
}

function closePostOptions() {
  postOptionsPopup.hidden = true;
  postOptionsPopup.style.visibility = "";

  activePostCard = null;
  activePostButton = null;
}

// Three-dot button tap
document.addEventListener("click", function (event) {
  const moreButton = event.target.closest(".post-more-button");

  if (!moreButton) return;

  const postCard = moreButton.closest(".post-card");

  if (!postCard) return;

  event.preventDefault();
  event.stopPropagation();

  openPostOptions(postCard, moreButton);
});

// Popup option tap
postOptionsPopup.addEventListener("click", function (event) {
  const option = event.target.closest("[data-post-action]");

  if (!option || !activePostCard) return;

  const action = option.dataset.postAction;
  const postCard = activePostCard;

  if (action === "delete") {
    const confirmed = window.confirm(
      "Kya aap is post ko delete karna chahte hain?"
    );

    closePostOptions();

    if (confirmed) {
      postCard.remove();
    }

    return;
  }

  const state = getPostHideState(postCard);

  if (action === "like" || action === "comment" || action === "share") {
    state[action] = !state[action];

    applyPostHideState(postCard);
    renderPostOptions(postCard);
  }
});

// Popup ke bahar tap karne par band
document.addEventListener("click", function (event) {
  if (postOptionsPopup.hidden) return;

  if (
    !postOptionsPopup.contains(event.target) &&
    !event.target.closest(".post-more-button")
  ) {
    closePostOptions();
  }
});

// Escape se popup band
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closePostOptions();
  }
});

// Scroll/resize par popup band, taaki position galat na ho
const postsContainer = document.querySelector(".posts-container");

if (postsContainer) {
  postsContainer.addEventListener("scroll", closePostOptions);
}

window.addEventListener("resize", closePostOptions);


/* ==========================================
   SECTION 6: POST LIKE BUTTON FUNCTIONALITY
========================================== */

document.querySelectorAll(".post-card").forEach(function (postCard) {
  const likeButton = postCard.querySelector("#postLikeButton") ||
    postCard.querySelector(".post-action-btn[aria-label='Like post']");

  const likeCount = likeButton
    ? likeButton.querySelector(".post-count")
    : null;

  if (!likeButton || !likeCount) return;

  let isLiked = false;
  let count = Number(likeCount.textContent) || 0;

  likeButton.addEventListener("click", function () {
    if (!isLiked) {
      count++;
      isLiked = true;
      likeButton.setAttribute("aria-pressed", "true");
      likeButton.style.color = "#FF3B78";

      const heart = likeButton.querySelector("svg");
      if (heart) heart.style.fill = "#FF3B78";
    } else {
      count = Math.max(0, count - 1);
      isLiked = false;
      likeButton.setAttribute("aria-pressed", "false");
      likeButton.style.color = "#FFFFFF";

      const heart = likeButton.querySelector("svg");
      if (heart) heart.style.fill = "none";
    }

    likeCount.textContent = count;
  });
});

/* ==========================================
   SECTION 7: COMMENTS WITH DP, NAME,
   THREE-DOT MENU, EDIT & DELETE
========================================== */

document.querySelectorAll(".post-card").forEach(function (postCard) {
  const commentButton =
    postCard.querySelector("#postCommentButton") ||
    postCard.querySelector(
      '.post-action-btn[aria-label="Comment on post"]'
    );

  const commentCount = commentButton
    ? commentButton.querySelector(".post-count")
    : null;

  if (!commentButton || !commentCount) return;

  // Comment popup
  const commentOverlay = document.createElement("div");
  commentOverlay.className = "post-comment-overlay";

  commentOverlay.innerHTML = `
    <section class="post-comment-box"
      role="dialog"
      aria-modal="true"
      aria-label="Post comments">

      <div class="post-comment-header">
        <strong>Comments</strong>
        <button type="button"
          class="post-comment-close"
          aria-label="Close comments">×</button>
      </div>

      <div class="post-comment-list"></div>

      <form class="post-comment-form">
        <input class="post-comment-input"
          type="text"
          placeholder="Write a comment..."
          maxlength="500"
          aria-label="Write a comment"
          required>

        <button type="submit" class="post-comment-send">
          Send
        </button>
      </form>
    </section>
  `;

  document.body.appendChild(commentOverlay);

  const commentList =
    commentOverlay.querySelector(".post-comment-list");
  const commentForm =
    commentOverlay.querySelector(".post-comment-form");
  const commentInput =
    commentOverlay.querySelector(".post-comment-input");
  const sendButton =
    commentOverlay.querySelector(".post-comment-send");
  const closeButton =
    commentOverlay.querySelector(".post-comment-close");

  const comments = [];
  let editingCommentId = null;

  // Current user details
  const currentCommentUser = {
    id: localStorage.getItem("userId") || "current-user",
    name: localStorage.getItem("userName") || "You",
    dp: localStorage.getItem("profilePhoto") || "app-icon.png"
  };

  function updateCommentCount() {
    commentCount.textContent = comments.length;
  }

  function cancelEditing() {
    editingCommentId = null;
    commentInput.value = "";
    commentInput.placeholder = "Write a comment...";
    sendButton.textContent = "Send";
  }

  function closeComments() {
    commentOverlay.classList.remove("active");
    cancelEditing();
    closeAllCommentMenus();
  }

  function closeAllCommentMenus() {
    commentList
      .querySelectorAll(".comment-action-menu")
      .forEach(function (menu) {
        menu.remove();
      });
  }

  function renderComments() {
    commentList.replaceChildren();

    if (comments.length === 0) {
      const empty = document.createElement("p");
      empty.className = "post-comment-empty";
      empty.textContent = "No comments yet. Be the first!";
      commentList.appendChild(empty);
      updateCommentCount();
      return;
    }

    comments.forEach(function (comment) {
      const item = document.createElement("div");
      item.className = "post-comment-item";

      const avatar = document.createElement("img");
      avatar.className = "post-comment-dp";
      avatar.src = comment.dp;
      avatar.alt = "";
      avatar.onerror = function () {
        avatar.onerror = null;
        avatar.src = "app-icon.png";
      };

      const content = document.createElement("div");
      content.className = "post-comment-content";

      const top = document.createElement("div");
      top.className = "post-comment-user-row";

      const name = document.createElement("strong");
      name.className = "post-comment-name";
      name.textContent = comment.name;

      top.appendChild(name);

      // Sirf apne comment par 3-dot menu
      if (comment.userId === currentCommentUser.id) {
        const more = document.createElement("button");
        more.type = "button";
        more.className = "post-comment-more";
        more.setAttribute("aria-label", "Comment options");

        more.innerHTML = `
          <svg viewBox="0 0 24 24"
            width="20" height="20"
            fill="currentColor"
            aria-hidden="true">
            <circle cx="12" cy="5" r="1.8"></circle>
            <circle cx="12" cy="12" r="1.8"></circle>
            <circle cx="12" cy="19" r="1.8"></circle>
          </svg>
        `;

        top.appendChild(more);

        more.addEventListener("click", function (event) {
          event.stopPropagation();
          closeAllCommentMenus();

          const menu = document.createElement("div");
          menu.className = "comment-action-menu";

          const editButton = document.createElement("button");
          editButton.type = "button";
          editButton.textContent = "Edit";

          const deleteButton = document.createElement("button");
          deleteButton.type = "button";
          deleteButton.textContent = "Delete";
          deleteButton.className = "comment-delete-action";

          menu.append(editButton, deleteButton);
          item.appendChild(menu);

          // Edit comment
          editButton.addEventListener("click", function () {
            editingCommentId = comment.id;
            commentInput.value = comment.text;
            commentInput.placeholder = "Edit your comment...";
            sendButton.textContent = "Save";

            menu.remove();
            commentInput.focus();
          });

          // Delete comment
          deleteButton.addEventListener("click", function () {
            const confirmed = window.confirm(
              "Kya aap apna comment delete karna chahte hain?"
            );

            menu.remove();

            if (!confirmed) return;

            const index = comments.findIndex(function (entry) {
              return entry.id === comment.id;
            });

            if (index !== -1) {
              comments.splice(index, 1);
            }

            if (editingCommentId === comment.id) {
              cancelEditing();
            }

            renderComments();
            updateCommentCount();
          });
        });
      }

      const text = document.createElement("p");
      text.className = "post-comment-text";
      text.textContent = comment.text;

      content.append(top, text);
      item.append(avatar, content);
      commentList.appendChild(item);
    });

    updateCommentCount();
  }

  function openComments() {
    commentOverlay.classList.add("active");
    renderComments();
    commentInput.focus();
  }

  commentButton.addEventListener("click", openComments);
  closeButton.addEventListener("click", closeComments);

  commentOverlay.addEventListener("click", function (event) {
    if (event.target === commentOverlay) {
      closeComments();
    }
  });

  // Send new comment OR save edited comment
  commentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const text = commentInput.value.trim();
    if (!text) return;

    if (editingCommentId !== null) {
      const comment = comments.find(function (entry) {
        return entry.id === editingCommentId;
      });

      if (comment && comment.userId === currentCommentUser.id) {
        comment.text = text;
      }

      cancelEditing();
    } else {
      comments.push({
        id: Date.now() + Math.random(),
        userId: currentCommentUser.id,
        name: currentCommentUser.name,
        dp: currentCommentUser.dp,
        text: text
      });

      commentInput.value = "";
    }

    renderComments();
    commentList.scrollTop = commentList.scrollHeight;
    commentInput.focus();
  });

  renderComments();
});

/* ==========================================
SECTION 8: MESSAGES BOTTOM NAVIGATION
========================================== */

document.addEventListener("DOMContentLoaded", () => {
const messagesButton = document.querySelector(
'.nav-btn[data-nav="messages"], #messagesNavButton'
);

if (!messagesButton) return;

messagesButton.addEventListener("click", () => {
window.location.href = "message.html";
});
});