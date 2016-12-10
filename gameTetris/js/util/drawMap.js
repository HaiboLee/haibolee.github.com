class DrawMap{
    constructor(game){
        this.game = game;
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

    drawBound(map,layer,r,d,c){
        var b = r/d;
        for (var i = b;i<game.height/d-b;i++){
            map.putTile(c,(b-1),i,layer);
        }
        for (var i = b;i<game.height/d-b+1;i++){
            map.putTile(c,game.width/d-b,i,layer);
        }
        for(var i=b-1;i<game.width/d-b;i++ ){
            map.putTile(c,i,game.height/d-b,layer);
        }
    }
}