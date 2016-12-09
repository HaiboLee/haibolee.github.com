class Enemy{
    constructor(game) {
        this.game = game;
    }

    makeEnemy(x,y,key,health){
        let group = game.add.group();
        let e = group.create(0,0,key);
        game.physics.arcade.enable(e);
        e.setHealth(health);
        let style = {fill:'#00ff00'};
        let life = game.add.text(50,-30,e.health,style,group);
        group.x = x;
        group.y = y;
        return [group,e,life];
    }
}