'use strict';

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _module = require('./module1');

var _module2 = require('./module2');

var _module3 = _interopRequireDefault(_module2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _module.func1)(); /*
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

console.log('----');
(0, _module.func2)();
console.log('----');
(0, _module3.default)('haha');
(0, _jquery2.default)('body').css('background', 'red');