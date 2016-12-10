class Chick {
    chickAngle(box, d, map, layer) {
        var x = box.x / d;
        var y = box.y / d;
        if (box.key == 'l') {
            switch (box.angle) {
                case 0:
                    if (map.hasTile(x - 2, y - 1, layer) || map.hasTile(x - 2, y, layer) || map.hasTile(x - 2, y + 1, layer) || map.hasTile(x, y - 1, layer)) {
                        return false;
                    }
                    return true;
                case 90:
                    if (map.hasTile(x - 2, y - 2, layer) || map.hasTile(x - 1, y - 2, layer) || map.hasTile(x, y - 2, layer) || map.hasTile(x, y, layer)) {
                        return false;
                    }
                    return true;
                case -180:
                    if (map.hasTile(x + 1, y - 2, layer) || map.hasTile(x + 1, y - 1, layer) || map.hasTile(x + 1, y, layer) || map.hasTile(x - 1, y, layer)) {
                        return false;
                    }
                    return true;
                case -90:
                    if (map.hasTile(x - 1, y + 1, layer) || map.hasTile(x, y + 1, layer) || map.hasTile(x + 1, y + 1, layer) || map.hasTile(x - 1, y - 1, layer)) {
                        return false;
                    }
                    return true;
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
                        if (map.hasTile(x - 2, y - 1, layer) || map.hasTile(x - 2, y, layer) || map.hasTile(x - 2, y + 1, layer)) {
                            return false;
                        }
                        return true;
                    }
                    if (go == 39) {
                        if (map.hasTile(x, y, layer) || map.hasTile(x, y - 1, layer) || map.hasTile(x + 1, y + 1, layer)) {
                            return false;
                        }
                        return true;
                    }
                    if (go == 40) {
                        if (map.hasTile(x, y + 2, layer) || map.hasTile(x - 1, y + 2, layer)) {
                            return false;
                        }
                        return true;
                    }
                case 90:
                    if (go == 37) {
                        if (map.hasTile(x - 3, y, layer) || map.hasTile(x - 3, y - 1, layer)) {
                            return false;
                        }
                        return true;
                    }
                    if (go == 39) {
                        if (map.hasTile(x + 1, y - 1, layer) || map.hasTile(x - 1, y, layer)) {
                            return false;
                        }
                        return true;
                    }
                    if (go == 40) {
                        if (map.hasTile(x, y, layer) || map.hasTile(x - 1, y, layer) || map.hasTile(x - 2, y + 1, layer)) {
                            return false;
                        }
                        return true;
                    }
                case -180:
                    if (go == 37) {
                        if (map.hasTile(x - 1, y, layer) || map.hasTile(x - 1, y - 1, layer) || map.hasTile(x - 2, y - 2, layer)) {
                            return false;
                        }
                        return true;
                    }
                    if (go == 39) {
                        if (map.hasTile(x + 1, y, layer) || map.hasTile(x + 1, y - 1, layer) || map.hasTile(x + 1, y - 2, layer)) {
                            return false;
                        }
                        return true;
                    }
                    if (go == 40) {
                        if (map.hasTile(x, y + 1, layer) || map.hasTile(x - 1, y - 1, layer)) {
                            return false;
                        }
                        return true;
                    }
                case -90:
                    if (go == 37) {
                        if (map.hasTile(x, y - 1, layer) || map.hasTile(x - 2, y, layer)) {
                            return false;
                        }
                        return true;
                    }
                    if (go == 39) {
                        if (map.hasTile(x + 2, y, layer) || map.hasTile(x + 2, y - 1, layer)) {
                            return false;
                        }
                        return true;
                    }
                    if (go == 40) {
                        if (map.hasTile(x, y + 1, layer) || map.hasTile(x - 1, y + 1, layer) || map.hasTile(x + 1, y + 1, layer)) {
                            return false;
                        }
                        return true;
                    }


            }
        }
    }


}
