const strGetNum = require('zhf.str-get-num');
const moneyFormat = require('zhf.money-format');

// 生成由0组合的的字符串
function createZero(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr.push('0');
    }
    return arr.join('');
}

/**
 * @description 保留几位小数
 * @param {String} value - 数字
 * @param {Number} place - 保留几位小数(默认两位)
 * @param {Boolean} isFormat - 是否格式化(默认格式化)
 * */
function keepDecimal(value = '', place = 2, isFormat = false) {
    value = strGetNum(value.toString()); // 把参数转成字符串后提取出数字部分
    if (value === '') { // 处理后还为空，则返回空
        return '';
    }
    const isNegative = value[0] === '-';
    const arr = value.split('.');
    console.log(arr);
    const first = arr[0];
    let result = '';
    if (place <= 0) { // 保留0位，返回第一个
        result = first;
    } else { // 保留多位小数的处理
        let second = arr[1];
        if (second === undefined) { // 小数点后面没有数字
            second = createZero(place);
        } else { // 小数点后面有多位或者少位数字
            const secondLen = second.length;
            if (secondLen > place) {
                second = second.substring(0, place);
            }
            if (secondLen < place) {
                second += createZero(place - secondLen);
            }
        }
        arr[1] = second;
        result = arr.join('.');
    }
    if (isNegative && Number(result) === 0) {
        result = result.substring(1);
    }
    if (first.length > 3 && isFormat) {
        result = moneyFormat(result);
    }
    return result;
}

module.exports = keepDecimal;
