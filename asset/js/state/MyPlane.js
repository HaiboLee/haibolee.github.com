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
        weapon.fireRate = 50;
        //weapon.bulletAngleOffset = 90;
        weapon.trackSprite(sprite, x, y, true);
        return weapon;
    }


}