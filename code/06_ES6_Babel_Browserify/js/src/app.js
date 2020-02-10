//引入模块:import

//如果使用了分别暴露,统一暴露,就使用下面的语法引入
import {foo,bar} from './module1.js'
import {demo,demo2} from './module2.js'

//只有使用了默认暴露,才能使用下面的语法
import module3 from './module3.js'

//引入第三方库
import $ from 'jquery'

foo()
bar()
demo()
demo2()

console.log(module3.stuName);
module3.setStuName('wade4')
console.log(module3.stuName);

//使用第三方库
$('body').css('background','skyblue')
