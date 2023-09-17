const color = "popup_visited10";
let popupClosed = false;

function LoaderScript() {
  var additionalScript = document.createElement("script");
  additionalScript.type = "text/javascript";
  additionalScript.textContent = `
  var Module = {
    preRun: [],
    postRun: [],
    print: function () {
      console.log(Array.prototype.slice.call(arguments).join(" "));
    },
    printErr: function () {
      console.warn(Array.prototype.slice.call(arguments).join(" "));
    },
    canvas: document.getElementById("canvas"),
    totalDependencies: 0,
    monitorRunDependencies: function (left) {
      this.totalDependencies = Math.max(this.totalDependencies, left);
    },
  };
  
  window.addEventListener(
    "keydown",
    function (e) {
      if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
      }
    },
    false
  );
  
  function addEvent(elementId, evnt, funct) {
    var element = document.getElementById(elementId);
    if (element.attachEvent) return element.attachEvent("on" + evnt, funct);
    else return element.addEventListener(evnt, funct, false);
  }
  
  function setupCanvasTouchEvents() {
    var canvas = document.getElementById("canvas");
    var el = document.getElementById("canvas");
    function adjustX(x) {
      return (x * canvas.width) / parseInt(getComputedStyle(el).width, 10);
    }
    function adjustY(y) {
      return (y * canvas.height) / parseInt(getComputedStyle(el).height, 10);
    }
  
    el.addEventListener(
      "touchstart",
      function (evt) {
        evt.preventDefault();
        var touches = evt.changedTouches;
        for (var i = 0; i < touches.length; i++) {
          var touch = touches[i];
          _pInput_TouchStart(
            touch.identifier % 10,
            adjustX(touch.clientX),
            adjustY(touch.clientY)
          );
        }
      },
      false
    );
    el.addEventListener(
      "touchend",
      function (evt) {
        evt.preventDefault();
        var touches = evt.changedTouches;
        for (var i = 0; i < touches.length; i++) {
          var touch = touches[i];
          _pInput_TouchEnd(touch.identifier % 10);
        }
      },
      false
    );
    el.addEventListener(
      "touchmove",
      function (evt) {
        evt.preventDefault();
        var touches = evt.changedTouches;
        for (var i = 0; i < touches.length; i++) {
          var touch = touches[i];
          _pInput_TouchMove(
            touch.identifier % 10,
            adjustX(touch.clientX),
            adjustY(touch.clientY)
          );
        }
      },
      false
    );
  }
  
  var progressBar = document.getElementById("progress-bar");
  var interval = setInterval(function () {
    if (Module.dataFileDownloads && Module.dataFileDownloads["game.data"]) {
      var data = Module.dataFileDownloads["game.data"];
      var percent = Math.round((data.loaded * 100) / data.total);
      progressBar.style.width = percent + "%";
      progressBar.innerHTML = percent + "%";
      if (data.loaded >= data.total) {
        document.getElementById("progress").style.display = "none";
        document.getElementById("canvas").className += " visible";
        setupCanvasTouchEvents();
        clearInterval(interval);
      }
    }
  }, 100);
  
  var resizingCallback = function (e) {
    var containerOuter = document.getElementById("canvas-container-outer");
    var container = document.getElementById("canvas-container");
  
    var newHeight = containerOuter.offsetHeight;
    var newWidth = newHeight * 0.75;
    container.style.height = newHeight + "px";
    container.style.width = newWidth + "px";
  };
  
  window.addEventListener("resize", resizingCallback);
  resizingCallback(null);
  `;
  document.body.appendChild(additionalScript);

  var gameScript = document.createElement("script");
  gameScript.type = "text/javascript";
  gameScript.src = "game.js";
  gameScript.async = true;
  document.body.appendChild(gameScript);
}

function startTypingAnimation() {
  const title = document.getElementById("popup-title");
  const message = document.getElementById("popup-message");
  const titleText = "WAIT";
  const messageText = [
    "If u are a mobile user use desktop site mode.",
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
  localStorage.setItem(color, "yes");
  closePopup();
});

document.getElementById("noButton").addEventListener("click", function () {
  localStorage.setItem(color, "no");
  closePopup();
});

document.getElementById("popup").addEventListener("click", function (event) {
  if (event.target === this) {
    closePopup();
  }
});

function checkLocalStorage() {
  const visited = localStorage.getItem(color);
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
