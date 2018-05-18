# 保留几位小数
* 0依赖，支持，amd，commonjs，browser
```
const keepDecimal = require('zhf.keep-decimal');

keepDecimal(); // '0.00'
keepDecimal(''); // ''
keepDecimal(0); // '0.00'
keepDecimal('0'); // '0.00'
keepDecimal('哈哈'); // ''
keepDecimal('1哈哈1'); // '1.10'
keepDecimal('哈哈2'); // '2.00'
keepDecimal('-哈哈2'); // '-2.00'
keepDecimal('-.哈.00.哈2'); // '-0.20'
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
```
