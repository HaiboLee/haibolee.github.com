class MyShow {
    constructor(game) {
        this.game = game;
    }

    showEmitter(x, y) {
        var lz = ['chunk'];
        let em = game.add.emitter(x, y, 50);
        em.makeParticles(lz);
        em.setXSpeed(-25, 25);
        em.setYSpeed(-25, 25);
        em.setScale(0.2, 0.5, 0.2, 0.5, 1000);
        em.gravity = 0;
        //em.setAlpha(1,0.1,5000);
        //em.setRotation(Math.floor(Math.random()*200)+200,Math.floor(Math.random()*200)+200);
        return em;
    }

    addSprite(x, y) {
        return game.add.sprite(x, y, 'box')
    }

    addGroup() {
        let myGroup = game.add.group();
        myGroup.enableBody = true;
        myGroup.createMultiple(10, 'e1');
        myGroup.createMultiple(10, 'e2');
        myGroup.setAll('outOfBoundsKill', true);
        myGroup.setAll('checkWorldBounds', true);
        window.setInterval(function () {
            let e = myGroup.getFirstExists(false);
            if (e) {
                e.reset(game.rnd.integerInRange(10, game.width), 100);
                //e.life = 5;
                e.body.velocity.y = 100;
            }
        }, 500);
        game.physics.arcade.enable(myGroup);
        return myGroup;

    }

    createEnemy(group,x){
        let e = group.getFirstExists(false);
        if (e){
            e.reset(x, 50);
            e.body.velocity.y=150;
        }

    }

    boom(emts, group, bullets,camera) {
        bullets.fire();
        game.physics.arcade.overlap(group, bullets.bullets, function (a, b) {
            emts.x = a.x;
            emts.y = a.y;
            //emts.makeParticles('box1');
            emts.flow(1500, 250, 10, 1, true);
            a.kill();
            b.kill();
            //camera.shake(0.001, 500, false, Phaser.Camera.SHAKE_BOTH, true);
        }, null, this);
    }
}

class MyPlane {

    constructor(game) {
        this.game = game;
    }

    addPlane(x, y,p) {
        let plane = game.add.sprite(x, y, p);
        //plane.scale.setTo(0.2);
        plane.anchor.setTo(0.5, 0.5);
        plane.inputEnabled = true;
        plane.input.enableDrag(false);
        plane.rotation = -0.5 * Math.PI;
        game.physics.arcade.enable(plane);
        return plane;
    }

    addWeapon(sprite, x, y) {
        let weapon = game.add.weapon(30, 'chunk');
       // weapon.addBulletAnimation('fly', [0, 1, 2, 3], 12, true);
        weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
        weapon.bulletSpeed = 300;
        //weapon.bulletSpeedVariance = 200;
        weapon.bulletRotateToVelocity = true;
        weapon.shots = 10;
        //weapon.fireRate = 500;
        weapon.bulletAngleVariance = 5;
        weapon.fireRate = 200;
        //weapon.bulletAngleOffset = 90;
        weapon.trackSprite(sprite, x, y, true);
        return weapon;
    }


}