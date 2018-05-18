(function (name, factory) {
    if (typeof exports === 'object' && typeof module !== 'undefined') { // nodejs - commonjs canon
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) { // requirejs - amd canon
        define(factory);
    } else if (window) { // window - browser canon
        if (Object.prototype.toString.call(window.zhf).slice(8, -1).toLowerCase() !== 'object') {
            window.zhf = {};
        }
        window.zhf[name] = factory();
    }
})('keepDecimal', function () {
    /**
     * @description 保留几位小数
     * @param {Number} value - 数字
     * @param {Number} place - 保留几位小数(默认两位)
     * @param {Boolean} isFormat - 是否格式化(默认格式化)
     * */
    function keepDecimal(value = 0, place = 2, isFormat = false) {
        const format = /(?!\b)(?=(\d{3})+$)/;
        let result = value;
        const baseNum = Math.pow(10, place);
        if (Number(place) !== 0) {
            result = (Math.floor(parseFloat(value) * baseNum) / baseNum).toFixed(place);
        }
        if (isFormat) {
            const arr = result.split('.');
            arr[0] = arr[0].replace(format, ',');
            result = arr.join('.');
        }
        return result;
    }

    return keepDecimal;
});
