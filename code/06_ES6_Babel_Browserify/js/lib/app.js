'use strict';

var _module = require('./module1.js');

var _module2 = require('./module2.js');

var _module3 = require('./module3.js');

var _module4 = _interopRequireDefault(_module3);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//只有使用了默认暴露,才能使用下面的语法
//引入模块:import

//如果使用了分别暴露,统一暴露,就使用下面的语法引入
(0, _module.foo)();

//引入第三方库

(0, _module.bar)();
(0, _module2.demo)();
(0, _module2.demo2)();

console.log(_module4.default.stuName);
_module4.default.setStuName('wade4');
console.log(_module4.default.stuName);

//使用第三方库
(0, _jquery2.default)('body').css('background', 'skyblue');