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

        value = value.toString();
        var format = /(?!\b)(?=(\d{3})+$)/;
        // 是否是负数
        var isNegative = value[0] === '-';
        // 匹配数字
        var arr = value.match(/\d+/g);
        if (!arr) {
            return '';
        }
        value = '' + (isNegative ? '-' : '') + arr.join('.');
        var result = value;
        var baseNum = Math.pow(10, place);
        if (Number(place) !== 0) {
            result = (Math.floor(parseFloat(value) * baseNum) / baseNum).toFixed(place);
        }
        if (isFormat) {
            var _arr = result.split('.');
            _arr[0] = _arr[0].replace(format, ',');
            result = _arr.join('.');
        }
        return result;
    }

    return keepDecimal;
});