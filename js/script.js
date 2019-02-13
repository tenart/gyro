$(function() {
    var x;
    var y;
    var z;

    function degToRad( degrees ) {
        var pi = Math.PI;
        return degrees * ( pi/180 );
    };

    function rotateNeedle( needle, degrees ) {
        needle.css( "transform", "rotate(" + degrees + "deg) translateX(75px)" )
    }

    function motion( event ) {
        x = event.beta;
        y = event.gamma;
        z = event.alpha;

        $("#x").text( "X: " + x );
        $("#y").text( "Y: " + y );
        $("#z").text( "Z: " + z );

        rotateNeedle( $("#ui-needle-x"), x );
        rotateNeedle( $("#ui-needle-y"), y );
        rotateNeedle( $("#ui-needle-z"), z );
    }

    window.addEventListener( "deviceorientation", motion );  
})