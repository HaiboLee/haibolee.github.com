var playState = function (game) {
    var plane, weapon, group, stats,life,camera,time;
    var xv, yv;
    var score, num = 0;
    var gameover, over = false;
    var boom, boos, boosweapon;
    var hitsound;
    this.create = function () {
        hitsound = game.add.sound('hit');
        /*       stats = new Stats();
         stats.setMode(0); // 0: fps, 1: ms
         stats.domElement.style.position = 'absolute';
         stats.domElement.style.left = '0px';
         stats.domElement.style.top = '0px';
         document.body.appendChild(stats.domElement);*/
        game.add.image(0, 0, 'bg').scale.setTo(0.5);
        life = game.add.image(0,0,'life');
        plane = game.add.sprite(game.width / 2, game.height - 100, 'plane');
        plane.angle = -90;
        plane.setHealth(10);
        plane.anchor.setTo(0.5);
        game.physics.arcade.enable(plane);
        //plane.body.gravity.y = 100;
        plane.body.collideWorldBounds = true;
        if (!game.device.desktop) {
            window.addEventListener('devicemotion', function (e) {
                var acceleration = event.accelerationIncludingGravity;
                var x = Math.floor(acceleration.x);
                var y = Math.floor(acceleration.y);
                xv = x * 100;
                yv = -(y + 4) * 50;
            })
        } else {
            plane.inputEnabled = true;
            plane.input.enableDrag(false);
        }
        //子弹系统
        weapon = game.add.weapon(30, 'chunk');
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
        group.createMultiple(5, 'e1');
        group.createMultiple(5, 'e2');
        group.setAll('outOfBoundsKill', true);
        group.setAll('checkWorldBounds', true);
        time = game.time.events.loop(1000, function () {
            var e = group.getFirstExists(false);
            if (e) {
                e.reset(game.rnd.integerInRange(10, game.width - 10), 50);
                e.body.velocity.y = 100;
            }
        }, this);
        game.physics.arcade.enable(group);

        //计分板
        score = game.add.text(game.width, 0, num);
        score.anchor.setTo(1, 0);

        //gameover点击返回
        game.input.onDown.add(function () {
            if (over) {
                num = 0;
                gameover = null;
                over = false;
                game.state.start('play');
            }
        });
        //爆炸效果
        boom = game.add.group();
        boom.createMultiple(4, 'boom');
        boom.forEach(function (b) {
            b.animations.add('show');
        });

        camera = game.camera;
    }
    this.update = function () {
        chickBoom(group, weapon.bullets, 1);
        chickBoom(boos, weapon.bullets, 2);
        if (boosweapon) {
            chickBoom(boosweapon.bullets, weapon.bullets, 1);
            chickBoom(plane, boosweapon.bullets, 3);
        }
        chickBoom(plane, group, 3);

        if (!over) {
            weapon.fire();
        }
        if (boos && boos.health > 0) {
            boosweapon.fire();
        }
        plane.body.velocity.x = xv;
        plane.body.velocity.y = yv;
    }

    function chickBoom(a, b, flag) {
        game.physics.arcade.overlap(a, b, function (m, n) {
            m.damage(1);
            n.damage(1);
            var e = boom.getFirstExists(false);
            if (e) {
                e.reset(m.x, m.y);
                e.play('show', 60, false, true);
                hitsound.play();
            }
            switch (flag) {
                case 1:
                    num++;
                    break;
                case 2:
                    if (boos.health == 0) {
                        num += 5;
                        camera.shake(0.005, 500, false, Phaser.Camera.SHAKE_BOTH, true);
                        camera.flash('0xff0000', 500, true);
                        time.delay -=100;
                    }
                    break;
                case 3:
                    life.x = -(10-plane.health)*15.8;
                    break;
            }
            if (num % 50 == 0 && (!boos || boos.health == 0)) {
                createBoos(20);
            }
            score.setText(num);
            if (plane.health == 0) {
                gameover = game.add.text(game.width / 2, game.height, 'game over');
                gameover.fill = '#ec008c';
                gameover.fontSize = 50;
                gameover.anchor.setTo(0.5, 0);
                game.add.tween(gameover).to({y: game.height / 2}, 2000, null, true, 100, 0, false);
                over = true;
            }
        })
    }

    function createBoos(health) {
        boos = game.add.sprite(50, 100, 'boos');
        boos.anchor.setTo(0.5);
        boos.scale.setTo(0.5);
        game.physics.arcade.enable(boos);
        boos.angle = 90;
        boos.setHealth(health);
        game.add.tween(boos).to({x: game.width - 50}, 2000, null, true, 0, Number.MAX_VALUE, true);

        boosweapon = game.add.weapon(20, 'e2');
        boosweapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
        boosweapon.bulletSpeed = 200;
        boosweapon.bulletSpeedVariance = 100;
        boosweapon.shots = 10;
        boosweapon.bulletAngleVariance = 30;
        boosweapon.bulletAngleOffset = -90;
        boosweapon.fireRate = 500;
        boosweapon.trackSprite(boos, 0, 0, true);
    }
}

