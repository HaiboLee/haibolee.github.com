var playState = function (game) {
    var d=10,r=100;
    var drawMap,chick;
    var tileMap,layer1,l;
    var stats,cursors;
    this.init = function () {
        drawMap = new DrawMap(game);
        drawMap.drawGrid(d,r);
        chick = new Chick();

        stats = new Stats();
        stats.setMode(0); // 0: fps, 1: ms
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.top = '0px';
        document.body.appendChild(stats.domElement);
    }
    this.create = function () {
        cursors = this.input.keyboard.createCursorKeys();
        tileMap = game.add.tilemap();
        tileMap.addTilesetImage('tileset','tile',d,d);
        layer1 = tileMap.create('leave1',game.width/d,game.height/d,d,d);
        layer1.scrollFactorX = 0.5;
        layer1.scrollFactorY = 0.5;
        layer1.resizeWorld();
        drawMap.drawBound(tileMap,layer1,r,d,3);
        tileMap.putTile(4,50,30,layer1);

        l = game.add.sprite(d*11,r+d,'l');
        l.anchor.setTo(0.5,1/3)
        game.input.onDown.add(function () {

        });

        //键盘监听
        document.onkeydown = function (event) {
            var e = event || window.event || arguments.callee.caller.arguments[0];
            if (e && e.keyCode == 38) { // 按 up
                if (chick.chickAngle(l,d,tileMap,layer1)){
                    l.angle+=90;
                }
            }
            if (e && e.keyCode == 40) { // 按 down
                if (chick.chickMove(l,d,tileMap,layer1,40)){
                    l.y+=10;
                }
            }
            if (e && e.keyCode == 37) { // 按 left
                if (chick.chickMove(l,d,tileMap,layer1,37)){
                    l.x-=d;
                }
            }

            if (e && e.keyCode == 39) { // 按 right
                if (chick.chickMove(l,d,tileMap,layer1,39)){
                    l.x+=d
                }
            }

            if(e && e.keyCode == 65){
                l.y-=10
            }
        }
    }
    this.update = function () {



        stats.update();
    }

    function hasTile(x,y,layer){
        return tileMap.hasTile(x,y,layer);
    }
}