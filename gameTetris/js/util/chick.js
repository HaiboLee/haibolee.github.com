class Chick {

    constructor(map,layer){
        this.map = map;
        this.layer = layer;
    }
    
    chickAngle(box, d) {
        var x = box.x / d;
        var y = box.y / d;
        if (box.key == 'l') {
            switch (box.angle) {
                case 0:
                    if (!this.map.hasTile(x - 2, y - 1, this.layer) && !this.map.hasTile(x - 2, y, this.layer) && !this.map.hasTile(x - 2, y + 1, this.layer) && !this.map.hasTile(x, y - 1, this.layer)) {
                        box.angle += 90;
                    }
                    break;
                case 90:
                    if (!this.map.hasTile(x - 2, y - 2, this.layer) && !this.map.hasTile(x - 1, y - 2, this.layer) && !this.map.hasTile(x, y - 2, this.layer) && !this.map.hasTile(x, y, this.layer)) {
                        box.angle += 90;
                    }
                    break;
                case -180:
                    if (!this.map.hasTile(x + 1, y - 2, this.layer) && !this.map.hasTile(x + 1, y - 1, this.layer) && !this.map.hasTile(x + 1, y, this.layer) && !this.map.hasTile(x - 1, y, this.layer)) {
                        box.angle += 90;
                    }
                    break;
                case -90:
                    if (!this.map.hasTile(x - 1, y + 1, this.layer) && !this.map.hasTile(x, y + 1, this.layer) && !this.map.hasTile(x + 1, y + 1, this.layer) && !this.map.hasTile(x - 1, y - 1, this.layer)) {
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
                if (!this.map.hasTile(x - 1, y + 1, this.layer) && !this.map.hasTile(x - 1, y, this.layer) && !this.map.hasTile(x - 2, y, this.layer) && !this.map.hasTile(x + 1, y, this.layer) && !this.map.hasTile(x + 1, y - 1, this.layer) && !this.map.hasTile(x + 1, y - 2, this.layer)) {
                    box.angle = 90;
                }
            }
            else if (box.angle == 90) {
                if (!this.map.hasTile(x, y - 1, this.layer) && !this.map.hasTile(x - 1, y - 1, this.layer) && !this.map.hasTile(x - 2, y - 1, this.layer) && !this.map.hasTile(x, y - 2, this.layer) && !this.map.hasTile(x, y + 1, this.layer) && !this.map.hasTile(x + 1, y + 1, this.layer)) {
                    box.angle = 0;
                }
            }
        }
        if (box.key == 't') {
            if (box.angle == 0) {
                if (!this.map.hasTile(x, y + 1, this.layer) && !this.map.hasTile(x - 1, y + 1, this.layer) && !this.map.hasTile(x - 1, y - 1, this.layer) && !this.map.hasTile(x + 1, y + 1, this.layer)) {
                    box.angle += 90;
                }
            } else if (box.angle == 90) {
                if (!this.map.hasTile(x - 2, y + 1, this.layer) && !this.map.hasTile(x - 2, y, this.layer) && !this.map.hasTile(x - 2, y - 1, this.layer) && !this.map.hasTile(x + 1, y - 1, this.layer)) {
                    box.angle += 90;
                }
            } else if (box.angle == -180) {
                if (!this.map.hasTile(x, y, this.layer) && !this.map.hasTile(x, y - 2, this.layer) && !this.map.hasTile(x - 1, y - 2, this.layer) && !this.map.hasTile(x - 2, y - 2, this.layer)) {
                    box.angle += 90;
                }
            } else if (box.angle == -90) {
                if (!this.map.hasTile(x + 1, y, this.layer) && !this.map.hasTile(x + 1, y - 1, this.layer) && !this.map.hasTile(x + 1, y - 2, this.layer) && !this.map.hasTile(x - 1, y, this.layer)) {
                    box.angle += 90;
                }
            }
        }
    }

    chickMove(box, d , go) {
        var x = box.x / d;
        var y = box.y / d;
        if (box.key == 'l') {
            switch (box.angle) {
                case 0:
                    if (go == 37) {
                        if (!this.map.hasTile(x - 2, y - 1, this.layer) && !this.map.hasTile(x - 2, y, this.layer) && !this.map.hasTile(x - 2, y + 1, this.layer)) {
                            return true;
                        }
                    }
                    if (go == 39) {
                        if (!this.map.hasTile(x, y, this.layer) && !this.map.hasTile(x, y - 1, this.layer) && !this.map.hasTile(x + 1, y + 1, this.layer)) {
                            return true;
                        }
                    }
                    if (go == 40) {
                        if (!this.map.hasTile(x, y + 2, this.layer) && !this.map.hasTile(x - 1, y + 2, this.layer)) {
                            return true;
                        }
                    }
                    return false;
                case 90:
                    if (go == 37) {
                        if (!this.map.hasTile(x - 3, y, this.layer) && !this.map.hasTile(x - 3, y - 1, this.layer)) {
                            return true;
                        }
                    }
                    if (go == 39) {
                        if (!this.map.hasTile(x + 1, y - 1, this.layer) && !this.map.hasTile(x - 1, y, this.layer)) {
                            return true;
                        }
                    }
                    if (go == 40) {
                        if (!this.map.hasTile(x, y, this.layer) && !this.map.hasTile(x - 1, y, this.layer) && !this.map.hasTile(x - 2, y + 1, this.layer)) {
                            return true;
                        }
                    }
                    return false;
                case -180:
                    if (go == 37) {
                        if (!this.map.hasTile(x - 1, y, this.layer) && !this.map.hasTile(x - 1, y - 1, this.layer) && !this.map.hasTile(x - 2, y - 2, this.layer)) {
                            return true;
                        }
                    }
                    if (go == 39) {
                        if (!this.map.hasTile(x + 1, y, this.layer) && !this.map.hasTile(x + 1, y - 1, this.layer) && !this.map.hasTile(x + 1, y - 2, this.layer)) {
                            return true;
                        }
                    }
                    if (go == 40) {
                        if (!this.map.hasTile(x, y + 1, this.layer) && !this.map.hasTile(x - 1, y - 1, this.layer)) {
                            return true;
                        }
                    }
                    return false;
                case -90:
                    if (go == 37) {
                        if (!this.map.hasTile(x, y - 1, this.layer) && !this.map.hasTile(x - 2, y, this.layer)) {
                            return true;
                        }
                    }
                    if (go == 39) {
                        if (!this.map.hasTile(x + 2, y, this.layer) && !this.map.hasTile(x + 2, y - 1, this.layer)) {
                            return true;
                        }
                    }
                    if (go == 40) {
                        if (!this.map.hasTile(x, y + 1, this.layer) && !this.map.hasTile(x - 1, y + 1, this.layer) && !this.map.hasTile(x + 1, y + 1, this.layer)) {
                            return true;
                        }
                    }
                    return false;
            }
        }
        if (box.key == 'o') {
            if (go == 37) {
                if (!this.map.hasTile(x - 2, y, this.layer) && !this.map.hasTile(x - 2, y - 1, this.layer)) {
                    return true;
                }
            }
            if (go == 39) {
                if (!this.map.hasTile(x + 1, y, this.layer) && !this.map.hasTile(x + 1, y - 1, this.layer)) {
                    return true;
                }
            }
            if (go == 40) {
                if (!this.map.hasTile(x, y + 1, this.layer) && !this.map.hasTile(x - 1, y + 1, this.layer)) {
                    return true;
                }
            }
            return false;
        }
        if (box.key == 'i') {
            switch (box.angle) {
                case 0:
                    if (go == 37) {
                        if (!this.map.hasTile(x - 1, y + 1, this.layer) && !this.map.hasTile(x - 1, y, this.layer) && !this.map.hasTile(x - 1, y - 1, this.layer) && !this.map.hasTile(x - 1, y - 2, this.layer)) {
                            return true;
                        }
                    }
                    if (go == 39) {
                        if (!this.map.hasTile(x + 1, y + 1, this.layer) && !this.map.hasTile(x + 1, y, this.layer) && !this.map.hasTile(x + 1, y - 1, this.layer) && !this.map.hasTile(x + 1, y - 2, this.layer)) {
                            return true;
                        }
                    }
                    if (go == 40) {
                        if (!this.map.hasTile(x, y + 2, this.layer)) {
                            return true;
                        }
                    }
                    return false;
                case 90:
                    if (go == 37) {
                        if (!this.map.hasTile(x - 3, y, this.layer)) {
                            return true;
                        }
                    }
                    if (go == 39) {
                        if (!this.map.hasTile(x + 2, y, this.layer)) {
                            return true;
                        }
                    }
                    if (go == 40) {
                        if (!this.map.hasTile(x, y + 1, this.layer) && !this.map.hasTile(x + 1, y + 1, this.layer) && !this.map.hasTile(x - 1, y + 1, this.layer) && !this.map.hasTile(x - 2, y + 1, this.layer)) {
                            return true;
                        }
                    }

                    return false;

            }

        }
        if (box.key == 't') {
            switch (box.angle) {
                case 0:
                    if (go == 37) {
                        if (!this.map.hasTile(x - 1, y - 1, this.layer) && !this.map.hasTile(x - 2, y, this.layer)) {
                            return true;
                        }
                    }
                    if (go == 39) {
                        if (!this.map.hasTile(x + 2, y, this.layer) && !this.map.hasTile(x + 1, y - 1, this.layer)) {
                            return true;
                        }
                    }
                    if (go == 40) {
                        if (!this.map.hasTile(x - 1, y + 1, this.layer) && !this.map.hasTile(x, y + 1, this.layer) && !this.map.hasTile(x + 1, y + 1, this.layer)) {
                            return true;
                        }
                    }
                    return false;
                case 90:
                    if (go == 37) {
                        if (!this.map.hasTile(x - 2, y + 1, this.layer) && !this.map.hasTile(x - 2, y, this.layer) && !this.map.hasTile(x - 2, y - 1, this.layer)) {
                            return true;
                        }
                    }
                    if (go == 39 && !this.map.hasTile(x, y - 1, this.layer) && !this.map.hasTile(x, y + 1, this.layer) && !this.map.hasTile(x + 1, y, this.layer)) {
                        return true;
                    }
                    if (go == 40 && !this.map.hasTile(x, y + 1, this.layer) && !this.map.hasTile(x - 1, y + 2, this.layer)) {
                        return true;
                    }
                    return false;
                case -180:
                    if (go == 37 && !this.map.hasTile(x - 2, y, this.layer) && !this.map.hasTile(x - 3, y - 1, this.layer)) {
                        return true;
                    }
                    if (go == 39 && !this.map.hasTile(x, y, this.layer) && !this.map.hasTile(x + 1, y - 1, this.layer)) {
                        return true;
                    }
                    if (go == 40 && !this.map.hasTile(x, y, this.layer) && !this.map.hasTile(x - 1, y + 1, this.layer) && !this.map.hasTile(x - 2, y, this.layer)) {
                        return true;
                    }
                    return false;
                case -90:
                    if (go == 37 && !this.map.hasTile(x - 1, y, this.layer) && !this.map.hasTile(x - 2, y - 1, this.layer) && !this.map.hasTile(x - 1, y - 2, this.layer)) {
                        return true;
                    }
                    if(go == 39 && !this.map.hasTile(x+1,y,this.layer)&&!this.map.hasTile(x+1,y-1,this.layer)&&!this.map.hasTile(x+1,y-2,this.layer)){
                        return true;
                    }
                    if(go == 40 && !this.map.hasTile(x-1,y,this.layer)&&!this.map.hasTile(x,y+1,this.layer)){
                        return true;
                    }
                    return false;
            }
        }
    }


}
