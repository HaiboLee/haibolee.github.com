var loadState = function (game) {
    this.preload = function () {
        game.load.image('l','img/L.png');
        game.load.image('tile','img/tile.png');
    }
    this.create = function () {
        game.state.start('play');
    }
}