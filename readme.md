# 保留几位小数
```
const keepDecimal = require('zhf.keep-decimal');

keepDecimal(); // ''
keepDecimal(''); // ''
keepDecimal(0); // '0.00'
keepDecimal('0'); // '0.00'
keepDecimal('-0'); // '0.00'
keepDecimal('-0.01'); // '-0.01'
keepDecimal('-0.01', 1); // '0.0'
keepDecimal('-.a.1.0...bc...0.....1..23....465.....798', 0); // '0'
keepDecimal('哈哈'); // ''
keepDecimal('1哈哈1'); // '1.10'
keepDecimal('哈哈2'); // '2.00'
keepDecimal('-哈哈2'); // '-2.00'
keepDecimal('-.哈.00.哈2'); // '0.00'
keepDecimal('', 0); // ''
keepDecimal('哈哈', 0); // ''
keepDecimal('1哈哈1', 0); // '1'
keepDecimal('哈哈2', 0); // '2'
keepDecimal('-哈哈2', 0); // '-2'
keepDecimal('-.哈.00.哈2', 0); // '0'
keepDecimal(8, 2); // '8.00'
keepDecimal(10, 3); // '10.000'
keepDecimal('-0001.01', 3); // '-1.010'
keepDecimal('0001.01', 4); // '1.0100'
keepDecimal('10.2', 2); // '10.20'
keepDecimal('1000000', 2, true); // '1,000,000.00'
keepDecimal('1000000.00', -1, true); // '1,000,000'
```
