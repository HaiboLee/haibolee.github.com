var bootState = function (game) {
    this.init = function () {
        if (game.device.desktop) {
            game.scale.pageAlignVertically = true;
            game.scale.pageAlignHorizontally = true;
        } else {
            console.log('不支持手机');
            return;
        }
    }
    this.preload = function () {
        game.load.image('preloader', 'img/preloader.gif');
    }
    this.create = function () {

        game.state.start('load');

    }

}