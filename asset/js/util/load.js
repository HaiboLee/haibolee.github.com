var loadState = function (game) {

    this.preload = function () {
        let preload = game.add.sprite(game.width/2,game.height/2,'preload');
        preload.anchor.setTo(0.5);
        game.load.setPreloadSprite(preload);
        game.load.image('bg','../../img/IMG_1138.JPG');
        game.load.image('plane','../../img/thrust_ship.png');
        game.load.image('chunk','../../img/chunk.png');
        game.load.image('e1','../../img/space-baddie.png');
        game.load.image('e2','../../img/space-baddie-purple.png');
        game.load.spritesheet('boom','../../img/boom32wh12.png',32,32);
        game.load.audio('hit','../../music/hit.wav');
    }
    
    this.create = function () {
        game.state.start('play');
    }
}