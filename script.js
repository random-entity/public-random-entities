const canvas = document.getElementById('canvas_home_torus');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth / 2;
canvas.height = window.innerHeight / 4;

let size = 20;
let posX = canvas.width / 2;
let posY = canvas.height / 2;
let angle = 0;

function drawFlower() {
    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(posX, posY, size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

function animate() {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawFlower();

    posX += 10 * Math.cos(angle);
    posY += 3 * Math.sin(angle);
    angle += 0.1;
    requestAnimationFrame(animate);
}

animate();