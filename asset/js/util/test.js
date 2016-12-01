//var worker = new Worker("worker.js");
//worker.onmessage = function (eve) {
//    console.log(eve.data);
//}
console.log(window.DeviceOrientationEvent);

$(window).on('deviceorientation', function (e) {
    console.log('ppp')
    var a = e.alpha;
    var b = e.beta;
    var c = e.gamma;
    document.getElementById("test").innerHTML ="a:"+ a + " b:" +b +" c:" +c
});

window.addEventListener('devicemotion', function (e) {
    var acceleration = event.accelerationIncludingGravity;
    var x = acceleration.x;
    var y = acceleration.y;
    console.log(acceleration)
    //document.getElementById("test").innerHTML="55555";
})