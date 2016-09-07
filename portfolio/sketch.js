var img;
var img1;
var option = 1;
var bgcolor = 'blue'
// var gif;


function preload() {
  tecate1 = loadImage("tecate1.png");
  tecate2 = loadImage("tecate2.png");
  tecate3 = loadImage("tecate3.png");
  tecate4 = loadImage("tecate4.png");
  tecate5 = loadImage("tecate5.png");
  tecate6 = loadImage("tecate6.png");
  tecate7 = loadImage("tecate7.png");
  tecate8 = loadImage("tecate8.png");
  ashley = loadImage("ashley.png");
  film1 = loadImage("film1.png");
  film2 = loadImage("film2.png");
  arch9 = loadImage("arch9.png");
  arch8 = loadImage("arch8.png");
  arch7 = loadImage("arch7.png");
  arch6 = loadImage("arch6.png");
  arch5 = loadImage("arch5.png");
  arch4 = loadImage("arch4.png");
  arch3 = loadImage("arch3.png");
  arch2 = loadImage("arch2.png");
  arch1 = loadImage("arch1.png");
  arch = loadImage("arch.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("Andale Mono");
  textSize(10);
}


function draw() {
  background(255);
  if (option == 1) {
    text("abi", 0, 0);
    image(tecate1, 0, 0);
  }
  else if (option == 2) {
    image(tecate2, 0, 0);
  }
  else if (option == 3) {
    image(tecate3, 0, 0);
  }
  else if (option == 4) {
    image(tecate4, 0, 0);
  }
  else if (option == 5) {
    image(tecate5, 0, 0);
  }
  else if (option == 6) {
    image(tecate6, 0, 0);
  }
  else if (option == 7) {
    image(tecate7, 0, 0);
  }
  else if (option == 8) {
    image(tecate8, 0, 0);
  }
  else if (option == 9) {
    image(tecate8, 0, 0);
  }
  else if (option == 10) {
    background(bgcolor);
    fill('red');
    noStroke();
    ellipse(width/2, height/2, 100, 100);
    var d = dist(width/2, height/2, mouseX, mouseY);
    if (d < 50) {
      bgcolor = 'red';{
        fill('blue');
        // text("mexico city", 50, 200);
        text("y aquí mi cabello huele a tacos, gritos, luces, queso, miradas y mezcal", 50, 200);
        text("y siento delirio, delirio, delirio ", 50, 220);
        text("aquí en el lugar donde la arquitectura es poesía y nos jugamos los dioses y hacemos ciudad", 50, 240);
        text("oh caos, cómo te necesitaba", 50, 280);
      }
    } else {
      bgcolor = 'blue';
      }
  }
  else if (option == 11) {
    image(ashley, 0, 0);
  }
  else if (option == 12) {
    image(film1, windowHeight/2);
  }
  else if (option == 13) {
    image(film2, windowHeight/2);
  }
  else if (option == 14) {
    image(arch8, 0, 0);
  }
  else if (option == 15) {
    image(arch7, 0, 0);
  }
  else if (option == 16) {
    image(arch6, 0, 0);
  }
  else if (option == 17) {
    image(arch5, 0, 0);
  }
  else if (option == 18) {
    image(arch4, 0, 0);
  }
  else if (option == 19) {
    image(arch3, 0, 0);
  }
  else if (option == 20) {
    image(arch2, 0, 0);
  }
  else if (option == 21) {
    image(arch, 0, 0);
  }

  text("abi", mouseX, mouseY);
}

function mousePressed() {
  option++;
  if (option > 21) option = 1;
}