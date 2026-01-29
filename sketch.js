function setup() {
  createCanvas(800, 500);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0, 0, 225);

  fill(255);
  textSize(32);
  text("Side Quest Week 1", width / 2, height / 2 - 30);

  fill(200);
  textSize(18);
  text("Journey: keep moving forward.", width / 2, height / 2 + 20);

  textSize(14);
  text(
    "If you see this on GitHub Pages, setup worked ✅",
    width / 2,
    height - 40,
  );
}
