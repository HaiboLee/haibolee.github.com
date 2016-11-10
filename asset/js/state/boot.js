class MyShow {
    constructor(game) {
        this.game = game;
    }

    showEmitter(x, y) {
        var lz = ['box1'];
        let em = game.add.emitter(x, y, 40);
        //em.makeParticles(lz);
        em.setXSpeed(-20, 20);
        em.setYSpeed(-20, 20);
        em.setScale(0.2, 0.5, 0.2, 0.5, 1000);
        em.gravity = 0;
        //em.setAlpha(1,0.1,5000);
        //em.setRotation()
        return em;
    }

    addSprite(x, y) {
        return game.add.sprite(x, y, 'box')
    }

    addGroup() {
        let myGroup = game.add.group();
        myGroup.enableBody = true;
        myGroup.createMultiple(5, 'bs');
        myGroup.setAll('outOfBoundsKill', true);
        myGroup.setAll('checkWorldBounds', true);
        //game.time.events.loop(Phaser.Timer.SECOND * 2, function () {
        //    let e = myGroup.getFirstExists(false);
        //    if (e) {
        //        e.reset(game.rnd.integerInRange(10, game.width), 100);
        //        //e.life = 5;
        //        e.body.velocity.y = 100;
        //    }
        //}, this);
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

    boom(emts, group, bullets) {
        bullets.fire();
        game.physics.arcade.overlap(group, bullets.bullets, function (a, b) {
            emts.x = a.x;
            emts.y = a.y;
            emts.makeParticles('chunk');
            emts.flow(1500, 250, 40, 1, true);
            a.kill();
            b.kill();
        }, null, this);
    }
}

class MyPlane {

    constructor(game) {
        this.game = game;
    }

    addPlane(x, y) {
        let plane = game.add.sprite(x, y, 'plane');
        plane.scale.setTo(0.2);
        plane.anchor.setTo(0.5, 0.5);
        plane.inputEnabled = true;
        plane.input.enableDrag(false);
        plane.rotation = -0.5 * Math.PI;
        game.physics.arcade.enable(plane);
        return plane;
    }

    addWeapon(sprite, x, y) {
        let weapon = game.add.weapon(30, 'bomb');
        weapon.addBulletAnimation('fly', [0, 1, 2, 3], 12, true);
        weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
        weapon.bulletSpeed = 500;
        //weapon.bulletSpeedVariance = 50;
        weapon.bulletRotateToVelocity = true;
        weapon.shots = 10;
        weapon.fireRate = 500;
        //weapon.bulletAngleVariance = 20;
        weapon.trackSprite(sprite, x, y, true);
        return weapon;
    }


}