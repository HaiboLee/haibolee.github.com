function playState(game) {
    let webspone1, webspone2;
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
    this.init = function () {
        my = new MyShow(game);
        myplane = new MyPlane(game);
        //ws = new WebSocketUtil();
    }
    this.preload = function () {

    }
    this.create = function () {

        emt = my.showEmitter(500, 500); //爆炸效果
        myGroup = my.addGroup();

        game.input.onDown.add(function () {
            //console.log(webspone3.shots);
            //websocket.send(flag + ":" + "left");
        });
        cursors = this.input.keyboard.createCursorKeys();

        websocket = new WebSocket('ws://localhost:8080/websocket/websocket');
        websocket.onopen = function () {
            console.log("连接成功");
        }

        websocket.onmessage = function (event) {
            console.log(event.data);
            let datas = event.data.split(':');
            if (datas[0] == 'start') {
                flag = datas[1];
                num = datas[2];
                let oldPlane = datas[3].split(',');
                for (let i = 0; i < oldPlane.length-1; i++) {
                    planeArrays[parseInt(oldPlane[i])] = myplane.addPlane(parseInt(oldPlane[i]) * 100 +100,500);
                    websponeArrays[oldPlane[i]] = myplane.addWeapon(planeArrays[parseInt(oldPlane[i])], 0, 0);
                }
                console.log(oldPlane);
            }
            else if (datas[0] == 'turn') {
                    planeArrays[parseInt(datas[1])].x = parseInt(datas[2]);
            }
            else if (datas[0] == 'join') {
                planeArrays[parseInt(datas[1])] = myplane.addPlane(parseInt(datas[1]) * 100 + 100, 500);
                websponeArrays[parseInt(datas[1])] = myplane.addWeapon(planeArrays[parseInt(datas[1])], 0, 0);
            }
            else if(datas[0] == 'leave'){
                planeArrays[parseInt(datas[1])].kill();
                websponeArrays[parseInt(datas[1])] = null;
                planeArrays[parseInt(datas[1])] = null;
            }
        }

        websocket.onclose = function () {
            console.log(flag + ":" + num + ":当前连接关闭")
            websocket.send(flag + ":" + num + ":当前连接关闭");
        }

        window.onbeforeunload = function () {
            websocket.send('close:' + flag + ':' + num);
            console.log('关闭窗口');
        }
    }

    this.update = function () {
        for(let i = 0;i<getLength(websponeArrays);i++){
            if(websponeArrays[i]!=null){
                my.boom(emt,myGroup,websponeArrays[i]);
            }
        }
        if (cursors.right.isDown) {
                sendMessage("turn:" + flag + ":" + num + ":" + "right:" + planeArrays[parseInt(num)].x);
        } else if (cursors.left.isDown) {
                sendMessage("turn:" + flag + ":" + num + ":" + "left:" + planeArrays[parseInt(num)].x);
        }
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