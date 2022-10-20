var canvas = document.querySelector('canvas');

canvas.width = 800;
canvas.height = 600;

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
