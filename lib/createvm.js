/**
 * 
 * @summary 生成viewmodel文件类
 */
var program = require("commander");
var viewModelTemplate = require("../template/viewmodel.js");
var fs = require("fs");

program
    .version("1.0.0")
    .parse(process.argv);

var fileName = program.args[0];//生成的文件名称

/**
 * 
 * @summary 生成文件入口
 */
function CreateVM(name) {
    var templateData = viewModelTemplate.getTemplate();
    fs.writeFile(name + ".js", templateData, function (err) {
        if (err) throw err;
        console.log("生成文件==>" + name + ".js 成功");
    });
}

module.exports = new CreateVM(fileName);