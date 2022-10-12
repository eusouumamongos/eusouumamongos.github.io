var cols, rows;
var scl = 20;
var w = 1280;
var h = 900;
var zoff = 0;
var inc = 0.125;
var zinc = 0.02;
var start = 0;
var minVal = -100;
var maxVal = 100;
var startInc = 0;

function setup() {
  createCanvas(800, 350, WEBGL);
  cols = w / scl;
  rows = h / scl;
}

function draw() {
  background(0);
  stroke(255);
  noFill();

  rotateX(PI / 3);
  translate(-w / 2, -h / 2);

  let yoff = -start;
  for (let y = 0; y < rows - 1; y++) {
    let xoff = 0;
    beginShape(TRIANGLE_STRIP);
    for (let x = 0; x < cols; x++) {
      vertex(
        x * scl,
        y * scl,
        map(noise(xoff, yoff, zoff), 0, 1, minVal, maxVal)
      );
      vertex(
        x * scl,
        (y + 1) * scl,
        map(noise(xoff, yoff, zoff), 0, 1, minVal, maxVal)
      );
      xoff += inc;
    }
    yoff += inc;
    endShape();
  }
  zoff += zinc;
  start += startInc;
}
