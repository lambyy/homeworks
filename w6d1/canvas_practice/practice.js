document.addEventListener("DOMContentLoaded", function(){
  const canvas = document.getElementById("mycanvas");
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = "purple";
  ctx.fillRect(75, 75, 50, 50);

  ctx.beginPath();
  ctx.arc(100, 100, 25, 0, 2 * Math.PI);
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = "teal";
  ctx.fill();
});
