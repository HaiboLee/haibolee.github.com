function loadState(game) {
    let nnn;

    this.init = function () {
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        game.scale.scaleMode = Phaser.EXACT_FIT;
    }

    this.preload = function () {

        let preload = game.add.sprite(game.width/2,game.height/2,'preload');
        preload.anchor.setTo(0.5);
        nnn =  game.load.setPreloadSprite(preload);

        let loadText = game.add.text(game.width/2,game.height/2+50,preload.width+'%');
        loadText.fill = '#00ff00';

        game.load.image('box1', 'asset/img/box1.png');
        game.load.image('box', 'asset/img/box.png');
        game.load.image('plane', 'asset/img/plane.png');
        game.load.image('chunk', 'asset/img/chunk.png');
        game.load.spritesheet('bomb', 'asset/img/xenon2_bomb.png', 16, 8, 4);
        game.load.image('bs', 'asset/img/bsquadron3.png');
        game.load.image('bg','asset/img/bg.png');
        game.load.image('ball','asset/img/ball.png');
        game.load.image('plane2','asset/img/thrust_ship.png');
        game.load.image('orb1','asset/img/orb-blue.png');
        game.load.image('orb2','asset/img/orb-green.png');
        game.load.image('orb3','asset/img/orb-red.png');
        game.load.image('shmup','asset/img/shmup-boom.png');
        game.load.image('myplane','asset/img/xenon2_ship.png');
        game.load.image('e1','asset/img/space-baddie.png');
        game.load.image('e2','asset/img/space-baddie-purple.png');

    }

    this.create = function () {
        game.state.start('play');

    }

    this.update = function () {
        console.log(nnn);
    }
}