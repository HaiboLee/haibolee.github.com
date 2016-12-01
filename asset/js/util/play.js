var playState = function (game) {
    let plane,weapon;
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

        //子弹系统
        weapon = game.add.weapon(30,'chunk');
        weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
        weapon.bulletSpeed = 300;
        weapon.bulletRotateToVelocity = true;
        weapon.shots = 10;
        weapon.bulletAngleVariance = 3;
        weapon.fireRate = 200;
        weapon.trackSprite(plane, 0, 0, true);

    }
    this.update = function () {
        weapon.fire();
        plane.body.velocity.x = xv;
    }
}