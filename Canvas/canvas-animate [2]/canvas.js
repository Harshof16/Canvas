var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = "blue";
    c.lineWidth = 2;
    c.stroke();
    c.fill();
    c.fillStyle = "#292929"

    this.update();
  };

  this.update = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      //so that arc doesn't go out of screen
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx; //deciding velocity i.e. x axis changing
    this.y += this.dy;
  };
}

var circleArray = [];

for (var i = 0; i < 100; i++) {
  var x = Math.random() * innerWidth; //200;
  var y = Math.random() * innerHeight; //100;
  var dx = Math.random() - 0.5;
  var dy = Math.random() - 0.5;
  var radius = 30;
  circleArray.push(new Circle(x, y, dx, dy, radius));
}

console.log(circleArray)

function animate() {
  requestAnimationFrame(animate); //https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
  c.clearRect(0, 0, innerWidth, innerHeight); //clear canvas each time animate function is being called

//   circle.draw();
    for(var i = 0; i < circleArray.length; i++) {
        circleArray[i].draw();
    }
}

animate();
