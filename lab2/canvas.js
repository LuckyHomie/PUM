var canvas = document.querySelector('canvas');

canvas.width = 800;
canvas.height = 600;

var c = canvas.getContext('2d');

setTimeout(function () {
        c.fillRect(0,100,100,500);
    }, 1000);
setTimeout(function () {
        c.fillRect(100,200,100,400);
    }, 2000);
setTimeout(function () {
        c.fillRect(200,300,100,300);
    }, 3000);
setTimeout(function () {
        c.fillRect(300,400,100,200);
    }, 4000);
setTimeout(function () {
    c.fillRect(400,500,100,100);
}, 5000);
