let angle = 1;
let w = 1;
let z = 1;
function preload() {
  cacheModel = loadModel("/obj_img/cache.obj");
  cacheText = loadImage("/obj_img/cache-01.jpg");
}

function setup() {
  parent1 = document.getElementById("canvas-container");
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.parent(parent1);
  angleMode(DEGREES);
}

function draw() {
  background(18, 50, 100);

  push();

  ambientLight(255);
  rotateY(frameCount * angle);
  rotateX(90);
  translate(0, 0, 90);
  scale(15.0 * w);
  normalMaterial();
  texture(cacheText);
  model(cacheModel);

  pop();
}

function deviceTurned() {
  //Aumento de velocidad de rotación usando el eje Y (horizontal)
  if (turnAxis === "Y") {
    if (rotationY > 30) {
      angle += 0.2;
    }
    if (rotationY < -30) {
      angle -= 0.2;
    }
  }
  //Aumento de "zoom" usando el eje x (vertical)
  if (turnAxis === "X") {
    if (rotationX > 120) {
      w += 0.1;
    }
    if (rotationX < 60) {
      w -= 0.1;
    }
  }
}

// This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};