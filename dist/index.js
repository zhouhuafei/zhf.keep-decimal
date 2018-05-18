'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (name, factory) {
    if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined') {
        // nodejs - commonjs canon
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // requirejs - amd canon
        define(factory);
    } else if (window) {
        // window - browser canon
        if (Object.prototype.toString.call(window.zhf).slice(8, -1).toLowerCase() !== 'object') {
            window.zhf = {};
        }
        window.zhf[name] = factory();
    }
})('keepDecimal', function () {
    /**
     * @description 保留几位小数
     * @param {String} value - 数字
     * @param {Number} place - 保留几位小数(默认两位)
     * @param {Boolean} isFormat - 是否格式化(默认格式化)
     * */
    function keepDecimal() {
        var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0';
        var place = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
        var isFormat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        // 返回结果
        var result = '';
        // 转成字符串
        value = value.toString();
        // 格式化成金额形式的正则
        var format = /(?!\b)(?=(\d{3})+$)/g;
        // 是否是负数
        var isNegative = value[0] === '-';
        // 匹配数字
        var arr = value.match(/\d+/g);
        if (!arr) {
            return result;
        }
        arr[0] = Number(arr[0]).toString(); //  arr如果存在，则把数组里第一项中的，0000变成0，0001变成1，0123变成123
        var first = arr[0];
        if (place === 0) {
            // 保留0位
            result = first;
        } else {
            var second = arr[1];
            if (second === undefined) {
                // 小数点后面没有数字
                second = createZero(place);
            } else {
                // 小数点后面有多位或者少位数字
                var secondLen = second.length;
                if (secondLen > place) {
                    second = second.substring(0, place);
                }
                if (secondLen < place) {
                    second += createZero(place - secondLen);
                }
            }
            result = first + '.' + second;
        }
        if (result && isFormat) {
            var _arr = result.split('.');
            _arr[0] = _arr[0].replace(format, ',');
            result = _arr.join('.');
        }
        result = '' + (isNegative && Number(result) !== 0 ? '-' : '') + result;
        return result;
    }

    function createZero(num) {
        var arr = [];
        for (var i = 0; i < num; i++) {
            arr.push('0');
        }
        return arr.join('');
    }

    return keepDecimal;
});