function setup() {
    createCanvas(600, 400);
    background(240, 240, 240);
  
   
    noStroke();
    fill(225, 230, 235);
    rect(0, 0, 600, 250);
  
    fill(200, 210, 220);
    rect(0, 150, 600, 250);
  
    fill(250, 210, 160);
    square(0, 280, 200);
  
    fill(160, 180, 190);
    rect(400, 0, 200, 400);
  
   
    fill(200, 60, 60);
    ellipse(500, 100, 120, 120);
  
    fill(40, 40, 40);
    triangle(300, 300, 380, 400, 220, 400);
  
    noFill();
    stroke(100, 100, 100);
    strokeWeight(3);
    rect(40, 40, 520, 320);
  
    stroke(150, 150, 150);
    strokeWeight(1);
    line(0, 180, 600, 180);
    line(0, 220, 600, 220);
    line(150, 0, 150, 400);
    line(450, 0, 450, 400);
  
    
    fill(60, 160, 190);
    noStroke();
    quad(80, 80, 230, 60, 260, 180, 100, 200);
  
    fill(255, 255, 255);
    stroke(0, 0, 0);
    strokeWeight(2);
    ellipse(450, 300, 70, 70);
  
    stroke(0, 0, 0);
    strokeWeight(10);
    point(560, 360);
    point(40, 360);
  
    noFill();
    stroke(200, 120, 250);
    strokeWeight(4);
    arc(60, 340, 180, 180, PI, TWO_PI);
    arc(540, 60, 180, 180, 0, PI);
  
    fill(120, 190, 120);
    noStroke();
    square(420, 80, 80);
    
    stroke(0, 0, 0);
    strokeWeight(1);
    line(60, 300, 200, 350);
    line(400, 50, 550, 150);
    
    strokeWeight(5);
    point(180, 310);
    point(480, 100);
    
    fill(250, 250, 0);
    noStroke();
    triangle(280, 40, 330, 140, 230, 140);
  
    
    fill(0, 0, 0);
    rect(100, 100, 30, 30);
    
    fill(255, 255, 255);
    ellipse(500, 200, 25, 25);
    
    noFill();
    stroke(255, 0, 0);
    strokeWeight(2);
    rect(20, 20, 40, 40);
    
    fill(10, 100, 180);
    square(540, 20, 30);
  
    stroke(255, 150, 0);
    strokeWeight(6);
    point(300, 200);
    point(300, 240);
  }