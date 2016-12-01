var playState = function (game) {
    let plane,weapon,group,stats;
    let xv,yv;
    let score,num = 0;
    let gameover,over=false;
    let boom;
    this.create = function () {
        stats = new Stats();
        stats.setMode(0); // 0: fps, 1: ms
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.top = '0px';
        document.body.appendChild(stats.domElement);

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
            yv = -(y+4)*50;
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
        group.createMultiple(5, 'e1');
        group.createMultiple(5, 'e2');
        group.setAll('outOfBoundsKill', true);
        group.setAll('checkWorldBounds', true);
        game.time.events.loop(1000, function () {
            let e = group.getFirstExists(false);
            if (e) {
                e.reset(game.rnd.integerInRange(10, game.width-10), 50);
                e.body.velocity.y = 100;
            }
        },this);
        game.physics.arcade.enable(group);


        //计分板
        score = game.add.text(game.width,0,num);
        score.anchor.setTo(1,0);

        //gameover点击返回
        game.input.onDown.add(function () {
            if (over){
                num = 0;
                gameover = null;
                over = false;
                game.state.start('play');
            }
        });

        //爆炸效果
        boom = game.add.group();
        boom.createMultiple(5,'boom');
        boom.forEach(function(b){
            b.animations.add('show');
        })


        plane.inputEnabled = true;
        plane.input.enableDrag(false);

    }
    this.update = function () {
        stats.update();
        game.physics.arcade.overlap(group,weapon.bullets, function (a,b) {
            a.kill();
            b.kill();
            let e = boom.getFirstExists(false);
            if (e){
                e.reset(b.x,b.y);
                e.play('show',45,false,true);
            }
            num++;
            score.setText(num);
        });

        game.physics.arcade.overlap(plane,group, function () {
            plane.kill();
            //enemy = null;
            gameover = game.add.text(game.width/2,game.height,'game over');
            gameover.fill = '#ec008c';
            gameover.fontSize = 50;
            gameover.anchor.setTo(0.5,0);
            game.add.tween(gameover).to({y:game.height/2},2000,null,true,100,0,false);
            over = true;
        })

        weapon.fire();
        plane.body.velocity.x = xv;
        plane.body.velocity.y = yv;
    }
}