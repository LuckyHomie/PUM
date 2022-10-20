var canvas = document.querySelector('canvas');

canvas.width = 800;
canvas.height = 600;

var c = canvas.getContext('2d');

c.fillRect(0,100,100,500);
c.fillRect(100,200,100,400);
c.fillRect(200,300,100,300);
c.fillRect(300,400,100,200);
c.fillRect(400,500,100,100);
