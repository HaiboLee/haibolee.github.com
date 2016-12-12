class DrawMap {
    constructor(map, layer, d) {
        this.map = map;
        this.layer = layer;
        this.d = d;
    }

    //画网格
    drawGrid(r) {
        var graphics = game.add.graphics(0, 0);
        graphics.lineStyle(1, '0x00ff00', 0.3);
        for (var i = r; i <= game.width - r; i += this.d) {
            graphics.moveTo(i, r);
            graphics.lineTo(i, game.height - r);
        }
        for (var i = r; i <= game.height - r; i += this.d) {
            graphics.moveTo(r, i);
            graphics.lineTo(game.width - r, i);
        }
    }

    //画边界
    drawBound(r, c) {
        var b = r / this.d;
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
                    this.map.putTile(4, x, y+1,this.layer);
                    this.map.putTile(4, x, y-1, this.layer);
                    this.map.putTile(4, x, y-2, this.layer);
                    break;
                case 90:
                    this.map.putTile(4,x+1,y,this.layer);
                    this.map.putTile(4,x,y,this.layer);
                    this.map.putTile(4,x-1,y,this.layer);
                    this.map.putTile(4,x-2,y,this.layer);
                    break;
            }
        }
        if(box.key == 't'){
            switch (box.angle){
                case 0:
                    this.map.putTile(2,x,y,this.layer);
                    this.map.putTile(2,x-1,y,this.layer);
                    this.map.putTile(2,x+1,y,this.layer);
                    this.map.putTile(2,x,y-1,this.layer);
                    break;
                case 90:
                    this.map.putTile(2,x,y,this.layer);
                    this.map.putTile(2,x-1,y,this.layer);
                    this.map.putTile(2,x-1,y-1,this.layer);
                    this.map.putTile(2,x-1,y+1,this.layer);
                    break;
                case -180:
                    this.map.putTile(2,x-1,y,this.layer);
                    this.map.putTile(2,x-1,y-1,this.layer);
                    this.map.putTile(2,x-2,y-1,this.layer);
                    this.map.putTile(2,x,y-1,this.layer);
                    break;
                case -90:
                    this.map.putTile(2,x,y,this.layer);
                    this.map.putTile(2,x,y-1,this.layer);
                    this.map.putTile(2,x,y-2,this.layer);
                    this.map.putTile(2,x-1,y-1,this.layer);
                    break;

            }
        }
    }
}