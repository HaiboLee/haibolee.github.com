var beginState = function (game) {
    this.preload = function () {
        game.load.image('preload','asset/img/preloader.gif');
    }
    this.create = function () {
        game.state.start('load');
    }
}