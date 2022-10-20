var canvas = document.querySelector('canvas');

canvas.width = 800;
canvas.height = 600;

var c = canvas.getContext('2d');

setTimeout(c.fillRect(0,100,100,500), 10000);
setTimeout(c.fillRect(100,200,100,400), 10000);
setTimeout(c.fillRect(200,300,100,300), 10000);
setTimeout(c.fillRect(300,400,100,200), 10000);
setTimeout(c.fillRect(400,500,100,100), 10000);
setTimeout(function() {
    var interval = setInterval(function() {
        amount += 0.01; // change to alter duration
        if (amount > 1) {
            amount = 1;
            clearInterval(interval);
        }
        c.fillRect(500,100,100,100);
    }, 0);

}, 3000);