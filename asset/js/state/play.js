function playState(game) {
    let webspone;
    let myplane;
    let plane;
    let cursors;
    this.init = function () {

    }
    this.preload = function () {
        game.load.image('box1', 'asset/img/box1.png');
        game.load.image('plane','asset/img/plane.png');
        game.load.image('chunk','asset/img/chunk.png');
        game.load.spritesheet('bomb','asset/img/xenon2_bomb.png',16,8,4);
    }
    this.create = function () {
        let my = new MyShow(game);
        my.addSprite(100,100);

        myplane = new MyPlane(game);
        plane = myplane.addPlane(300,300);
        plane.anchor.setTo(0.5,0.5);
        //plane.rotation = -0.5*Math.PI;
        game.physics.arcade.enable(plane);

        webspone = myplane.addWeapon(plane);
        game.input.onDown.add(function () {

        });
        cursors = this.input.keyboard.createCursorKeys();
    }

    this.update = function () {
        //webspone.fireFrom.set(30,30);
        webspone.fire();
        if(cursors.right.isDown){
            plane.body.angularVelocity = 300;
        }else
        if (cursors.left.isDown){
            plane.body.angularVelocity = -300;
        }else{
            plane.body.angularVelocity = 0;
        }
    }
}