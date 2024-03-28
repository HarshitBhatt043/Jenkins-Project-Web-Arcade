const pacman3d="pacman_3d";let popupClosed=!1;function LoaderScript(){var n=document.createElement("script");n.src="PacMan-HTML.loader.js",n.onload=function(){loadAdditionalScript()},document.body.appendChild(n)}function loadAdditionalScript(){var n=document.createElement("script");n.textContent='\n    var canvas = document.querySelector("#unity-canvas");\n    var config = {\n      dataUrl: "PacMan-HTML.data.gz",\n      frameworkUrl: "PacMan-HTML.framework.js",\n      codeUrl: "PacMan-HTML.wasm.gz",\n      streamingAssetsUrl: "StreamingAssets",\n      companyName: "DefaultCompany",\n      productName: "Pac-Man",\n      productVersion: "0.1",\n    };\n    var scaleToFit;\n    try {\n      scaleToFit = !!JSON.parse("true");\n    } catch (e) {\n      scaleToFit = true;\n    }\n    function progressHandler(progress) {\n      var percent = progress * 100 + "%";\n      canvas.style.background =\n        "linear-gradient(to right, white, white " +\n        percent +\n        ", transparent " +\n        percent +\n        ", transparent) no-repeat center";\n      canvas.style.backgroundSize = "100% 1rem";\n    }\n    function onResize() {\n      var container = canvas.parentElement;\n      var w;\n      var h;\n\n      if (scaleToFit) {\n        w = window.innerWidth;\n        h = window.innerHeight;\n\n        var r = 1020 / 1980;\n\n        if (w * r > window.innerHeight) {\n          w = Math.min(w, Math.ceil(h / r));\n        }\n        h = Math.floor(w * r);\n      } else {\n        w = 1980;\n        h = 1920;\n      }\n\n      container.style.width = canvas.style.width = w + "px";\n      container.style.height = canvas.style.height = h + "px";\n      container.style.top = Math.floor((window.innerHeight - h) / 2) + "px";\n      container.style.left = Math.floor((window.innerWidth - w) / 2) + "px";\n    }\n    createUnityInstance(canvas, config, progressHandler).then(function (\n      instance\n    ) {\n      canvas = instance.Module.canvas;\n      onResize();\n    });\n    window.addEventListener("resize", onResize);\n    onResize();\n  ',document.body.appendChild(n)}function startTypingAnimation(){const n=document.getElementById("popup-title"),e=document.getElementById("popup-scrollable-content"),t="WAIT",o=["!!!","!!!Information","For desktop use W,A,S,D to move.","For mobile use swipe to move.","!!!","Do you want to see this announcement again?"];let a=0;typeText(n,t,0,50),setTimeout((function n(){if(a<o.length){const t=document.createElement("div");e.appendChild(t);let c=o[a];/^!!!/.test(c)&&(t.classList.add("popup-content-heading"),c=c.replace(/^!!!/,""));let i=0;!function e(){i<c.length?(t.textContent+=c.charAt(i),i++,setTimeout(e,50)):(a++,setTimeout(n,50))}()}}),50*t.length)}function typeText(n,e,t,o){t<e.length&&(n.textContent+=e.charAt(t),t++,setTimeout((function(){typeText(n,e,t,o)}),o))}function closePopup(){const n=document.getElementById("popup");document.querySelector(".popup-content").style.animation="popOut 0.5s ease forwards, fadeOut 0.5s ease forwards",setTimeout((function(){n.style.display="none",popupClosed=!0,LoaderScript()}),500)}function checkLocalStorage(){if("no"!==localStorage.getItem(pacman3d)){const n=document.getElementById("popup"),e=document.querySelector(".popup-content");n.style.display="block",e.style.animation="popIn 0.5s ease forwards, fadeIn 0.5s ease forwards",startTypingAnimation()}else LoaderScript()}document.getElementById("yesButton").addEventListener("click",(function(){localStorage.setItem(pacman3d,"yes"),closePopup()})),document.getElementById("noButton").addEventListener("click",(function(){localStorage.setItem(pacman3d,"no"),closePopup()})),document.getElementById("popup").addEventListener("click",(function(n){n.target===this&&closePopup()})),window.addEventListener("load",(function(){checkLocalStorage()}));