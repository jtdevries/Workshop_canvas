var saveButton = document.getElementById('save');

saveButton.addEventListener('click', saveImage);

function saveImage(){
  var data = canvas.toDataURL();
  window.open(data, '_blank', 'location=0, menubar=0');
}
// var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
//   window.location.href = image;  