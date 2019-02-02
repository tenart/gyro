var x;
var y;
var z;

function degToRad( degrees ) {
    var pi = Math.PI;
    return degrees * (pi/180);
};

window.addEventListener("deviceorientation", function( event ) {
    x = event.beta;
    y = event.gamma;
    z = event.alpha;
});