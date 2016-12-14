var playState = function (game) {
    var d = 10, r = 100;
    var drawMap, chick, createBox;
    var tileMap, layer1, mybox;
    var stats, cursors;
    var x = d * 20, y = r + d;
    var chickLine = null;
    this.init = function () {
        createBox = new CreateBox();

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
        tileMap.addTilesetImage('tileset', 'tile', d, d);
        layer1 = tileMap.create('leave1', game.width / d, game.height / d, d, d);
        layer1.scrollFactorX = 0.5;
        layer1.scrollFactorY = 0.5;
        layer1.resizeWorld();

        drawMap = new DrawMap(tileMap, layer1, d,r);
        chick = new Chick(tileMap, layer1, d, r);
        drawMap.drawGrid();

        drawMap.drawBound(3);
        tileMap.putTile(4, 50, 30, layer1);
        tileMap.fill(0, 10, 49, 77, 1, layer1);
        mybox = createBox.createMyBox(3, x, y);
        game.input.onDown.add(function () {
            //tileMap.putTile(1,10,481,layer1);
        });
        setInterval(function () {
            if (chick.chickMove(mybox, 40)) {
                mybox.y += 10;
            } else {
                drawMap.drawBox(mybox);
                chickLine = chick.chickLine(mybox);
                //mybox = createBox.createMyBox(Math.floor(Math.random() * 4), x, y);
                if (chickLine.length != 0) {
                    drawMap.removeLine(chickLine);
                    drawMap.downTile(chickLine);
                    chickLine.splice(0,chickLine.length);
                }
                mybox.kill();
                mybox = createBox.createMyBox(2, x, y);
            }
        }, 500);

        //键盘监听
        document.onkeydown = function (event) {
            var e = event || window.event || arguments.callee.caller.arguments[0];
            if (e && e.keyCode == 38) { // 按 up
                //if (chick.chickAngle(mybox,d,tileMap,layer1)){
                //    mybox.angle+=90;
                //}
                chick.chickAngle(mybox)
            }
            if (e && e.keyCode == 40) { // 按 down
                if (chick.chickMove(mybox, 40)) {
                    mybox.y += 10;
                }
            }
            if (e && e.keyCode == 37) { // 按 left
                if (chick.chickMove(mybox, 37)) {
                    mybox.x -= d;
                }
            }

            if (e && e.keyCode == 39) { // 按 right
                if (chick.chickMove(mybox, 39)) {
                    mybox.x += d
                }
            }
            if (e && e.keyCode == 65) {
                mybox.y -= 10
            }
        }
    }
    this.update = function () {


        stats.update();
    }

    function hasTile(x, y, layer) {
        return tileMap.hasTile(x, y, layer);
    }
}