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

        game.load.image('box1', 'asset/img/box1.png');
        game.load.image('box', 'asset/img/box.png');
        game.load.image('plane', 'asset/img/plane.png');
        game.load.image('chunk', 'asset/img/chunk.png');
        game.load.spritesheet('bomb', 'asset/img/xenon2_bomb.png', 16, 8, 4);
        game.load.image('bs', 'asset/img/bsquadron3.png');
        game.load.image('bg','asset/img/bg.png');
        game.load.image('ball','asset/img/ball.png');

    }

    this.create = function () {
        game.state.start('play');

    }

    this.update = function () {
    }
}