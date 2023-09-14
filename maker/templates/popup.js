function checkCookie() {
  var visited = getCookie("visited");
  if (visited === "") {
    var popup = document.getElementById("popup");
    var popupContent = document.querySelector(".popup-content");
    popup.style.display = "block";
    popupContent.style.animation =
      "popIn 0.5s ease forwards, fadeIn 0.5s ease forwards";
    startTypingAnimation();
  }
}

function getCookie(name) {
  var cookies = document.cookie.split("; ");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].split("=");
    if (cookie[0] === name) {
      return cookie[1];
    }
  }
  return "";
}

function startTypingAnimation() {
  var title = document.getElementById("popup-title");
  var message = document.getElementById("popup-message");
  var mobileEmoji = "\u{1F4F1}";
  var keyboardEmoji = "\u{2328}";

  var titleText = "Welcome to Arcade!";
  var messageText = [
    "This is your first visit. Enjoy your stay.",
    "Desktop games are denoted by" + "\n" + keyboardEmoji,
    "Mobile games are denoted by" + mobileEmoji,
    "This is an one time announcement for your first visit.",
    "To see this again clear your website local cache.",
  ];

  var typingSpeed = 50;
  var currentIndex = 0;

  function typeNextLine() {
    if (currentIndex < messageText.length) {
      var line = document.createElement("div");
      message.appendChild(line);
      var lineText = messageText[currentIndex];
      var lineIndex = 0;

      function typeNextCharacter() {
        if (lineIndex < lineText.length) {
          line.textContent += lineText.charAt(lineIndex);
          lineIndex++;
          setTimeout(typeNextCharacter, typingSpeed);
        } else {
          currentIndex++;
          setTimeout(typeNextLine, typingSpeed);
        }
      }

      typeNextCharacter();
    }
  }

  typeText(title, titleText, 0, typingSpeed);
  setTimeout(typeNextLine, titleText.length * typingSpeed);
}

function typeText(element, text, index, speed) {
  if (index < text.length) {
    element.textContent += text.charAt(index);
    index++;
    setTimeout(function () {
      typeText(element, text, index, speed);
    }, speed);
  }
}

function closePopup() {
  var popup = document.getElementById("popup");
  var popupContent = document.querySelector(".popup-content");
  popupContent.style.animation =
    "popOut 0.5s ease forwards, fadeOut 0.5s ease forwards";
  setTimeout(function () {
    popup.style.display = "none";
  }, 500);
  var date = new Date();
  date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000);
  var expires = "expires=" + date.toUTCString();
  document.cookie = "visited=true; " + expires + "; path=/";
}

document.getElementById("closePopup").addEventListener("click", closePopup);

document.getElementById("popup").addEventListener("click", function (event) {
  if (event.target === this) {
    closePopup();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closePopup();
  }
});

window.onload = checkCookie;
