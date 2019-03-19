var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var radius = 10;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var putPoint = function(e) {
      ctx.beginPath();
      ctx.arc(e.clientX, e.clientY, radius, 0, Math.PI * 2);
      //clientX instead of offsetX for better browser compatibility (firefox)
      ctx.fill();
  }

  canvas.addEventListener('mousedown', putPoint);