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
        game.load.image('red', 'img/red.png');
    }
    this.create = function () {
        setTimeout(function () {
            var d = 10;
            var r = 50;
            var graphics = game.add.graphics(0, 0);
            graphics.lineStyle(1, '0x00ff00', 0.1);
            for (var i = r; i <= game.width-r; i += d) {
                graphics.moveTo(i,r);
                graphics.lineTo(i, game.height-r);
            }
            for (var i = r;i<=game.height-r;i+=d){
                graphics.moveTo(r,i);
                graphics.lineTo(game.width-r,i);
            }
        },0);
        //graphics.beginFill('0xff0000');


    }

}