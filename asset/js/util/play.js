var playState = function (game) {
    let plane,weapon,group;
    let xv,yv;
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
            yv = -y*50;
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

        //敌人系统
        group = game.add.group();
        group.enableBody = true;
        group.createMultiple(10, 'e1');
        group.createMultiple(10, 'e2');
        group.setAll('outOfBoundsKill', true);
        group.setAll('checkWorldBounds', true);
        window.setInterval(function () {
            let e = group.getFirstExists(false);
            if (e) {
                e.reset(game.rnd.integerInRange(10, game.width-10), 50);
                //e.life = 5;
                e.body.velocity.y = 100;
            }
        }, 1000);
        game.physics.arcade.enable(group);


        //爆炸效果


    }
    this.update = function () {

        game.physics.arcade.overlap(group,weapon.bullets, function (a,b) {
            a.kill();
            b.kill();
        });

        weapon.fire();
        plane.body.velocity.x = xv;
        plane.body.velocity.y = yv;
    }
}