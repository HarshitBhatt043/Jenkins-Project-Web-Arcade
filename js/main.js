if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").then(function () {
    console.log("SW REGISTERED");
  });
}

//preventi scrolling on mobile devices

var windowHeight = window.innerHeight;
var wrapper = document.getElementById("wrapper");

var a = setInterval(function () {
  document.scrollTop = -1;
  resize();
}, 500);
var resize = function () {
  onWindowResize();
  if (window.innerHeight !== windowHeight) {
    windowHeight = window.innerHeight;
    wrapper.style.height = windowHeight;
  }
};

var camera, scene, renderer, mouse, controls, drawCount;
var gradientLength, gradientOffset, gradientOffset2;
var line, linesGroup, lastPointZ;
var parent = document.getElementById("wrapper");
var parentInfo = parent.getBoundingClientRect();
var startDrawing = document.getElementById("start-drawing");
var d = 0;
var speed = 0.05;
var deleteQueue = [];
var MAX_POINTS = 500;
var dragging = false;
var fibonacci = [5, 8, 13, 21, 34, 55, 89];
var colorChangeSpeed = 3;
var offset = -40;
var views = {
  inside: { z: offset },
  outside: { z: -offset / 4 },
  isometric: { y: -offset / 2, x: offset / 2 },
  axial: { x: 0, y: 0 },
};

// HTML VIEW OPTIONS BUTTONS
const inside = document.getElementById("inside");
const outside = document.getElementById("outside");
const isometric = document.getElementById("isometric");
const axial = document.getElementById("axial");
const viewButtons = [inside, outside, isometric, axial];

viewButtons.forEach((button) => {
  button.onclick = function (event) {
    event.preventDefault();
    let target = event.target || event.srcElement;
    if (!target.classList.contains("active")) {
      toggleActiveView(target);
      setView(target.id);
    }
  };
});
// COLOR MODES
const RGB = "rgb";
const BNW = "bnw";
let colorMode = RGB;
const rgb = document.getElementById("rgb");
const bnw = document.getElementById("bnw");
const colorButtons = [rgb, bnw];
colorButtons.forEach((button) => {
  button.onclick = function (event) {
    event.preventDefault();
    let target = event.target || event.srcElement;
    if (!target.classList.contains("active")) {
      toggleActiveView(target);
      colorMode = target.id;
    }
  };
});
const fePointLight = document.querySelector("fePointLight");
const feSpecularLighting = document.querySelector("feSpecularLighting");

function toggleActiveView(t) {
  var elems = t.parentElement.children;
  [].forEach.call(elems, function (el) {
    if (t != el) {
      el.classList.remove("active");
    } else {
      el.classList.add("active");
    }
  });
}
function toggleStartDrawing() {
  if (!linesGroup.children.length) {
    startDrawing.style.visibility = "visible";
  } else {
    startDrawing.style.visibility = "hidden";
  }
}

// THREE.JS CODE

init();

function init() {
  camera = new THREE.PerspectiveCamera(
    110,
    window.innerWidth / window.innerHeight,
    0.001,
    1000
  );
  camera.position.z = offset;
  camera.position.x = 0;
  camera.position.y = 0;

  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x121212, 0.024, 150, 220);

  let ambientLight = new THREE.AmbientLight(0xffffff);
  scene.add(ambientLight);

  linesGroup = new THREE.Group();
  scene.add(linesGroup);

  ///////////////////
  // CONTROLS  //
  ///////////////////
  controls = new THREE.OrbitControls(camera, parent);
  controls.mouseButtons = {
    ORBIT: THREE.MOUSE.RIGHT,
  };
  controls.enableZoom = false;
  controls.update();
  controls.enabled = false;

  ///////////////////
  // EVENT LISTENERS  //
  ///////////////////
  parent.addEventListener("mousemove", handleDraw, false);
  parent.addEventListener("touchmove", handleDraw, false);
  parent.addEventListener("mousedown", function (e) {
    e.preventDefault();
    if (e.which === 1) {
      newGroup();
      dragging = true;
      toggleStartDrawing();
    }
  });
  parent.addEventListener("touchstart", function (e) {
    newGroup();
    dragging = true;
    toggleStartDrawing();
  });

  parent.addEventListener("mouseup", function (e) {
    e.preventDefault();
    deleteQueue.push(lastPointZ);
    dragging = false;
    feSpecularLighting.setAttribute("lighting-color", "rgba(0,0,0)");
  });
  parent.addEventListener("touchend", function (e) {
    deleteQueue.push(lastPointZ);
    console.log(deleteQueue.length);
    dragging = false;
    feSpecularLighting.setAttribute("lighting-color", "rgb(0,0,0)");
  });
  window.addEventListener("resize", onWindowResize, false);
  // window.addEventListener('orientationchange', onWindowResize, false );
  ///////////////////
  // RENDERER  //
  ///////////////////
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setClearColor(scene.fog.color);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.prepend(renderer.domElement);

  mouse = new THREE.Vector2();
  setView("outside");
  animate();
}

function animate() {
  requestAnimationFrame(animate);
  updateBoundingClient();
  deletePassedLines();
  controls.update();
  render();

  d += speed;
  scene.position.z = -d;
}

function render() {
  renderer.render(scene, camera);
}

function deletePassedLines() {
  if (deleteQueue && scene.position.z - offset + deleteQueue[0] <= -110) {
    linesGroup.remove(linesGroup.children[0]);
    deleteQueue.shift();
    toggleStartDrawing();
  }
}

