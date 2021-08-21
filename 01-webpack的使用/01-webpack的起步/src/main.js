// 1.使用commonJs规范
const {add, nul} = require('./mathUtils.js')
// 浏览器不认识commenJs代码
console.log(add(20, 30));
console.log(nul(20, 30));
//2，使用ES6规范
import {name, age, height} from "./info";

console.log(name);
console.log(age);
console.log(height);