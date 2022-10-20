var canvas = document.querySelector('canvas');

canvas.width = 800;
canvas.height = 600;

function Ball(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;

    this.update = function() {
        this.y += 1;
        this.draw();
    };

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
    }
}

var c = canvas.getContext('2d');

setTimeout(function () {
        c.fillRect(300,500,500,100);
    }, 1000);
setTimeout(function () {
        c.fillRect(400,400,400,100);
    }, 2000);
setTimeout(function () {
        c.fillRect(500,300,300,100);
    }, 3000);
setTimeout(function () {
        c.fillRect(600,200,200,100);
    }, 4000);
setTimeout(function () {
    c.fillRect(700,100,100,100);
    }, 5000);
var ball;
setTimeout(function () {
    c.beginPath();
        c.arc(750, 50, 50, 0, Math.PI * 2, false);
        c.fillStyle = 'red';
        c.fill();
        c.closePath();
    }, 6000);
