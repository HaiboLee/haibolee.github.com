var playState = function (game) {
    let plane;
    let xv;
    this.create = function () {
        game.stage.disableVisibilityChange = true;
        game.add.image(0,0,'bg').scale.setTo(0.5);
        plane = game.add.sprite(game.width/2,game.height-100,'plane');
        plane.angle = -90;
        plane.anchor.setTo(0.5);
        game.physics.arcade.enable(plane);
        //plane.body.gravity.y = 100;
        plane.body.collideWorldBounds = true;
        window.addEventListener('devicemotion', function (e) {
            var acceleration = event.accelerationIncludingGravity;
            var x = Math.floor(acceleration.x);
            var y = Math.floor(acceleration.y);
            xv = x*100;
        })

    }
    this.update = function () {
        plane.body.velocity.x = xv;
    }
}