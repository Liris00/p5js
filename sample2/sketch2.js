function setup() {
    createCanvas(600, 400); 
    background(220); 
  }
  
  function draw() {
    
    background(220, 240, 255); 
  
    
    fill(255, 220, 180); 
    stroke(0); 
    strokeWeight(2);
    ellipse(300, 220, 220, 260);
  
    fill(0);
    noStroke();
  
    ellipse(230, 130, 100, 120);
    ellipse(260, 110, 90, 110);
  
    ellipse(370, 130, 100, 120);
    ellipse(340, 110, 90, 110);
  
    arc(300, 120, 180, 120, PI, TWO_PI);
    arc(280, 140, 70, 50, PI + QUARTER_PI, TWO_PI - QUARTER_PI);
    arc(320, 140, 70, 50, PI + QUARTER_PI, TWO_PI - QUARTER_PI);
    
    fill(255, 220, 180);
    stroke(0);
    ellipse(180, 220, 30, 60);
    ellipse(420, 220, 30, 60);
  
    strokeWeight(1.5);
    fill(255);
    ellipse(260, 190, 30, 25);
    ellipse(340, 190, 30, 25);
  
    noStroke();
    fill(0);
    ellipse(260, 190, 15, 15);
    ellipse(340, 190, 15, 15);
  
    noFill();
    stroke(0);
    strokeWeight(3);
    ellipse(260, 190, 50, 50);
    ellipse(340, 190, 50, 50);
    line(285, 190, 315, 190);
  
    stroke(0);
    strokeWeight(3);
    line(240, 160, 270, 170);
    line(330, 170, 360, 160);
  
    fill(255, 220, 180);
    noStroke();
    triangle(295, 210, 305, 210, 300, 230);
    
    stroke(0);
    strokeWeight(1);
    line(297, 225, 297, 228);
    line(303, 225, 303, 228);
  
    noFill();
    stroke(0);
    strokeWeight(1.5);
    arc(300, 265, 30, 20, 0, PI);
  
  }
