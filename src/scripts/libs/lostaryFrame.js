/**
 * Created by Administrator on 2016/9/22.
 */
module.exports = changeLostarage;

function changeLostarage(num, name, value) {
    var argLength = arguments.length;
    if (num == 1) {
        if (argLength == 1) {
            return localStorage;
        }
        if (argLength == 2) {
            return localStorage.getItem(name);
        }
        if (argLength == 3) {
            if (value == "json") {
                var localStr = localStorage.getItem(name);
                return JSON.parse(localStr);
            } else if (value == "number") {
                var localStr = localStorage.getItem(name);
                return parseInt(localStr);
            } else if (value == "string") {
                return localStorage.getItem(name);
            } else if (value == "date") {
                var localStr = localStorage.getItem(name);
                return new Date(localStr);
            } else if (typeof value == "object") {
                if (value instanceof Date) {
                    str = value + "";
                } else {
                    var str = localStorage.getItem(name);
                    var arr = [];
                    if (str == null) {
                        str = "";
                    } else {
                        var obj = JSON.parse(str);
                        arr = obj;
                    }
                    arr.push(value);
                    str = JSON.stringify(arr);
                }
                localStorage.setItem(name, str);
            } else {
                localStorage.setItem(name, value);
            }
        }
    }
    if (num == 0) {
        if (argLength == 1) {
            localStorage.clear()
        } else {
            for (var i = 1; i < argLength; i++) {
                localStorage.removeItem(arguments[i]);
            }
        }
    }
}

function changeLocalhost(num, name, value) {
    var argLength = arguments.length;
    if (num == 1) {
        var type = typeof value;
        if (type == "object") {
            var str;
            if (value instanceof Date) {
                str = value + "&&" + "type:" + type;
            }
        }
    }
    if (num == 0) {
        if (argLength == 1) {
            localStorage.clear()
        } else {
            for (var i = 1; i < argLength; i++) {
                localStorage.removeItem(arguments[i]);
            }
        }
    }
}
