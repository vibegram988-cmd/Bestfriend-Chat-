/* ==========================================
BESTFRIENDCHAT
REEL.JS
SECTION 1: NAVIGATION
SECTION 2: REEL CARDS
SECTION 3: LIKE + COMMENT + SHARE
SECTION 4: COMMENT POPUP + EDIT/DELETE
SECTION 5: PROFILE + MUSIC THUMBNAIL
========================================== */

document.addEventListener("DOMContentLoaded", function () {

  /* SECTION 1: NAVIGATION */

  const reelButtons = document.querySelectorAll(
    '[data-page="reels"], .reel-nav-btn, #reelsBtn, #reelsNavButton'
  );

  reelButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = "reel.html";
    });
  });

  /* SECTION 2: REEL CONTAINER */

  const reelsContainer = document.getElementById("reelsContainer");

  if (!reelsContainer) {
    console.error("reelsContainer nahi mila.");
    return;
  }

  reelsContainer.innerHTML = "";

  /* SECTION 3: COMMENT POPUP */

  const commentOverlay = document.createElement("div");
  commentOverlay.className = "reel-comment-overlay";

  commentOverlay.innerHTML = `
    <section class="reel-comment-box"
      role="dialog" aria-modal="true" aria-label="Reel comments">

      <div class="reel-comment-header">
        <strong>Comments</strong>
        <button type="button" class="reel-comment-close"
          aria-label="Close comments">×</button>
      </div>

      <div class="reel-comment-list"></div>

      <form class="reel-comment-form">
        <input type="text" class="reel-comment-input"
          placeholder="Write a comment..." maxlength="300"
          autocomplete="off" required>
        <button type="submit">Send</button>
      </form>

    </section>
  `;

  document.body.appendChild(commentOverlay);

  const commentList =
    commentOverlay.querySelector(".reel-comment-list");

  const commentForm =
    commentOverlay.querySelector(".reel-comment-form");

  const commentInput =
    commentOverlay.querySelector(".reel-comment-input");

  const closeCommentButton =
    commentOverlay.querySelector(".reel-comment-close");

  const submitButton =
    commentForm.querySelector("button[type='submit']");

  let activeCommentButton = null;
  let comments = [];
  let nextCommentId = 1;
  let editingCommentId = null;

  function updateCommentCount() {
    if (!activeCommentButton) return;

    const countSpan =
      activeCommentButton.querySelector(".reel-comment-count");

    if (countSpan) {
      countSpan.textContent = String(comments.length);
    }
  }

  function getCommentProfile() {
    return {
      name: localStorage.getItem("username") || "User Name",
      id: localStorage.getItem("userId") || "100001",
      dp: localStorage.getItem("profilePhoto") ||
          "./images/default-profile.png"
    };
  }

  /* SECTION 4: RENDER COMMENTS */

  function renderComments() {
    commentList.innerHTML = "";

    if (comments.length === 0) {
      const empty = document.createElement("p");
      empty.className = "reel-no-comments";
      empty.textContent = "No comments yet. Be the first!";
      commentList.appendChild(empty);

      updateCommentCount();
      return;
    }

    comments.forEach(function (item) {
      const row = document.createElement("article");
      row.className = "reel-comment-item";

      const dp = document.createElement("img");
      dp.className = "reel-comment-dp";
      dp.src = item.dp;
      dp.alt = "User profile";

      dp.onerror = function () {
        dp.onerror = null;
        dp.src = "./app-icon.png";
      };

      const body = document.createElement("div");
      body.className = "reel-comment-body";

      const top = document.createElement("div");
      top.className = "reel-comment-top";

      const name = document.createElement("strong");
      name.className = "reel-comment-name";
      name.textContent = item.name;

      const dots = document.createElement("button");
      dots.type = "button";
      dots.className = "reel-comment-dots";
      dots.textContent = "⋮";
      dots.setAttribute("aria-label", "Comment options");

      top.append(name, dots);

      const text = document.createElement("p");
      text.className = "reel-comment-text";
      text.textContent = item.text;

      body.append(top, text);
      row.append(dp, body);
      commentList.appendChild(row);

      /* COMMENT OPTIONS */

      dots.addEventListener("click", function (event) {
        event.stopPropagation();

        commentList.querySelectorAll(".reel-comment-menu")
          .forEach(function (menu) {
            menu.remove();
          });

        const menu = document.createElement("div");
        menu.className = "reel-comment-menu";

        const edit = document.createElement("button");
        edit.type = "button";
        edit.textContent = "Edit";

        const remove = document.createElement("button");
        remove.type = "button";
        remove.textContent = "Delete";
        remove.className = "reel-comment-delete";

        menu.append(edit, remove);
        row.appendChild(menu);

        edit.addEventListener("click", function () {
          editingCommentId = item.id;
          commentInput.value = item.text;
          submitButton.textContent = "Update";

          menu.remove();
          commentInput.focus();
        });

        remove.addEventListener("click", function () {
          comments = comments.filter(function (comment) {
            return comment.id !== item.id;
          });

          if (editingCommentId === item.id) {
            editingCommentId = null;
            commentInput.value = "";
            submitButton.textContent = "Send";
          }

          renderComments();
          updateCommentCount();
        });
      });
    });

    updateCommentCount();
  }

  /* SECTION 5: COMMENT POPUP CONTROLS */

  function adjustCommentPopup() {
    const viewport = window.visualViewport;

    commentOverlay.style.position = "fixed";
    commentOverlay.style.left = "0";
    commentOverlay.style.right = "0";
    commentOverlay.style.zIndex = "999999";

    if (viewport) {
      commentOverlay.style.top = viewport.offsetTop + "px";
      commentOverlay.style.height = viewport.height + "px";
    } else {
      commentOverlay.style.top = "0";
      commentOverlay.style.height = "100%";
    }

    commentOverlay.style.bottom = "auto";
  }

  function openCommentPopup(button) {
    activeCommentButton = button;

    commentOverlay.style.display = "flex";
    commentOverlay.classList.add("active");

    renderComments();
    adjustCommentPopup();

    setTimeout(function () {
      adjustCommentPopup();
      commentInput.focus();

      setTimeout(adjustCommentPopup, 300);
      setTimeout(adjustCommentPopup, 700);
    }, 200);
  }

  function closeCommentPopup() {
    commentOverlay.classList.remove("active");
    commentOverlay.style.display = "none";

    commentInput.value = "";
    commentInput.blur();

    editingCommentId = null;
    submitButton.textContent = "Send";

    activeCommentButton = null;

    commentOverlay.style.top = "0";
    commentOverlay.style.height = "100%";
  }

  closeCommentButton.addEventListener(
    "click",
    closeCommentPopup
  );

  commentOverlay.addEventListener("click", function (event) {
    if (event.target === commentOverlay) {
      closeCommentPopup();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeCommentPopup();
    }
  });

  document.addEventListener("click", function (event) {
    if (
      !event.target.closest(".reel-comment-dots") &&
      !event.target.closest(".reel-comment-menu")
    ) {
      commentList.querySelectorAll(".reel-comment-menu")
        .forEach(function (menu) {
          menu.remove();
        });
    }
  });

  commentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const text = commentInput.value.trim();
    if (!text) return;

    if (editingCommentId !== null) {
      const existing = comments.find(function (item) {
        return item.id === editingCommentId;
      });

      if (existing) {
        existing.text = text;
      }

      editingCommentId = null;
      submitButton.textContent = "Send";

    } else {
      const profile = getCommentProfile();

      comments.push({
        id: nextCommentId++,
        name: profile.name,
        userId: profile.id,
        dp: profile.dp,
        text: text
      });
    }

    commentInput.value = "";

    renderComments();
    updateCommentCount();

    commentList.scrollTop = commentList.scrollHeight;
    commentInput.focus();
  });

  if (window.visualViewport) {
    window.visualViewport.addEventListener(
      "resize",
      adjustCommentPopup
    );

    window.visualViewport.addEventListener(
      "scroll",
      adjustCommentPopup
    );
  }

  /* SECTION 6: REEL PROFILE */

  function createReelInfo(captionText, includeMusicBox) {
    const info = document.createElement("div");
    info.className = "reel-info";

    const userDetails = document.createElement("div");
    userDetails.className = "reel-user-details";

    const profileDP = document.createElement("img");
    profileDP.className = "reel-profile-dp";
    profileDP.src =
      localStorage.getItem("profilePhoto") ||
      "./images/default-profile.png";
    profileDP.alt = "User profile";

    profileDP.onerror = function () {
      profileDP.onerror = null;
      profileDP.src = "./app-icon.png";
    };

    const userText = document.createElement("div");
    userText.className = "reel-user-text";

    const username = document.createElement("div");
    username.className = "reel-username";
    username.textContent = "@" +
      (localStorage.getItem("username") || "username");

    const userId = document.createElement("div");
    userId.className = "reel-user-id";
    userId.textContent = "ID: " +
      (localStorage.getItem("userId") || "100001");

    userText.append(username, userId);
    userDetails.append(profileDP, userText);

    const caption = document.createElement("div");
    caption.className = "reel-caption";
    caption.textContent = captionText;

    const audio = document.createElement("div");
    audio.className = "reel-audio";
    audio.textContent = "♫ Original audio";

    info.append(userDetails, caption);

    if (includeMusicBox) {
      const musicThumbnailBox = document.createElement("div");
      musicThumbnailBox.className = "reel-music-thumbnail";

      const audioRow = document.createElement("div");
      audioRow.className = "reel-audio-row";

      audioRow.append(audio, musicThumbnailBox);
      info.appendChild(audioRow);
    } else {
      info.appendChild(audio);
    }

    return info;
  }

  /* SECTION 7: CREATE ACTION BUTTONS */

  function createActions() {
    const actions = document.createElement("div");
    actions.className = "reel-actions";

    /* LIKE */

    const likeButton = document.createElement("button");
    likeButton.type = "button";
    likeButton.className = "reel-action";
    likeButton.setAttribute("aria-label", "Like");
    likeButton.setAttribute("aria-pressed", "false");

    likeButton.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round">
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/>
      </svg>
      <span>0</span>
    `;

    let isLiked = false;

    likeButton.addEventListener("click", function () {
      isLiked = !isLiked;

      likeButton.querySelector("span").textContent =
        isLiked ? "1" : "0";

      likeButton.classList.toggle("liked", isLiked);
      likeButton.setAttribute("aria-pressed", String(isLiked));
    });

    /* COMMENT */

    const commentButton = document.createElement("button");
    commentButton.type = "button";
    commentButton.className = "reel-action";
    commentButton.setAttribute("aria-label", "Comment");

    commentButton.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8
          8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9
          L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8
          A8.5 8.5 0 0 1 8.7 3.9a8.4 8.4 0 0 1
          3.8-.9h.5a8.5 8.5 0 0 1 8 8z"/>
      </svg>
      <span class="reel-comment-count">0</span>
    `;

    commentButton.addEventListener("click", function () {
      openCommentPopup(commentButton);
    });

    /* SHARE */

    const shareButton = document.createElement("button");
    shareButton.type = "button";
    shareButton.className = "reel-action";
    shareButton.setAttribute("aria-label", "Share");

    shareButton.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 16V3"/>
        <path d="m7 8 5-5 5 5"/>
        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"/>
      </svg>
      <span>Share</span>
    `;

    shareButton.addEventListener("click", async function () {
      try {
        if (navigator.share) {
          await navigator.share({
            title: "BestfriendChat",
            text: "Check out this post!",
            url: window.location.href
          });
        } else if (
          navigator.clipboard &&
          window.isSecureContext
        ) {
          await navigator.clipboard.writeText(
            window.location.href
          );
          alert("Page link copied!");
        } else {
          window.prompt(
            "Link copy karein:",
            window.location.href
          );
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          alert("Share nahi ho paya. Dobara try karein.");
        }
      }
    });

    actions.append(likeButton, commentButton, shareButton);

    return actions;
  }

  /* SECTION 8: CREATE EACH REEL CARD */

  function createReelCard(captionText, includeMusicBox) {
    const card = document.createElement("article");
    card.className = "reel-card";

    const photo = document.createElement("img");
    photo.className = "reel-video";
    photo.src = "./post-media.png";
    photo.alt = "BestfriendChat post";
    photo.loading = "lazy";

    photo.onerror = function () {
      photo.onerror = null;
      photo.style.display = "none";

      const errorMessage = document.createElement("p");
      errorMessage.className = "reel-empty";
      errorMessage.textContent =
        "Photo nahi mili. post-media.png ka filename check karein.";

      card.appendChild(errorMessage);
    };

    const info = createReelInfo(captionText, includeMusicBox);
    const actions = createActions();

    card.append(photo, info, actions);

    return card;
  }

  /* SECTION 9: ADD TWO REELS */

  const firstReel = createReelCard("My post ✨", true);
  const secondReel = createReelCard("My second reel ✨", false);

  reelsContainer.append(firstReel, secondReel);

  updateCommentCount();

  console.log("BestfriendChat: Two reels loaded successfully.");

});