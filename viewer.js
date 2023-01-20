let canvas;
let text1;
let text2;
let angle = 1;

function preload() {
  text1 = loadImage("3D VIEWER.jpg");
}

function setup() {
  parent1 = document.getElementById("canvas-container");
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.parent(parent1);
  angleMode(DEGREES);
 
}

function draw() {
  
  background(62, 66, 160);

  push();

  texture(text1);
  rotateY(frameCount * 1.2);
  rotateX(frameCount * 1.2);
  scale(15);
  box(10);

  pop();
}


windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};