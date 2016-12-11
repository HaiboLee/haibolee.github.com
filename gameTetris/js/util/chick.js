class Chick {
    chickAngle(box, d, map, layer) {
        var x = box.x / d;
        var y = box.y / d;
        if (box.key == 'l') {
            switch (box.angle) {
                case 0:
                    if (!map.hasTile(x - 2, y - 1, layer) && !map.hasTile(x - 2, y, layer) && !map.hasTile(x - 2, y + 1, layer) && !map.hasTile(x, y - 1, layer)) {
                        box.angle += 90;
                    }
                    break;
                case 90:
                    if (!map.hasTile(x - 2, y - 2, layer) && !map.hasTile(x - 1, y - 2, layer) && !map.hasTile(x, y - 2, layer) && !map.hasTile(x, y, layer)) {
                        box.angle += 90;
                    }
                    break;
                case -180:
                    if (!map.hasTile(x + 1, y - 2, layer) && !map.hasTile(x + 1, y - 1, layer) && !map.hasTile(x + 1, y, layer) && !map.hasTile(x - 1, y, layer)) {
                        box.angle += 90;
                    }
                    break;
                case -90:
                    if (!map.hasTile(x - 1, y + 1, layer) && !map.hasTile(x, y + 1, layer) && !map.hasTile(x + 1, y + 1, layer) && !map.hasTile(x - 1, y - 1, layer)) {
                        //return false;
                        box.angle += 90;
                    }
                    break;
            }
        }
        if (box.key == 'o') {
            return;
        }
        if (box.key == 'i') {
            if (box.angle == 0) {
                if (!map.hasTile(x - 1, y + 1, layer) && !map.hasTile(x - 1, y, layer) && !map.hasTile(x - 2, y, layer) && !map.hasTile(x + 1, y, layer) && !map.hasTile(x + 1, y - 1, layer) && !map.hasTile(x + 1, y - 2, layer)) {
                    box.angle = 90;
                }
            }
            else if (box.angle == 90) {
                if (!map.hasTile(x, y - 1, layer) && !map.hasTile(x - 1, y - 1, layer) && !map.hasTile(x - 2, y - 1, layer) && !map.hasTile(x, y - 2, layer) && !map.hasTile(x, y + 1, layer) && !map.hasTile(x + 1, y + 1, layer)) {
                    box.angle = 0;
                }
            }
        }
    }

    chickMove(box, d, map, layer, go) {
        var x = box.x / d;
        var y = box.y / d;
        if (box.key == 'l') {
            switch (box.angle) {
                case 0:
                    if (go == 37) {
                        if (!map.hasTile(x - 2, y - 1, layer) && !map.hasTile(x - 2, y, layer) && !map.hasTile(x - 2, y + 1, layer)) {
                            return true;
                        }
                    }
                    if (go == 39) {
                        if (!map.hasTile(x, y, layer) && !map.hasTile(x, y - 1, layer) && !map.hasTile(x + 1, y + 1, layer)) {
                            return true;
                        }
                    }
                    if (go == 40) {
                        if (!map.hasTile(x, y + 2, layer) && !map.hasTile(x - 1, y + 2, layer)) {
                            return true;
                        }
                    }
                    return false;
                case 90:
                    if (go == 37) {
                        if (!map.hasTile(x - 3, y, layer) && !map.hasTile(x - 3, y - 1, layer)) {
                            return true;
                        }
                    }
                    if (go == 39) {
                        if (!map.hasTile(x + 1, y - 1, layer) && !map.hasTile(x - 1, y, layer)) {
                            return true;
                        }
                    }
                    if (go == 40) {
                        if (!map.hasTile(x, y, layer) && !map.hasTile(x - 1, y, layer) && !map.hasTile(x - 2, y + 1, layer)) {
                            return true;
                        }
                    }
                    return false;
                case -180:
                    if (go == 37) {
                        if (!map.hasTile(x - 1, y, layer) && !map.hasTile(x - 1, y - 1, layer) && !map.hasTile(x - 2, y - 2, layer)) {
                            return true;
                        }
                    }
                    if (go == 39) {
                        if (!map.hasTile(x + 1, y, layer) && !map.hasTile(x + 1, y - 1, layer) && !map.hasTile(x + 1, y - 2, layer)) {
                            return true;
                        }
                    }
                    if (go == 40) {
                        if (!map.hasTile(x, y + 1, layer) && !map.hasTile(x - 1, y - 1, layer)) {
                            return true;
                        }
                    }
                    return false;
                case -90:
                    if (go == 37) {
                        if (!map.hasTile(x, y - 1, layer) && !map.hasTile(x - 2, y, layer)) {
                            return true;
                        }
                    }
                    if (go == 39) {
                        if (!map.hasTile(x + 2, y, layer) && !map.hasTile(x + 2, y - 1, layer)) {
                            return true;
                        }
                    }
                    if (go == 40) {
                        if (!map.hasTile(x, y + 1, layer) && !map.hasTile(x - 1, y + 1, layer) && !map.hasTile(x + 1, y + 1, layer)) {
                            return true;
                        }
                    }
                    return false;
            }
        }
        if (box.key == 'o') {
            if (go == 37) {
                if (!map.hasTile(x - 2, y, layer) && !map.hasTile(x - 2, y - 1, layer)) {
                    return true;
                }
            }
            if (go == 39) {
                if (!map.hasTile(x + 1, y, layer) && !map.hasTile(x + 1, y - 1, layer)) {
                    return true;
                }
            }
            if (go == 40) {
                if (!map.hasTile(x, y + 1, layer) && !map.hasTile(x - 1, y + 1, layer)) {
                    return true;
                }
            }
            return false;
        }
        if (box.key == 'i') {
            switch (box.angle) {
                case 0:
                    if (go == 37) {
                        if (!map.hasTile(x - 1, y + 1, layer) && !map.hasTile(x - 1, y, layer) && !map.hasTile(x - 1, y - 1, layer) && !map.hasTile(x - 1, y - 2, layer)) {
                            return true;
                        }
                    }
                    if (go == 39) {
                        if (!map.hasTile(x + 1, y + 1, layer) && !map.hasTile(x + 1, y, layer) && !map.hasTile(x + 1, y - 1, layer) && !map.hasTile(x + 1, y - 2, layer)) {
                            return true;
                        }
                    }
                    if(go == 40){
                        if(!map.hasTile(x,y+2,layer)){
                            return true;
                        }
                    }
                    return false;
                case 90:
                    if (go == 37) {
                        if (!map.hasTile(x - 3, y, layer)) {
                            return true;
                        }
                    }
                    if(go == 39){
                        if (!map.hasTile(x +2,y,layer)){
                            return true;
                        }
                    }
                    if(go == 40){
                        if(!map.hasTile(x,y+1,layer)&&!map.hasTile(x+1,y+1,layer)&&!map.hasTile(x-1,y+1,layer)&&!map.hasTile(x-2,y+1,layer)){
                            return true;
                        }
                    }

                    return false;

            }

        }
    }


}
