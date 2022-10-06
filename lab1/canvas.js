function main(bckColor, circleColor) {
    var canvas = document.getElementsByTagName("CANVAS")[0],
      ctx = canvas.getContext("2d");
    canvas.width = 600;
    canvas.height = 800;
    var cW = canvas.width,
      cH = canvas.height;
    
    ctx.fillStyle = bckColor || "#000";
    ctx.fillRect(0, 0, cW, cH);
    ctx.fill();
  
    ctx.beginPath();
    ctx.fillStyle = circleColor || "#FFF";
    ctx.shadowBlur = 5;
    ctx.shadowColor = "#FFF";
    ctx.arc(cW / 2, cH / 2, 50, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.closePath();
  }
  var colorArray = ['green', 'blue']
  var changeColor = setInterval(function() {
  
    let bckColor = colorArray[Math.floor(Math.random() * 7 + 1)];
    let circleColor = colorArray[Math.floor(Math.random() * 7 + 1)];
    main(bckColor, circleColor)
  
  }, 2000)
  window.addEventListener("load", main);