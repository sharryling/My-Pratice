/*
    npm i -g babel-cli(命令行) browserify(commonjs_browserify)
    npm i bebel-preset-es2015(es6语法 -> es5) -S -D

    babel 一开始会先去找.babelrc文件找配置
    {
        "presets": ["es2015"]  // 即是要转换的是es6, 例如其他的react（转换jsx -> js）
    }

    编译：
        - babel modules/ -d build
        - browserify build/app.js -o dist/bundle.js
*/
import $ from 'jquery'
import {func1,func2} from './module1'
import func3 from './module2'
func1()
console.log('----')
func2()
console.log('----')
func3('haha')
$('body').css('background', 'red')
