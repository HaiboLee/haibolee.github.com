//var worker = new Worker("worker.js");
//worker.onmessage = function (eve) {
//    console.log(eve.data);
//}

window.addEventListener('deviceorientation', function (e) {
    var a = e.alpha;
    var b = e.beta;
    var c = e.gamma;
    document.getElementById("test").innerHTML ="a:"+ Math.floor(a) + " b:" + Math.floor(b) +" c:" + Math.floor(c)
});

window.addEventListener('devicemotion', function (e) {
    var acceleration = event.accelerationIncludingGravity;
    var x = acceleration.x;
    var y = acceleration.y;
    console.log(acceleration)
    //document.getElementById("test").innerHTML="55555";
})