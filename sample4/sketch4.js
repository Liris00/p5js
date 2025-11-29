function setup() {
    createCanvas(600, 400);
    
  }
  
  function draw() {
    background(240, 240, 240);
  
    
    let time = frameCount * 0.05; 
    let pulse = sin(time);        
    let moveX = cos(time) * 20;  
    let moveY = sin(time) * 20;   
  
    
    noStroke();
    fill(225, 230, 235);
    rect(0, 0, 600, 250);
  
    fill(200, 210, 220);
    rect(0, 150, 600, 250);
  
   
    fill(250, 210, 160);
    let boxSize = map(pulse, -1, 1, 180, 220); 
    rectMode(CENTER); 
    square(100, 380, boxSize); 
    rectMode(CORNER); 
  
   
    let col1 = color(160, 180, 190);
    let col2 = color(180, 200, 210);
    let lerpedCol = lerpColor(col1, col2, map(sin(time * 2), -1, 1, 0, 1));
    fill(lerpedCol);
    rect(400, 0, 200, 400);
  
  
   
    
    // 빨간 원 
    fill(200, 60, 60);
    let sunSize = 120 + (pulse * 10); 
    ellipse(500, 100 + (moveY * 0.5), sunSize, sunSize);
  
    // 아래쪽 어두운 삼각형 
   
    let rVal = map(sin(time * 3), -1, 1, 40, 80);
    fill(rVal, 40, 40);
    triangle(300, 300, 380, 400, 220, 400);
  
    // 큰 테두리 사각형 
    noFill();
    stroke(100, 100, 100);
    let sw = map(cos(time * 4), -1, 1, 1, 5); // 두께가 1~5로 변화
    strokeWeight(sw);
    rect(40, 40, 520, 320);
  
    
    stroke(150, 150, 150);
    strokeWeight(1);
    
    line(0, 180 + moveY, 600, 180 + moveY);
    line(0, 220 - moveY, 600, 220 - moveY);
    line(150 + moveX, 0, 150 + moveX, 400);
    line(450, 0, 450, 400);
  
  
   
    
    // 파란색 사변형 
    fill(60, 160, 190);
    noStroke();
    
    quad(80 + moveX, 80, 
         230, 60 + moveY, 
         260, 180, 
         100, 200);
  
    // 하얀 원 
    fill(255, 255, 255);
    stroke(0, 0, 0);
    strokeWeight(2);
    ellipse(450 + (sin(time * 2) * 30), 300, 70, 70);
  
    // 굵은 점들
    stroke(0, 0, 0);
    strokeWeight(10);
    point(560, 360);
    point(40, 360);
  
    // 보라색 호 
    
    noFill();
    stroke(200, 120, 250);
    strokeWeight(4);
    
    // 왼쪽 아래 호 회전
    push();
    translate(60, 340); 
    rotate(time);       // 회전
    arc(0, 0, 180, 180, PI, TWO_PI);
    pop();
  
    // 오른쪽 위 호 회전
    push();
    translate(540, 60); 
    rotate(-time);      // 반대 방향 회전
    arc(0, 0, 180, 180, 0, PI);
    pop();
  
  
    // 초록색 사각형 
    fill(120, 190, 120);
    noStroke();
    push();
    translate(460, 120); 
    rotate(time * 0.5);
    let sqSize = map(sin(time * 5), -1, 1, 60, 80); // 크기 변화
    rectMode(CENTER);
    square(0, 0, sqSize);
    pop();
    
    // 연결 선들
    stroke(0, 0, 0);
    strokeWeight(1);
    line(60, 300, 200, 350);
    line(400, 50, 550, 150);
    
    // 중간 점들
    strokeWeight(5);
    point(180, 310);
    point(480, 100);
    
    // 노란색 삼각형 
    fill(250, 250, 0);
    noStroke();
    push();
    translate(0, sin(time * 3) * 10); 
    triangle(280, 40, 330, 140, 230, 140);
    pop();
  
    
    
    // 검은 사각형 
    fill(0, 0, 0);
    rect(100 + random(-2, 2), 100 + random(-2, 2), 30, 30);
    
    // 하얀 작은 원
    fill(255, 255, 255);
    ellipse(500, 200, 25, 25);
    
    // 빨간 테두리 사각형 (회전)
    noFill();
    stroke(255, 0, 0);
    strokeWeight(2);
    push();
    translate(40, 40); 
    rotate(time * 2);
    rectMode(CENTER);
    rect(0, 0, 40, 40);
    pop();
    
    // 파란 작은 사각형
   
    if (frameCount % 30 < 15) {
      fill(10, 100, 180);
    } else {
      fill(100, 180, 255); 
    }
    noStroke(); 
    square(540, 20, 30);
  
    // 주황색 점들
    stroke(255, 150, 0);
    strokeWeight(6);
    point(300, 200);
    point(300, 240);
  }
  
  
  function keyPressed() {
    if (key === 's' || key === 'S') {
      saveGif('abstract_art_ani', 10); 
    }
  }