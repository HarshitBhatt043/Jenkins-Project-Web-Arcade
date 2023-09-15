!(function (a, b, c) {
  function t(a, c) {
    var e = b.createElement("script"),
      f = j;
    (e.onload =
      e.onerror =
      e[o] =
        function () {
          (e[m] && !/^c|loade/.test(e[m])) ||
            f ||
            ((e.onload = e[o] = null), (f = 1), c());
        }),
      (e.async = 1),
      (e.src = a),
      d.insertBefore(e, d.firstChild);
  }
  function q(a, b) {
    p(a, function (a) {
      return !b(a);
    });
  }
  var d = b.getElementsByTagName("head")[0],
    e = {},
    f = {},
    g = {},
    h = {},
    i = "string",
    j = !1,
    k = "push",
    l = "DOMContentLoaded",
    m = "readyState",
    n = "addEventListener",
    o = "onreadystatechange",
    p = function (a, b) {
      for (var c = 0, d = a.length; c < d; ++c) if (!b(a[c])) return j;
      return 1;
    };
  !b[m] &&
    b[n] &&
    (b[n](
      l,
      function r() {
        b.removeEventListener(l, r, j), (b[m] = "complete");
      },
      j
    ),
    (b[m] = "loading"));
  var s = function (a, b, d) {
    function o() {
      if (!--m) {
        (e[l] = 1), j && j();
        for (var a in g) p(a.split("|"), n) && !q(g[a], n) && (g[a] = []);
      }
    }
    function n(a) {
      return a.call ? a() : e[a];
    }
    a = a[k] ? a : [a];
    var i = b && b.call,
      j = i ? b : d,
      l = i ? a.join("") : b,
      m = a.length;
    c(function () {
      q(a, function (a) {
        h[a]
          ? (l && (f[l] = 1), o())
          : ((h[a] = 1),
            l && (f[l] = 1),
            t(s.path ? s.path + a + ".js" : a, o));
      });
    }, 0);
    return s;
  };
  (s.get = t),
    (s.ready = function (a, b, c) {
      a = a[k] ? a : [a];
      var d = [];
      !q(a, function (a) {
        e[a] || d[k](a);
      }) &&
      p(a, function (a) {
        return e[a];
      })
        ? b()
        : !(function (a) {
            (g[a] = g[a] || []), g[a][k](b), c && c(d);
          })(a.join("|"));
      return s;
    });
  var u = a.$script;
  (s.noConflict = function () {
    a.$script = u;
    return this;
  }),
    typeof module != "undefined" && module.exports
      ? (module.exports = s)
      : (a.$script = s);
})(this, document, setTimeout);

const pond = "popup_visited1";

function startTypingAnimation() {
  const title = document.getElementById("popup-title");
  const message = document.getElementById("popup-message");
  const titleText = "INSTRUCTIONS";
  const messageText = [
    "For desktop use mouse click to move.",
    "For mobile use touch to move.",
    "For sound check to top right corner.",
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
  }, 500);
}

document.getElementById("yesButton").addEventListener("click", function () {
  localStorage.setItem(pond, "yes");
  closePopup();
});

document.getElementById("noButton").addEventListener("click", function () {
  localStorage.setItem(pond, "no");
  closePopup();
});

document.getElementById("popup").addEventListener("click", function (event) {
  if (event.target === this) {
    closePopup();
  }
});

function checkLocalStorage() {
  const visited = localStorage.getItem(pond);
  if (visited !== "no") {
    const popup = document.getElementById("popup");
    const popupContent = document.querySelector(".popup-content");
    popup.style.display = "block";
    popupContent.style.animation =
      "popIn 0.5s ease forwards, fadeIn 0.5s ease forwards";
    startTypingAnimation();
  }
}

window.addEventListener("load", function () {
  checkLocalStorage();
});

$script(
  [
    "libs/stats.js",
    "util.js",
    "menu.js",
    "sound.js",
    "levelbar.js",
    "spawner.js",
    "levelballs.js",
    "spawner.js",
    "levelballs.js",
    "fish.js",
    "particle.js",
    "color.js",
  ],
  "modules"
);

$script.ready("modules", function () {
  $script("main.js", function () {
    $script("bindings.js", function () {
      $script("cards.js", function () {
        // done
      });
    });
  });
});
