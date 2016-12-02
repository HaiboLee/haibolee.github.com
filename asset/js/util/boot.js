var bootState = function (game) {
    this.init = function () {
        if(!game.device.desktop){
            this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
            this.scale.forcePortrait = true;
            this.scale.refresh();
        }
        game.scale.pageAlignVertically = true;
        game.scale.pageAlignHorizontally = true;
        alert(1);
    }

    this.preload = function () {
        game.load.image('preload','../../img/preloader.gif');
        alert(2);
    }
    this.create = function () {
        game.state.start('load');
    }
}