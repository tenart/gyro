var x;
var y;
var z;

function degToRad( degrees ) {
    var pi = Math.PI;
    return degrees * (pi/180);
};

function rotateNeedle(needle, degrees) {
    needle.css("transform: rotate(" + degrees + "deg) translateX(75px);")
}

window.addEventListener("deviceorientation", function( event ) {
    x = event.beta;
    y = event.gamma;
    z = event.alpha;
    
    rotateNeedle($("#ui-needle-x"), x);
    rotateNeedle($("#ui-needle-y"), y);
    rotateNeedle($("#ui-needle-z"), z);
});