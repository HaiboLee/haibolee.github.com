var bootState = function (game) {
    this.preload = function () {
        game.load.image('preload','../../img/preloader.gif');
    }
    this.create = function () {
        game.state.start('load');
    }
}