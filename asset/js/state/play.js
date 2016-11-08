function playState(game) {
    let webspone, webspone2, webspone3;
    let myplane;
    let plane;
    let cursors;
    let allBullets;
    let my;
    let emt;
    let myGroup;
    this.init = function () {

    }
    this.preload = function () {
        game.load.image('box1', 'asset/img/box1.png');
        game.load.image('box', 'asset/img/box.png');
        game.load.image('plane', 'asset/img/plane.png');
        game.load.image('chunk', 'asset/img/chunk.png');
        game.load.spritesheet('bomb', 'asset/img/xenon2_bomb.png', 16, 8, 4);
        game.load.image('bs', 'asset/img/bsquadron3.png');
    }
    this.create = function () {
        my = new MyShow(game);
        myplane = new MyPlane(game);
        emt = my.showEmitter(500, 500);
        plane = myplane.addPlane(100, 500);
        plane.anchor.setTo(0.5, 0.5);
        myGroup = my.addGroup();
        game.physics.arcade.enable([plane, myGroup]);
        plane.inputEnabled = true;
        plane.input.enableDrag(false);

        plane.rotation = -0.5 * Math.PI;

        webspone = myplane.addWeapon(plane, 0, 0);
        webspone2 = myplane.addWeapon(plane, 0, -20);
        webspone3 = myplane.addWeapon(plane, 0, 20);


        game.input.onDown.add(function () {
            console.log(webspone3.shots);
        });

        allBullets = webspone.bullets;//获取子弹的组
        cursors = this.input.keyboard.createCursorKeys();
    }

    this.update = function () {
        my.boom(emt, myGroup, webspone);
        my.boom(emt, myGroup, webspone2);
        if(webspone3.shots<20){
            my.boom(emt, myGroup, webspone3);
        }
        if (cursors.right.isDown) {
            plane.position.x += 10;
        } else if (cursors.left.isDown) {
            plane.position.x -= 10;
        } else {
            plane.body.angularVelocity = 0;
        }
    }

}