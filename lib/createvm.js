var program = require('commander');
var dataModel = require('../model/model.js');
program
    .version('1.0.0')
    .parse(process.argv);

var pname = program.args[0];

var createVM = !function (p) {
    console.log(p);
}(pname);

module.exports = createVM;