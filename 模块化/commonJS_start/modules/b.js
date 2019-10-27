let b = req("./a.js");
console.log('b =', b.name);

function req(mod) {
  const path = require("path");
  const fs = require("fs");

  let filename = path.join(__dirname, mod);
  let content = fs.readFileSync(filename, "utf8");
  /**
   * 最后一个参数是函数的内容体,相当于以下函数
   *function fn(exports, module, require, __dirname, __filename) {
   *  module.exports = '这是另外一个文件导出的内容'
   *  return module.exports
   *}
   */
  
  let fn = new Function(
    "exp",
    "require",
    "module",
    "__filename",
    "__dirname",
    content + "\n return module.exp;"
  );
  let module = {
    exp: {}
  }

  return fn(module.exp, req, module, __filename, __dirname);
}
