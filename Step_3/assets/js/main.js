var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var radius = 10;
var dragging = false; 

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.lineWidth = radius * 2;  //added

var putPoint = function(e) {
        if (dragging) {     
        ctx.lineTo(e.clientX, e.clientY);       //added
        ctx.stroke();                           //added
        ctx.beginPath();
        ctx.arc(e.clientX, e.clientY, radius, 0, Math.PI * 2);
        //clientX instead of offsetX for better browser compatibility (firefox)
        ctx.fill();
        ctx.beginPath();                        //added
        ctx.moveTo(e.clientX, e.clientY);       //added
        }
  }

  var engage = function(e) {     
    dragging = true;
    putPoint(e);        //added to begin a new path
  }

  var disengage = function() {  
    dragging = false;
    ctx.beginPath();   //added to close a path
  }

  canvas.addEventListener('mousedown', engage);     
  canvas.addEventListener('mousemove', putPoint);  
  canvas.addEventListener('mouseup', disengage);    
