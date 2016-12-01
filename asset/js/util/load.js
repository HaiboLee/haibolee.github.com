var loadState = function (game) {
    this.init = function () {
        game.scale.pageAlignVertically = true;
        game.scale.pageAlignHorizontally = true;
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    }

    this.preload = function () {
        game.load.image('bg','../../img/IMG_1138.JPG');
        game.load.image('plane','../../img/thrust_ship.png');
        game.load.image('chunk','../../img/chunk.png');
    }
    
    this.create = function () {
        game.state.start('play');
    }
}