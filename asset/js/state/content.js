function contentState(game) {

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

        game.state.start('play');

    }
}