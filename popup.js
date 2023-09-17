const pacman = "popup_visited7";
let popupClosed = false;

function loadUnityLoaderScript() {
  var script = document.createElement("script");
  script.src = "PacMan-HTML.loader.js";
  script.onload = function () {
    loadAdditionalScript();
  };
  document.body.appendChild(script);
}

function loadAdditionalScript() {
  var script = document.createElement("script");
  script.textContent = `
    var canvas = document.querySelector("#unity-canvas");
    var config = {
      dataUrl: "PacMan-HTML.data.gz",
      frameworkUrl: "PacMan-HTML.framework.js",
      codeUrl: "PacMan-HTML.wasm.gz",
      streamingAssetsUrl: "StreamingAssets",
      companyName: "DefaultCompany",
      productName: "Pac-Man",
      productVersion: "0.1",
    };
    var scaleToFit;
    try {
      scaleToFit = !!JSON.parse("true");
    } catch (e) {
      scaleToFit = true;
    }
    function progressHandler(progress) {
      var percent = progress * 100 + "%";
      canvas.style.background =
        "linear-gradient(to right, white, white " +
        percent +
        ", transparent " +
        percent +
        ", transparent) no-repeat center";
      canvas.style.backgroundSize = "100% 1rem";
    }
    function onResize() {
      var container = canvas.parentElement;
      var w;
      var h;

      if (scaleToFit) {
        w = window.innerWidth;
        h = window.innerHeight;

        var r = 1020 / 1980;

        if (w * r > window.innerHeight) {
          w = Math.min(w, Math.ceil(h / r));
        }
        h = Math.floor(w * r);
      } else {
        w = 1980;
        h = 1920;
      }

      container.style.width = canvas.style.width = w + "px";
      container.style.height = canvas.style.height = h + "px";
      container.style.top = Math.floor((window.innerHeight - h) / 2) + "px";
      container.style.left = Math.floor((window.innerWidth - w) / 2) + "px";
    }
    createUnityInstance(canvas, config, progressHandler).then(function (
      instance
    ) {
      canvas = instance.Module.canvas;
      onResize();
    });
    window.addEventListener("resize", onResize);
    onResize();
  `;
  document.body.appendChild(script);
}

function startTypingAnimation() {
  const title = document.getElementById("popup-title");
  const message = document.getElementById("popup-message");
  const titleText = "INSTRUCTIONS";
  const messageText = [
    "For desktop use W,A,S,D to move.",
    "For mobile use swipe to move.",
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
    loadUnityLoaderScript();
  }, 500);
}

document.getElementById("yesButton").addEventListener("click", function () {
  localStorage.setItem(pacman, "yes");
  closePopup();
});

document.getElementById("noButton").addEventListener("click", function () {
  localStorage.setItem(pacman, "no");
  closePopup();
});

document.getElementById("popup").addEventListener("click", function (event) {
  if (event.target === this) {
    closePopup();
  }
});

function checkLocalStorage() {
  const visited = localStorage.getItem(pacman);
  if (visited !== "no") {
    const popup = document.getElementById("popup");
    const popupContent = document.querySelector(".popup-content");
    popup.style.display = "block";
    popupContent.style.animation =
      "popIn 0.5s ease forwards, fadeIn 0.5s ease forwards";
    startTypingAnimation();
  } else {
    loadUnityLoaderScript();
  }
}

window.addEventListener("load", function () {
  checkLocalStorage();
});
