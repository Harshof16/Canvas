var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

var mouse = {
  x: undefined,
  y: undefined,
};
var maxRadius = 30;

var colorArray = ["#e63946", "#f1faee", "#a8dadc", "#457b9d", "#1d3557"];

window.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  console.log(event);
});

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

function Circle(x, y, dx, dy, radius, minRadius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();

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

    //interactivity
    if (
      mouse.x - this.x < 50 &&
      mouse.x - this.x > -50 &&
      mouse.y - this.y < 50 &&
      mouse.y - this.y > -50
    ) {
      //i.e. distance b/w two
      if (this.radius < maxRadius) {
        this.radius += 1;
      }
    } else if (this.radius > this.minRadius) {
      this.radius -= 1;
    }
  };
}

var circleArray = [];

for (var i = 0; i < 700; i++) {
  var x = Math.random() * innerWidth; //200;
  var y = Math.random() * innerHeight; //100;
  var dx = Math.random() - 0.5;
  var dy = Math.random() - 0.5;
  var radius = Math.random() * 3 + 1;
  circleArray.push(new Circle(x, y, dx, dy, radius));
}

console.log(circleArray);

function animate() {
  requestAnimationFrame(animate); //https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
  c.clearRect(0, 0, innerWidth, innerHeight); //clear canvas each time animate function is being called

  //   circle.draw();
  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].draw();
  }
}

animate();
