function playState(game) {
    let myplane;
    let cursors;
    let my;
    let emt;
    let myGroup;
    let flag;
    let num;
    let websocket;
    let planeArrays = {};
    let websponeArrays = {};
    let stats;
    let camera;
    this.init = function () {
        my = new MyShow(game);
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

        camera = game.camera;

        //背景
        game.add.image(0,0,'bg');
        let ball = game.add.image(game.width,game.height,'ball');
        ball.anchor.setTo(0.5);
       //ball.scale.setTo(0.8);
        game.add.tween(ball).to({x:0,y:0},30000,null,true,0,Number.MAX_VALUE,true);
        game.add.tween(ball.scale).to({x:0.1,y:0.1},30000,null,true,0,Number.MAX_VALUE,true);

        window.setInterval(function () {
            console.log("斗");
            //camera.shake(0.005, 500, false, Phaser.Camera.SHAKE_BOTH, true);
        },60000);

        emt = my.showEmitter(500, 500); //爆炸效果
        myGroup = my.addGroup();//敌人组

        game.input.onDown.add(function () {
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
                    planeArrays[parseInt(oldPlane[i])] = myplane.addPlane(parseInt(oldPlane[i]) * 100 +100,500);
                    websponeArrays[oldPlane[i]] = myplane.addWeapon(planeArrays[parseInt(oldPlane[i])], 0, 0);
                }
                console.log(oldPlane);
            }
            else if (datas[0] == 't') {//转向
                    planeArrays[parseInt(datas[1])].x = parseInt(datas[2]);
            }
            else if (datas[0] == 'j') {//玩家加入
                planeArrays[parseInt(datas[1])] = myplane.addPlane(parseInt(datas[1]) * 100 + 100, 500);
                websponeArrays[parseInt(datas[1])] = myplane.addWeapon(planeArrays[parseInt(datas[1])], 0, 0);
            }
            else if(datas[0] == 'l'){//玩家离开
                planeArrays[parseInt(datas[1])].kill();
                websponeArrays[parseInt(datas[1])] = null;
                planeArrays[parseInt(datas[1])] = null;
            }
            else if(datas[0] == 'e'){//产生敌人
                my.createEnemy(myGroup,parseInt(datas[1]));
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
    }

    this.update = function () {
        for(let i = 0;i<getLength(websponeArrays);i++){
            if(websponeArrays[i]!=null){
                my.boom(emt,myGroup,websponeArrays[i],camera);
            }
        }
        if (cursors.right.isDown) {
                sendMessage("t:" + flag + ":" + num + ":" + "r:" + planeArrays[parseInt(num)].x);
        } else if (cursors.left.isDown) {
                sendMessage("t:" + flag + ":" + num + ":" + "l:" + planeArrays[parseInt(num)].x);
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
}