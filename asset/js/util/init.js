window.onload = function () {
    document.oncontextmenu = function (e) {
        return false;
    }

    //document.onkeydown = function (e) {
    //    e = window.event || e;
    //    let keycode = e.keyCode || e.which;
    //    if (keycode = 116) {
    //        if (window.event) {// ie
    //            try {
    //                e.keyCode = 0;
    //            } catch (e) {
    //            }
    //            e.returnValue = false;
    //        } else {// ff
    //            e.preventDefault();
    //        }
    //    }
    //}
}
