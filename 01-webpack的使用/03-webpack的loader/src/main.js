const { add, mul } = require('./js/mathFunction.js')
console.log(add(10,20))
console.log(mul(10,20))

import * as all from './js/person'

console.log(all.name);
console.log(all.age);
console.log(all.high);
// console.log(all.mul(10, 30))
require('./css/normal.css')
// 4.依赖于less文件
require('./css/special.less')
document.writeln('<h2>你好啊，张森云！</h2>')