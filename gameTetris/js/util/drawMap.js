class DrawMap{
    constructor(map,layer){
        this.map = map;
        this.layer = layer;
    }
    //画网格
    drawGrid(d,r){
            var graphics = game.add.graphics(0, 0);
            graphics.lineStyle(1, '0x00ff00', 0.3);
            for (var i = r; i <= game.width-r; i += d) {
                graphics.moveTo(i,r);
                graphics.lineTo(i, game.height-r);
            }
            for (var i = r;i<=game.height-r;i+=d){
                graphics.moveTo(r,i);
                graphics.lineTo(game.width-r,i);
            }
    }

    //画边界
    drawBound(r,d,c){
        var b = r/d;
        for (var i = b;i<game.height/d-b;i++){
            this.map.putTile(c,(b-1),i,this.layer);
        }
        for (var i = b;i<game.height/d-b+1;i++){
            this.map.putTile(c,game.width/d-b,i,this.layer);
        }
        for(var i=b-1;i<game.width/d-b;i++ ){
            this.map.putTile(c,i,game.height/d-b,this.layer);
        }
    }

    //画方块
    drawBox(box){

    }
}