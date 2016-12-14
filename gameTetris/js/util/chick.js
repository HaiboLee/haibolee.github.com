class Chick {

    constructor(map, layer, d, r) {
        this.map = map;
        this.layer = layer;
        this.d = d;
        this.r = r;
    }

    chickAngle(box) {
        var x = box.x / this.d;
        var y = box.y / this.d;
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

    chickMove(box, go) {
        var x = box.x / this.d;
        var y = box.y / this.d;
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
                    if (go == 39 && !this.map.hasTile(x + 1, y, this.layer) && !this.map.hasTile(x + 1, y - 1, this.layer) && !this.map.hasTile(x + 1, y - 2, this.layer)) {
                        return true;
                    }
                    if (go == 40 && !this.map.hasTile(x - 1, y, this.layer) && !this.map.hasTile(x, y + 1, this.layer)) {
                        return true;
                    }
                    return false;
            }
        }
    }

    chickLine(box) {
        var x = this.r / this.d;
        var y = box.y / this.d;
        var n = game.width / this.d - x;
        var yArray = [];
        if (box.key == 'l') {
            if (box.angle === 0) {
                if (this.ck(x, y - 1, n)) {
                    yArray.push(y - 1);
                }
                if (this.ck(x, y, n)) {
                    yArray.push(y)
                }
                if (this.ck(x, y + 1, n)) {
                    yArray.push(y + 1)
                }
                return yArray;
            } else if (box.angle === 90 || box.angle == -90) {
                if (this.ck(x, y, n)) {
                    yArray.push(y)
                }
                if (this.ck(x, y - 1, n)) {
                    yArray.push(y - 1)
                }
                return yArray;
            } else if (box.angle === -180) {
                if (this.ck(x, y, n)) {
                    yArray.push(y)
                }
                if (this.ck(x, y - 1, n)) {
                    yArray.push(y - 1)
                }
                if (this.ck(x, y - 2, n)) {
                    yArray.push(y - 2)
                }
                return yArray;
            }

        }
        if (box.key == 'o') {
            if (this.ck(x, y, n)) {
                yArray.push(y);
            }
            if (this.ck(x, y - 1, n)) {
                yArray.push(y - 1);
            }
            return yArray;
        }
        if (box.key == 'i') {
            switch (box.angle) {
                case 0:
                    if (this.ck(x, y + 1, n)) {
                        yArray.push(y + 1);
                    }
                    if (this.ck(x, y, n)) {
                        yArray.push(y);
                    }
                    if (this.ck(x, y - 1, n)) {
                        yArray.push(y - 1);
                    }
                    if (this.ck(x, y - 2, n)) {
                        yArray.push(y - 2);
                    }
                    return yArray;
                case 90:
                    if(this.ck(x,y,n)){
                        yArray.push(y);
                    }
                    return yArray;

            }
        }
        if(box.key == 't'){
            switch (box.angle){
                case 0:
                    if (this.ck(x, y, n)) {
                        yArray.push(y);
                    }
                    if (this.ck(x, y - 1, n)) {
                        yArray.push(y - 1);
                    }
                    return yArray;
                case 90:
                    if (this.ck(x, y + 1, n)) {
                        yArray.push(y + 1);
                    }
                    if (this.ck(x, y, n)) {
                        yArray.push(y);
                    }
                    if (this.ck(x, y - 1, n)) {
                        yArray.push(y - 1);
                    }
                    return yArray;
                case -90:
                    if (this.ck(x, y, n)) {
                        yArray.push(y);
                    }
                    if (this.ck(x, y - 1, n)) {
                        yArray.push(y - 1);
                    }
                    if (this.ck(x, y - 2, n)) {
                        yArray.push(y - 2);
                    }
                    return yArray;
                case -180:
                    if (this.ck(x, y, n)) {
                        yArray.push(y);
                    }
                    if (this.ck(x, y - 1, n)) {
                        yArray.push(y - 1);
                    }
                    return yArray;
            }
        }

    }

    ck(a, b, c) {
        for (var i = a; i < c; i++) {
            if (!this.map.hasTile(i, b, this.layer)) {
                return false;
            }
        }
        return true;
    }


}
