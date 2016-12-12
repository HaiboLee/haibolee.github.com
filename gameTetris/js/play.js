var playState = function (game) {
    var d=10,r=100;
    var drawMap,chick,createBox;
    var tileMap,layer1,mybox;
    var stats,cursors;
    this.init = function () {
        drawMap = new DrawMap(game);
        drawMap.drawGrid(d,r);
        chick = new Chick();
        createBox = new CreateBox(game);


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
        mybox = createBox.createMyBox(4,d*20,r+d);
        game.input.onDown.add(function () {
            //mybox.angle+=90;
        });
        setInterval(function () {
            if (chick.chickMove(mybox,d,tileMap,layer1,40)){
                mybox.y+=10;
            }else{
                mybox.x = d*20;
                mybox.y = r+d;
            }
        },500);

        //键盘监听
        document.onkeydown = function (event) {
            var e = event || window.event || arguments.callee.caller.arguments[0];
            if (e && e.keyCode == 38) { // 按 up
                //if (chick.chickAngle(mybox,d,tileMap,layer1)){
                //    mybox.angle+=90;
                //}
                chick.chickAngle(mybox,d,tileMap,layer1)
            }
            if (e && e.keyCode == 40) { // 按 down
                if (chick.chickMove(mybox,d,tileMap,layer1,40)){
                    mybox.y+=10;
                }
            }
            if (e && e.keyCode == 37) { // 按 left
                if (chick.chickMove(mybox,d,tileMap,layer1,37)){
                    mybox.x-=d;
                }
            }

            if (e && e.keyCode == 39) { // 按 right
                if (chick.chickMove(mybox,d,tileMap,layer1,39)){
                    mybox.x+=d
                }
            }
            if(e && e.keyCode == 65){
                mybox.y-=10
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