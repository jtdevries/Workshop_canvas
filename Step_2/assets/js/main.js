var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var radius = 10;
var dragging = false; //added

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var putPoint = function(e) {
        if (dragging) {     //wrapped drawing in if dragging statement
        ctx.beginPath();
        ctx.arc(e.clientX, e.clientY, radius, 0, Math.PI * 2);
        //clientX instead of offsetX for better browser compatibility (firefox)
        ctx.fill();
        }
  }

  var engage = function() {     //added engage function
    dragging = true;
  }

  var disengage = function() {  //added disengage function
    dragging = false;
  }

  canvas.addEventListener('mousedown', engage);     //added
  canvas.addEventListener('mousemove', putPoint);   //changed mousedown into mousemove
  canvas.addEventListener('mouseup', disengage);    //added
