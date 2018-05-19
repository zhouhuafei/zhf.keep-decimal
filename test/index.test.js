const keepDecimal = require('../dist/index.min');

test(`保留几位小数`, () => {
    expect(keepDecimal()).toEqual('');
    expect(keepDecimal('')).toEqual('');
    expect(keepDecimal(0)).toEqual('0.00');
    expect(keepDecimal('0')).toEqual('0.00');
    expect(keepDecimal('-0')).toEqual('0.00');
    expect(keepDecimal('哈哈')).toEqual('');
    expect(keepDecimal('1哈哈1')).toEqual('1.10');
    expect(keepDecimal('哈哈2')).toEqual('2.00');
    expect(keepDecimal('-哈哈2')).toEqual('-2.00');
    expect(keepDecimal('-.哈.00.哈2')).toEqual('0.00');
    expect(keepDecimal('', 0)).toEqual('');
    expect(keepDecimal('哈哈', 0)).toEqual('');
    expect(keepDecimal('1哈哈1', 0)).toEqual('1');
    expect(keepDecimal('哈哈2', 0)).toEqual('2');
    expect(keepDecimal('-哈哈2', 0)).toEqual('-2');
    expect(keepDecimal('-.哈.00.哈2', 0)).toEqual('0');
    expect(keepDecimal(8, 2)).toEqual('8.00');
    expect(keepDecimal(10, 3)).toEqual('10.000');
    expect(keepDecimal('-0001.01', 3)).toEqual('-1.010');
    expect(keepDecimal('0001.01', 4)).toEqual('1.0100');
    expect(keepDecimal('10.2', 2)).toEqual('10.20');
    expect(keepDecimal('1000000', 2, true)).toEqual('1,000,000.00');
    expect(keepDecimal('1000000.00', -1, true)).toEqual('1,000,000');
});
