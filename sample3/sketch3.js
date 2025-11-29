let charX, charY;


let pupilLX, pupilLY;
let pupilRX, pupilRY;


let hairColor; 
let isBlushing = false; 
let blushTimer = 0; 

function setup() {
  createCanvas(600, 400);
  

  charX = width / 2;
  charY = height / 2 + 20;
  
 
  hairColor = color(0);
}

function draw() {
  background(220, 240, 255);

  
  if (keyIsDown(LEFT_ARROW)) {
    charX -= 3;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    charX += 3;
  }
  if (keyIsDown(UP_ARROW)) {
    charY -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    charY += 3;
  }
  
  
  
  charX = constrain(charX, 120, width - 120);
  charY = constrain(charY, 130, height - 150);
  
  
  
  
  fill(255, 220, 180);
  stroke(0);
  strokeWeight(2);
  ellipse(charX, charY, 220, 260);

  
  fill(hairColor);
  noStroke();
  ellipse(charX - 70, charY - 90, 100, 120);
  ellipse(charX - 40, charY - 110, 90, 110);
  ellipse(charX + 70, charY - 90, 100, 120);
  ellipse(charX + 40, charY - 110, 90, 110);
  arc(charX, charY - 100, 180, 120, PI, TWO_PI);
  arc(charX - 20, charY - 80, 70, 50, PI + QUARTER_PI, TWO_PI - QUARTER_PI);
  arc(charX + 20, charY - 80, 70, 50, PI + QUARTER_PI, TWO_PI - QUARTER_PI);
  
  
  fill(255, 220, 180);
  stroke(0);
  ellipse(charX - 120, charY, 30, 60);
  ellipse(charX + 120, charY, 30, 60);

  
  if (isBlushing) {
    fill(255, 0, 0, 80); 
    noStroke();
    ellipse(charX - 60, charY + 10, 40, 25); 
    ellipse(charX + 60, charY + 10, 40, 25); 
    
    blushTimer--; 
    if (blushTimer <= 0) {
      isBlushing = false; 
    }
  }

  
  strokeWeight(1.5);
  fill(255);
  let leftEyeX = charX - 40;
  let rightEyeX = charX + 40;
  let eyeY = charY - 30;
  ellipse(leftEyeX, eyeY, 30, 25);
  ellipse(rightEyeX, eyeY, 30, 25);

  
  pupilLX = map(mouseX, 0, width, leftEyeX - 5, leftEyeX + 5);
  pupilLY = map(mouseY, 0, height, eyeY - 5, eyeY + 5);
  pupilRX = map(mouseX, 0, width, rightEyeX - 5, rightEyeX + 5);
  pupilRY = map(mouseY, 0, height, eyeY - 5, eyeY + 5);

  noStroke();
  fill(0);
  ellipse(pupilLX, pupilLY, 15, 15);
  ellipse(pupilRX, pupilRY, 15, 15);

  
  noFill();
  stroke(0);
  strokeWeight(3);
  ellipse(leftEyeX, eyeY, 50, 50);
  ellipse(rightEyeX, eyeY, 50, 50);
  line(leftEyeX + 25, eyeY, rightEyeX - 25, eyeY);

  
  fill(255, 220, 180);
  noStroke();
  triangle(charX - 5, charY - 10, charX + 5, charY - 10, charX, charY + 10);
  stroke(0);
  strokeWeight(1);
  line(charX - 3, charY + 5, charX - 3, charY + 8);
  line(charX + 3, charY + 5, charX + 3, charY + 8);

  
  if (keyIsDown(32)) { 
    
    stroke(0);
    strokeWeight(3);
    line(leftEyeX - 20, eyeY - 25, leftEyeX + 10, eyeY - 20);
    line(rightEyeX - 10, eyeY - 20, rightEyeX + 20, eyeY - 25);
    
    
    fill(0);
    stroke(0);
    strokeWeight(1.5);
    ellipse(charX, charY + 50, 25, 35);

  } else {
    
    stroke(0);
    strokeWeight(3);
    line(leftEyeX - 20, eyeY - 20, leftEyeX + 10, eyeY - 10);
    line(rightEyeX - 10, eyeY - 10, rightEyeX + 20, eyeY - 20);

   
    noFill();
    stroke(0);
    strokeWeight(1.5);
    arc(charX, charY + 45, 30, 20, 0, PI);
  }
}


function mousePressed() {
  isBlushing = true; 
  blushTimer = 120; 
}


function keyPressed() {
  
  if (key === 's' || key === 'S') {
    saveGif("myCaricature", 9);
  }
  
  
  if (key === '1') {
    hairColor = color(0);
  }
  
  if (key === '2') {
    hairColor = color(139, 69, 19);
  }
  
  if (key === '3') {
    hairColor = color(255, 223, 0);
  }
}