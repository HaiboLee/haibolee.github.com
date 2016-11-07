class MyShow {
    constructor(game) {
        this.game = game;
    }

    showEmitter(x, y) {
        var lz = ['box1'];
        let em = game.add.emitter(x, y, 20);
        em.makeParticles('box1');
        em.setXSpeed(-20, 20);
        em.setYSpeed(-20, 20);
        em.setScale(0.2, 0.5, 0.2, 0.5, 1000);
        em.gravity = 0;
        //em.setAlpha(1,0.1,5000);
        em.setRotation()
        return em;
    }

    addSprite(x, y) {
        return game.add.sprite(x, y, 'box1')
    }
}

class MyPlane {

    constructor(game) {
        this.game = game;
        var bulletTime = 0;
    }

    addPlane(x, y) {
        let plane = game.add.sprite(x, y, 'plane');
        plane.scale.setTo(0.2);
        return plane;
    }

    addWeapon(sprite) {
        let weapon = game.add.weapon(30, 'bomb');
        weapon.addBulletAnimation('fly',[0,1,2,3],12,true);
        weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
        weapon.bulletSpeed = 600;
        weapon.fireRate = 500;
        weapon.trackSprite(sprite,0,0,true);
        return weapon;
    }

    bulletTime() {
        let bulletTime = 0;
        return bulletTime;
    }

    startFire(sprite, mybullets) {
        console.log(game.time.now % 20);
        if (game.time.now % 20 == 0) {
            let bullet = mybullets.getFirstExists(false);
            if (bullet) {
                bullet.reset(sprite.x + 6, sprite.y - 8);
                bullet.body.gravity.y = -300;
                //    bulletTime = game.time.now + 150;
            }
        }
    }
}