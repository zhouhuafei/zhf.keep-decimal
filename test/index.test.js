const keepDecimal = require('../dist/index.min');

test(`keepDecimal(10, 3); // '10.000'`, () => {
    expect(keepDecimal(10, 3)).toEqual('10.000');
});

test(`keepDecimal(8, 2); // '8.00'`, () => {
    expect(keepDecimal(8, 2)).toEqual('8.00');
});
