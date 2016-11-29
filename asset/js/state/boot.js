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

    addSprite(x, y,key) {
        return game.add.sprite(x, y, key);
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
            //a.kill();
            //b.kill();
            //camera.shake(0.001, 500, false, Phaser.Camera.SHAKE_BOTH, true);
            console.log(group);
            console.log(a);
        }, null, this);
    }
}
