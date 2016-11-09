function playState(game) {
    let webspone1, webspone2;
    let myplane;
    let plane1;
    let plane2;
    let cursors;
    let my;
    let emt;
    let myGroup;
    let flag;
    let num;
    let websocket;
    this.init = function () {
        my = new MyShow(game);
        myplane = new MyPlane(game);
        //ws = new WebSocketUtil();
    }
    this.preload = function () {

    }
    this.create = function () {

        emt = my.showEmitter(500, 500); //爆炸效果
        plane1 = myplane.addPlane(200, 500);
        plane2 = myplane.addPlane(400, 500);
        myGroup = my.addGroup();

        webspone1 = myplane.addWeapon(plane1, 0, 0);
        webspone2 = myplane.addWeapon(plane2, 0, 0);

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
            }
            else if (datas[0] == 'turn') {
                if (datas[1] == 'plane1') {
                    if (datas[2] == 'left') {
                        plane1.position.x--;
                    } else {
                        plane1.position.x++;
                    }
                } else if (datas[1] == 'plane2') {
                    if (datas[2] == 'left') {
                        plane2.position.x--;
                    } else {
                        plane2.position.x++;
                    }
                }
            }
        }
    }

    this.update = function () {
        my.boom(emt, myGroup, webspone1);
        my.boom(emt, myGroup, webspone2);
        if (cursors.right.isDown) {
            websocket.send("turn:" + flag + ":" + num + ":right");
        } else if (cursors.left.isDown) {
            websocket.send("turn:" + flag + ":" + num + ":left");
        }
    }


}