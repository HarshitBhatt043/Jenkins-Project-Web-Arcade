const battle = "popup_visited13";
let popupClosed = false;

function LoaderScript() {
  var script = document.createElement("script");
  script.textContent = `
  var container = document.querySelector("#unity-container");
  var canvas = document.querySelector("#unity-canvas");
  var loadingBar = document.querySelector("#unity-loading-bar");
  var progressBarFull = document.querySelector("#unity-progress-bar-full");
  var fullscreenButton = document.querySelector("#unity-fullscreen-button");
  var warningBanner = document.querySelector("#unity-warning");

  function unityShowBanner(msg, type) {
    function updateBannerVisibility() {
      warningBanner.style.display = warningBanner.children.length
        ? "block"
        : "none";
    }
    var div = document.createElement("div");
    div.innerHTML = msg;
    warningBanner.appendChild(div);
    if (type == "error") div.style = "background: red; padding: 10px;";
    else {
      if (type == "warning")
        div.style = "background: yellow; padding: 10px;";
      setTimeout(function () {
        warningBanner.removeChild(div);
        updateBannerVisibility();
      }, 5000);
    }
    updateBannerVisibility();
  }

  var buildUrl = "Build";
  var loaderUrl = buildUrl + "/battle for the Stone WebGL.loader.js";
  var config = {
    dataUrl: buildUrl + "/battle for the Stone WebGL.data",
    frameworkUrl: buildUrl + "/battle for the Stone WebGL.framework.js",
    codeUrl: buildUrl + "/battle for the Stone WebGL.wasm",
    streamingAssetsUrl: "StreamingAssets",
    companyName: "Lenki387",
    productName: "Battle for the Stone",
    productVersion: "1.0",
    showBanner: unityShowBanner,
  };

  if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {

    var meta = document.createElement("meta");
    meta.name = "viewport";
    meta.content =
      "width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes";
    document.getElementsByTagName("head")[0].appendChild(meta);
    container.className = "unity-mobile";

    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";

    unityShowBanner("WebGL builds are not supported on mobile devices.");
  } else {
  
    canvas.style.width = "960px";
    canvas.style.height = "540px";
  }

  canvas.style.background =
    "url('" + buildUrl + "/battle for the Stone WebGL.jpg') center / cover";
  loadingBar.style.display = "block";

  var script = document.createElement("script");
  script.src = loaderUrl;
  script.onload = () => {
    createUnityInstance(canvas, config, (progress) => {
      progressBarFull.style.width = 100 * progress + "%";
    })
      .then((unityInstance) => {
        loadingBar.style.display = "none";
        fullscreenButton.onclick = () => {
          unityInstance.SetFullscreen(1);
        };
      })
      .catch((message) => {
        alert(message);
      });
  };
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
    LoaderScript();
  }, 500);
}

document.getElementById("yesButton").addEventListener("click", function () {
  localStorage.setItem(battle, "yes");
  closePopup();
});

document.getElementById("noButton").addEventListener("click", function () {
  localStorage.setItem(battle, "no");
  closePopup();
});

document.getElementById("popup").addEventListener("click", function (event) {
  if (event.target === this) {
    closePopup();
  }
});

function checkLocalStorage() {
  const visited = localStorage.getItem(battle);
  if (visited !== "no") {
    const popup = document.getElementById("popup");
    const popupContent = document.querySelector(".popup-content");
    popup.style.display = "block";
    popupContent.style.animation =
      "popIn 0.5s ease forwards, fadeIn 0.5s ease forwards";
    startTypingAnimation();
  } else {
    LoaderScript();
  }
}

window.addEventListener("load", function () {
  checkLocalStorage();
});
