var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var radius = 10;
var dragging = false; 

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.lineWidth = radius * 2;  

window.addEventListener('load', e =>{
  if('serviceWorker' in navigator){
    try {
      navigator.serviceWorker.register('./sw.js');
      console.log('SW registered');
    } catch (error) {
      console.log('SW failed');
    }
  }
});

var putPoint = function(e) {
        if (dragging) {     
        ctx.lineTo(e.clientX, e.clientY);      
        ctx.stroke();                          
        ctx.beginPath();
        ctx.arc(e.clientX, e.clientY, radius, 0, Math.PI * 2);
        //clientX instead of offsetX for better browser compatibility (firefox)
        ctx.fill();
        ctx.beginPath();                       
        ctx.moveTo(e.clientX, e.clientY);      
        }
  }

  var engage = function(e) {     
    dragging = true;
    putPoint(e);      
  }

  var disengage = function() {  
    dragging = false;
    ctx.beginPath();  
  }

  canvas.addEventListener('mousedown', engage);     
  canvas.addEventListener('mousemove', putPoint);  
  canvas.addEventListener('mouseup', disengage);    
