const time = "popup_visited7";
let popupClosed = false;

function loadUnityGame() {
  var gameInstance = UnityLoader.instantiate(
    "unityContainer",
    "Build/Time Sphere.json",
    {
      onProgress: UnityProgress,
    }
  );
}

function startTypingAnimation() {
  const title = document.getElementById("popup-title");
  const message = document.getElementById("popup-message");
  const titleText = "INSTRUCTIONS";
  const messageText = [
    "Desktop users use mouse click to draw and spacebar to drop the ball.",
    "Mobile users use touch to draw and touch on the line below the ball to drop it.",
    "Do you want to see this announcement again?",
  ];

  const typingSpeed = 50;
  let currentIndex = 0;

  function typeNextLine() {
    if (currentIndex < messageText.length) {
      const line = document.createElement("div");
      message.appendChild(line);
      const lineText = messageText[currentIndex];
      let lineIndex = 0;

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
  const popup = document.getElementById("popup");
  const popupContent = document.querySelector(".popup-content");
  popupContent.style.animation =
    "popOut 0.5s ease forwards, fadeOut 0.5s ease forwards";
  setTimeout(function () {
    popup.style.display = "none";
    popupClosed = true;
    loadUnityGame();
  }, 500);
}

document.getElementById("yesButton").addEventListener("click", function () {
  localStorage.setItem(time, "yes");
  closePopup();
});

document.getElementById("noButton").addEventListener("click", function () {
  localStorage.setItem(time, "no");
  closePopup();
});

document.getElementById("popup").addEventListener("click", function (event) {
  if (event.target === this) {
    closePopup();
  }
});

function checkLocalStorage() {
  const visited = localStorage.getItem(time);
  if (visited !== "no") {
    const popup = document.getElementById("popup");
    const popupContent = document.querySelector(".popup-content");
    popup.style.display = "block";
    popupContent.style.animation =
      "popIn 0.5s ease forwards, fadeIn 0.5s ease forwards";
    startTypingAnimation();
  } else {
    loadUnityGame();
  }
}

window.addEventListener("load", function () {
  checkLocalStorage();
});
