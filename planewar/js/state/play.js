function playState(game) {
    let myplane;
    let cursors;
    let enemy;
    let flag;
    let num;
    let websocket;
    let e1;
    let planeArrays = {};//飞机组
    let websponeArrays = {};//武器组
    let stats;
    let camera;
    let isJoin = false;
    let life;
    let group;
    let endTimeText = null,endTime = '请稍等,正在接入你的战机...';//倒计时
    this.init = function () {
        enemy = new Enemy(game);
        myplane = new MyPlane(game);
        game.stage.disableVisibilityChange = true;

        stats = new Stats();
        stats.setMode(0); // 0: fps, 1: ms
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.top = '0px';
        document.body.appendChild(stats.domElement);
    }
    this.preload = function () {

    }
    this.create = function () {


        //var worker = new Worker("asset/js/util/worker.js");
        //worker.postMessage(game);
        var state = game.state;

        state.onPausedCallback = function () {
            var nowstate = stage.getCurrentState();
            console.log(nowstate);
        }

        camera = game.camera;

        //背景
        //game.add.image(0,0,'bg');
        let ball = game.add.image(game.width,game.height,'ball');
        ball.anchor.setTo(0.5);
       //ball.scale.setTo(0.8);
        game.add.tween(ball).to({x:0,y:0},30000,null,true,0,Number.MAX_VALUE,true);
        game.add.tween(ball.scale).to({x:0.1,y:0.1},30000,null,true,0,Number.MAX_VALUE,true);

        window.setInterval(function () {
            //camera.shake(0.005, 500, false, Phaser.Camera.SHAKE_BOTH, true);
        },60000);



        //let eGroup = game.add.group();
        //e1 = eGroup.create(0,0,'wasp');
        //e1.setHealth(100);
        //game.physics.arcade.enable(e1);
        //life = game.add.text(50,-30,e1.health,null,eGroup);
        //life.fill = '#00ff00';
        //life.setHealth(e1.health);
        //eGroup.x = 100;
        //eGroup.y = 100;
        //eGroup.enableBody = true;
        //game.add.tween(eGroup).to({x:900},5000,null,true,0,Number.MAX_VALUE,true);

        let enemys = enemy.makeEnemy(100,100,'wasp',50);
        group = enemys[0];
        e1 = enemys[1];
        life = enemys[2];

        game.input.onDown.add(function () {
            e1.damage(1);
            life.damage(1);
            life.setText(e1.health);
            console.log(e1.health);
        });
        cursors = this.input.keyboard.createCursorKeys();

        websocket = new WebSocket('ws://localhost:8080/websocket/websocket');
        websocket.onopen = function () {
            console.log("连接成功");
        }

        websocket.onmessage = function (event) {
            //console.log(event.data);
            let datas = event.data.split(':');
            if (datas[0] == 's') {
                flag = datas[1];
                num = datas[2];
                let oldPlane = datas[3].split(',');
                for (let i = 0; i < oldPlane.length-1; i++) {
                    planeArrays[parseInt(oldPlane[i])] = myplane.addPlane(parseInt(oldPlane[i]) * 100 +100,500,'plane2');
                    websponeArrays[oldPlane[i]] = myplane.addWeapon(planeArrays[parseInt(oldPlane[i])], 0, 0);
                }

                endTimeText = game.add.text(game.width/2,game.height/2,endTime);
                endTimeText.anchor.setTo(0.5);
                endTimeText.font = 'Arial Black';
                endTimeText.fontWeight = 'bold';
                endTimeText.fill = '#ec008c';
                endTimeText.fontSize = 50;
                console.log(oldPlane);
            }
            else if (datas[0] == 't') {//转向
                    planeArrays[parseInt(datas[1])].x = parseInt(datas[2]);
            }

            else if (datas[0] == 'j') {//玩家加入
                //玩家加入后 等10秒钟才能进入现实自己的飞机 不然敌人不同步
                setTimeout(function () {
                    if (datas[1] != num){
                        planeArrays[parseInt(datas[1])] = myplane.addPlane(parseInt(datas[1]) * 100 + 100, 500,'plane2');
                        websponeArrays[parseInt(datas[1])] = myplane.addWeapon(planeArrays[parseInt(datas[1])], 0, 0);
                    }else{
                        planeArrays[parseInt(datas[1])] = myplane.addPlane(parseInt(datas[1]) * 100 + 100, 500,'myplane');
                        websponeArrays[parseInt(datas[1])] = myplane.addWeapon(planeArrays[parseInt(datas[1])], 0, 0)
                    }
                    isJoin = true;
                    endTimeText.destroy();
                },5000);
            }
            else if(datas[0] == 'l'){//玩家离开
                planeArrays[parseInt(datas[1])].kill();
                websponeArrays[parseInt(datas[1])] = null;
                planeArrays[parseInt(datas[1])] = null;
            }
            else if(datas[0] == 'e'){//产生敌人
                //my.createEnemy(myGroup,parseInt(datas[1]));
            }
        }

        websocket.onclose = function () {
            //console.log(flag + ":" + num + ":当前连接关闭")
            //websocket.send(flag + ":" + num + ":当前连接关闭");
        }

        window.onbeforeunload = function () {
            websocket.send('c:' + flag + ':' + num);
            console.log('关闭窗口');
        }

        document.addEventListener('visibilitychange', function () {
            let visi = document.webkitVisibilityState;
            if (visi == 'hidden'){
                closews();
            }else{
                game.state.start('play');
            }
        })

    }

    this.update = function () {
        //for(let i = 0;i<getLength(websponeArrays);i++){
            if(websponeArrays[num]!=null){
                //my.boom(emt,e1,websponeArrays[num],camera);
                websponeArrays[num].fire();
                game.physics.arcade.overlap(e1,websponeArrays[num].bullets,function(a,b){
                    b.kill();
                    e1.damage(1);
                    //life.damage(1);
                    life.setText(e1.health);
                    if(life.text == 0) {
                        life.destroy();
                    }
                    console.log(e1.health);
                });
            }
        //}
            if (cursors.right.isDown) {
                if (isJoin) {
                    sendMessage("t:" + flag + ":" + num + ":" + "r:" + planeArrays[parseInt(num)].x);
                }
            } else if (cursors.left.isDown) {
                if (isJoin){
                    sendMessage("t:" + flag + ":" + num + ":" + "l:" + planeArrays[parseInt(num)].x);
                }
            }
        stats.update();
    }

    function sendMessage(message) {
        websocket.send(message);
    }

    function getLength(json){
        let i=0;
        for (let item in json ){
            i++;
        }
        return i;
    }

    function closews(){
        //planeArrays[num].kill();
        //websponeArrays[num] = null;
        //websponeArrays = null;
        //planeArrays = null;
        isJoin = false;
        websocket.send('c:' + flag + ':' + num);
        websocket.close();
    }
}