var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d"); //context

c.fillRect(100, 100, 100, 100); //100px from left and 100px from top of the screen
c.fillStyle = "#aaaaaa";
c.fillRect(200, 200, 100, 100);
c.fillStyle = "#1d2947";
c.fillRect(300, 100, 100, 100);
console.log(canvas);

//Line
c.beginPath();
c.moveTo(50, 50); //decides from where the path will start (starting point)
c.lineTo(250, 100); //to where line will go
c.lineTo(250, 190);
c.strokeStyle = "#fa3e41";
c.stroke(); //fill the outline

//arc / circle
c.beginPath();
c.arc(300, 200, 30, 0, Math.PI * 2, false);
c.stroke();

for (var i = 0; i < 5; i++) {
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  var color = Math.floor(Math.random() * 16777215).toString(16);
  c.beginPath();
  c.arc(x, y, 30, 0, Math.PI * 2, false);
  c.strokeStyle = `#${color}`;
  c.stroke();
}




