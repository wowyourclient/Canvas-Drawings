var canvas = document.getElementById('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// Rectangle

// c.fillRect(x, y, width, height);

// Line

// c.beginPath();
// c.moveTo(x, y);
// c.lineTo(x, y);
// c.strokeStyle = 'rgba(0, 0, 0, 0.5';
// c.stroke();

// Circle / Arc

// c.beginPath();
// c.arc(x, y, radius, startAngle(0), endAngle(Math.PI * 2), direction(false) );
// c.strokeStyle = 'rgba(0, 0, 0, 0.5';
// c.stroke();

// For loop syntax
for ( var i = 0; i < 500; i++ ) {

    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = 'blue';
    c.stroke();

}