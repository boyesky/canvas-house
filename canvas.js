const canvas = document.querySelector("#canHouse");
const ctx = canvas.getContext("2d");

console.log(ctx);

ctx.beginPath();
ctx.moveTo(20, 70);
ctx.lineTo(110, 20);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(270, 20);
ctx.lineTo(110, 20);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(340, 70);
ctx.lineTo(270, 20);
ctx.stroke();

ctx.fillStyle = "grey";
ctx.fillRect(20, 70, 322, 120);

ctx.fillStyle = "white";
ctx.fillRect(55, 95, 40, 30);

ctx.fillStyle = "white";
ctx.fillRect(270, 95, 40, 30);

ctx.fillStyle = "white";
ctx.fillRect(160, 110, 40, 78);

ctx.font = "20px Arial";
ctx.fillText("Welcome!", 135, 100);

ctx.beginPath();
ctx.fillStyle = "brown";
ctx.arc(193, 150, 3, 0, 2 * Math.PI);
ctx.fill();

let x = 0;
let speed = 2;

function animate() {
  ctx.beginPath();
  ctx.clearRect(345, 0, 110, canvas.height);
  ctx.fillStyle = "grey";
  ctx.arc(420, x, 30, 0, 2 * Math.PI);
  ctx.fill();
  x += speed;
  if (x + 30 >= canvas.height || x <= 0) {
    speed = -speed;
  }

  requestAnimationFrame(animate);
}
animate();

//ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