function newGroup() {
  let geometry = new THREE.BufferGeometry();
  // CREATING POSITIONS AND COLORS ARRAY TO MANIPULATE THEIR VALUES LATER ON
  let positions = new Float32Array(MAX_POINTS * 3);
  geometry.addAttribute("position", new THREE.BufferAttribute(positions, 3));
  let colors = new Uint8Array(MAX_POINTS * 3);
  geometry.addAttribute("color", new THREE.BufferAttribute(colors, 3, true));

  // SHOWS ONLY POINTS FROM INDEX 0 UP TO DRAW COUNT (WHICH WILL BE GRADUALLY INCREASED)
  drawCount = 0;
  geometry.setDrawRange(0, drawCount);

  var material = new THREE.LineBasicMaterial({
    color: 0xffffff,
    vertexColors: THREE.VertexColors,
  });

  line = new THREE.Line(geometry, material);
  line.frustumCulled = false;
  // SETS PROPERTIES FOR COLOR MODE ETC
  setProperties();

  // CLONING AND ADDING LINES TO GROUP
  var group = new THREE.Group();
  let angle = getAngle();
  let segments = (2 * Math.PI) / angle;
  let direction = Math.random() < 0.5 ? -1 : 1;
  for (var s = 0; s < segments; s++) {
    let clone = line.clone();

    if (segments <= 21) {
      let config = {
        ease: Elastic.easeOut,
        delay: 0,
        repeat: 0,
      };

      config["z"] = s * angle * direction;
      TweenMax.to(clone.rotation, 0.2 * s, config);
    } else {
      clone.rotation.z = s * angle;
    }
    group.add(clone);
  }
  linesGroup.add(group);
}

function getAngle() {
  return (
    (Math.PI * 2) / fibonacci[Math.floor(Math.random() * fibonacci.length)]
  );
}

function map(value, maxOne, maxTwo) {
  let dir = Math.pow(-1, Math.floor(value / maxTwo));
  let reducedValue = value - Math.floor(value / maxTwo) * maxTwo;
  let finalValue = maxOne * (reducedValue / maxTwo);
  return dir == -1 ? 255 - finalValue : finalValue;
}

function setPosition(x, y, z, index) {
  var positionsArr = line.geometry.attributes.position.array;
  positionsArr[index] = x;
  positionsArr[index + 1] = y;
  positionsArr[index + 2] = z;
}

function setProperties() {
  gradientLength = MAX_POINTS / colorChangeSpeed;
  gradientOffset = Math.floor(Math.random() * MAX_POINTS);
  gradientOffset2 = Math.floor(Math.random() * MAX_POINTS);
}

function setColor(index) {
  const isBNW = colorMode == BNW;
  var colorsArr = line.geometry.attributes.color.array;
  colorsArr[index] = isBNW
    ? 255
    : map(index + gradientOffset, 255, gradientLength);
  colorsArr[index + 1] = isBNW ? 255 : 255 - colorsArr[index];
  // MAP FUNCTION MAKES SMOOTH TRANSITION FROM ONE COLOR TO THE OTHER
  colorsArr[index + 2] = isBNW
    ? 255
    : map(index + gradientOffset2, 255, gradientLength * 4);

  const rgb = `rgb(${[
    colorsArr[index],
    colorsArr[index + 1],
    colorsArr[index + 2],
  ]})`;
  feSpecularLighting.setAttribute("lighting-color", rgb);
  //   .map((v) => Math.round(v))
  //   .join(", ")})`;
  // document.body.style.border = `8px solid ${rgb}`;
  document.body.style.setProperty("--color", rgb);
}

function setView(v) {
  let config = {
    ease: Power1.easeOut,
    delay: 0,
    repeat: 0,
  };
  for (var propt in views[v]) {
    if (propt == "z") {
      offset = views[v][propt];
    }
    config[propt] = views[v][propt];
    TweenMax.to(camera.position, 0.6, config);
  }
}

//  HANDLING EVENTS

function handleDraw(event) {
  event.preventDefault();
  let x = event.clientX ? event.clientX : event.touches[0].pageX;
  let y = event.clientY ? event.clientY : event.touches[0].pageY;
  fePointLight.setAttribute("x", x);
  fePointLight.setAttribute("y", y);
  //checking if user is on mouse drag or touchmove
  if (dragging & (event.which == 1) || event.touches) {
    mouse.x = (x / window.innerWidth) * 2 - 1;
    mouse.y = -(y / window.innerHeight) * 2 + 1;

    // DEALING WITH PERSPECTIVE - TRANSLATING MOUSE POS ON SCREEN TO TRUE POINT POSITION ON OFFSET PLANE
    var vector = new THREE.Vector3(mouse.x, mouse.y, 0.5);
    vector.unproject(camera);
    var dir = vector.sub(camera.position).normalize();
    var distance = -camera.position.z / dir.z;
    var pos = camera.position.clone().add(dir.multiplyScalar(distance));

    // SETTING POSITION OF THE NEXT POINT
    lastPointZ = camera.position.z - offset + d;
    setPosition(pos.x, pos.y, lastPointZ, drawCount * 3);
    setColor(drawCount * 3);
    line.geometry.setDrawRange(0, drawCount);
    line.geometry.attributes.position.needsUpdate = true;
    line.geometry.attributes.color.needsUpdate = true;

    // UPDATING DRAW COUNT
    drawCount++;
  } else {
    feSpecularLighting.setAttribute("lighting-color", "rgb(0,0,0)");
  }
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  render();
}

function updateBoundingClient() {
  parentInfo = parent.getBoundingClientRect();
}

if (Boolean(window.chrome)) {
  document.body.classList.add("chrome");
}

document.querySelector("#about-button").addEventListener("click", () => {
  document.body.classList.toggle("about-open");
});

document.querySelector("#about-close").addEventListener("click", () => {
  document.body.classList.toggle("about-open");
});
