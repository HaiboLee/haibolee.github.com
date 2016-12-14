var loadState = function (game) {
    this.preload = function () {
        game.load.image('l','img/L.png');
        game.load.image('i','img/I.png');
        game.load.image('o','img/O.png');
        game.load.image('t','img/T.png');
        game.load.image('tile','img/tile.png');
        game.load.image('one','img/one.png');
        game.load.image('two','img/two.png');
        game.load.image('three','img/three.png');
        game.load.image('four','img/four.png');
        game.load.image('five','img/five.png');
    }
    this.create = function () {
        game.state.start('play');
    }
}