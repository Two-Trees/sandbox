function makeBall(xcoord, ycoord, color, velx = 0, vely = 0, fixed = 0) {
    ball = document.createElement("div");
    var r = Math.floor(255*(Math.random()));
    var g = Math.floor(255*(Math.random()));
    var b = Math.floor(255*(Math.random()));        
    var color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    ball.style.backgroundColor = color;
    ball.className = "ball";
    ball.style.height = ball.style.width = size;
    ball.style.top = ycoord;
    ball.style.left = xcoord;
    document.body.appendChild(ball);
    if (!fixed) {
      // only free balls will be updated
      balls.push(ball);
      x.push(xcoord);
      y.push(ycoord);
      velocity_x.push(velx);
      velocity_y.push(vely);
    }
  }
  