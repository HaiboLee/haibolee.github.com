class DrawMap {
    constructor(map, layer, d,r) {
        this.map = map;
        this.layer = layer;
        this.d = d;
        this.r = r;
    }

    //画网格
    drawGrid() {
        var graphics = game.add.graphics(0, 0);
        graphics.lineStyle(1, '0x00ff00', 0.3);
        for (var i = this.r; i <= game.width - this.r; i += this.d) {
            graphics.moveTo(i, this.r);
            graphics.lineTo(i, game.height - this.r);
        }
        for (var i = this.r; i <= game.height - this.r; i += this.d) {
            graphics.moveTo(this.r, i);
            graphics.lineTo(game.width - this.r, i);
        }
    }

    //画边界
    drawBound( c) {
        var b = this.r / this.d;
        for (var i = b; i < game.height / this.d - b; i++) {
            this.map.putTile(c, (b - 1), i, this.layer);
        }
        for (var i = b; i < game.height / this.d - b + 1; i++) {
            this.map.putTile(c, game.width / this.d - b, i, this.layer);
        }
        for (var i = b - 1; i < game.width / this.d - b; i++) {
            this.map.putTile(c, i, game.height / this.d - b, this.layer);
        }
    }

    //画方块
    drawBox(box) {
        var x = box.x / this.d;
        var y = box.y / this.d;
        if (box.key == 'l') {
            switch (box.angle) {
                case 0:
                    this.map.putTile(0, x - 1, y, this.layer);
                    this.map.putTile(0, x - 1, y - 1, this.layer);
                    this.map.putTile(0, x - 1, y + 1, this.layer);
                    this.map.putTile(0, x, y + 1, this.layer);
                    break;
                case 90:
                    this.map.putTile(0, x, y - 1, this.layer);
                    this.map.putTile(0, x - 1, y - 1, this.layer);
                    this.map.putTile(0, x - 2, y - 1, this.layer);
                    this.map.putTile(0, x - 2, y, this.layer);
                    break;
                case -180:
                    this.map.putTile(0, x, y, this.layer);
                    this.map.putTile(0, x, y - 1, this.layer);
                    this.map.putTile(0, x, y - 2, this.layer);
                    this.map.putTile(0, x - 1, y - 2, this.layer);
                    break;
                case -90:
                    this.map.putTile(0, x, y, this.layer);
                    this.map.putTile(0, x - 1, y, this.layer);
                    this.map.putTile(0, x + 1, y, this.layer);
                    this.map.putTile(0, x + 1, y - 1, this.layer);
                    break;

            }
        }
        if (box.key == 'o') {
            switch (box.angle) {
                case 0:
                    this.map.putTile(1, x, y, this.layer);
                    this.map.putTile(1, x - 1, y, this.layer);
                    this.map.putTile(1, x, y - 1, this.layer);
                    this.map.putTile(1, x - 1, y - 1, this.layer);
                    break;
            }
        }
        if (box.key == 'i') {
            switch (box.angle) {
                case 0:
                    this.map.putTile(4, x, y, this.layer);
                    this.map.putTile(4, x, y + 1, this.layer);
                    this.map.putTile(4, x, y - 1, this.layer);
                    this.map.putTile(4, x, y - 2, this.layer);
                    break;
                case 90:
                    this.map.putTile(4, x + 1, y, this.layer);
                    this.map.putTile(4, x, y, this.layer);
                    this.map.putTile(4, x - 1, y, this.layer);
                    this.map.putTile(4, x - 2, y, this.layer);
                    break;
            }
        }
        if (box.key == 't') {
            switch (box.angle) {
                case 0:
                    this.map.putTile(2, x, y, this.layer);
                    this.map.putTile(2, x - 1, y, this.layer);
                    this.map.putTile(2, x + 1, y, this.layer);
                    this.map.putTile(2, x, y - 1, this.layer);
                    break;
                case 90:
                    this.map.putTile(2, x, y, this.layer);
                    this.map.putTile(2, x - 1, y, this.layer);
                    this.map.putTile(2, x - 1, y - 1, this.layer);
                    this.map.putTile(2, x - 1, y + 1, this.layer);
                    break;
                case -180:
                    this.map.putTile(2, x - 1, y, this.layer);
                    this.map.putTile(2, x - 1, y - 1, this.layer);
                    this.map.putTile(2, x - 2, y - 1, this.layer);
                    this.map.putTile(2, x, y - 1, this.layer);
                    break;
                case -90:
                    this.map.putTile(2, x, y, this.layer);
                    this.map.putTile(2, x, y - 1, this.layer);
                    this.map.putTile(2, x, y - 2, this.layer);
                    this.map.putTile(2, x - 1, y - 1, this.layer);
                    break;

            }
        }
    }

    removeLine(lineArray) {
        var x = this.r / this.d;
        var w = game.width / this.d - x;
        for (var line in lineArray) {
            for (var i = x; i < w; i++) {
                this.map.removeTile(i,lineArray[line],this.layer);
            }
        }
    }

    downTile(lineArray){
        var min = [0+1,lineArray[0]];
        for(var i = 0;i<lineArray.length;i++){
            if(lineArray[i] < min[1]){
                min.splice(0,min.length);
                min.push(i+1);
                min.push(lineArray[i]);
            }
        }
        var xArray = [];
        var yArray = [];
        var aArray = [];
        this.map.forEach(function (e) {
            if(e.index != undefined && e.index != -1 ){
                xArray.push(e.x);
                yArray.push(e.y);
                aArray.push(e.index);
            }
        },1,this.r/this.d,this.r/this.d,game.width/this.d - 2*(this.r/this.d),min[1]-this.r/this.d,this.layer);
        for (var i = 0;i<xArray.length;i++){
            this.map.removeTile(xArray[i],yArray[i],this.layer);
        }
        while (xArray.length != 0){
            this.map.putTile(aArray.shift(),xArray.shift(),yArray.shift()+min[0],this.layer);
        }
    }
}