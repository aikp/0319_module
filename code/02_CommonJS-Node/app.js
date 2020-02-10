//引入模块
let module1 = require('./modules/module1')
let module2 = require('./modules/module2')
let module3 = require('./modules/module3')

//引入第三方库
let uniq = require('uniq')

//使用模块
//如何使用模块,取决于模块暴露的是什么
console.log(module1.data);
module1.foo()
module1.bar()
module2()
console.log(module3.stuArr);
console.log(module3.schoolObj);

let result = uniq([1,1,22,3,4,5,66,77,886,7,4,3,22,1,2,3])
console.log(result)