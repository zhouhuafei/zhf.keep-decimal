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
        window[name] = factory();
    }
})('keepDecimal', function () {
    /**
     * @description 保留几位小数
     * @param {Number} value - 数字
     * @param {Number} place - 保留几位小数(默认两位)
     * @param {Boolean} isFormat - 是否格式化(默认格式化)
     * */
    function keepDecimal() {
        var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var place = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
        var isFormat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        var format = /(?!\b)(?=(\d{3})+$)/;
        var result = value;
        var baseNum = Math.pow(10, place);
        if (Number(place) !== 0) {
            result = (Math.floor(parseFloat(value) * baseNum) / baseNum).toFixed(place);
        }
        if (isFormat) {
            var arr = result.split('.');
            arr[0] = arr[0].replace(format, ',');
            result = arr.join('.');
        }
        return result;
    }

    return keepDecimal;
});