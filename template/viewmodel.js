/**
 * @summary 生成ViewModel的模板脚本
 */
var dataModel = require("../model/model.js");
var util = require("../lib/util.js");

function ViewModelTemplate() { }

/**
 * 
 * @summary 产生ViewModel模板数据
 */
ViewModelTemplate.prototype.getTemplate = function () {
    //viewmodel属性
    var viewModelProperties = [];
    //viewmodel包含方法
    var viewModelFunctions = [];
    for (var viewmodelName in dataModel) {
        if (!dataModel.hasOwnProperty(viewmodelName))
            continue;
        var viewmodel = dataModel[viewmodelName];
        viewModelProperties.push("function " + viewmodelName + "(data) {\r");
        viewModelProperties.push("   var self = this;\r");
        for (var viewmodelPropertyName in viewmodel) {
            if (!viewmodel.hasOwnProperty(viewmodelPropertyName))
                continue;
            var propertyValue = viewmodel[viewmodelPropertyName];
            if (util.isArray(propertyValue)) {
                viewModelProperties.push("   self." + viewmodelPropertyName + " = ko.observableArray(data." + viewmodelPropertyName + ");\r");
            } else if (typeof (propertyValue) == "function") {
                viewModelFunctions.push(viewmodelName + ".prototype." + viewmodelPropertyName + "=function(){\r");
                viewModelFunctions.push("    var self = this;\r};");
            } else {
                viewModelProperties.push("   self." + viewmodelPropertyName + " = ko.observable(data." + viewmodelPropertyName + ");\r");
            }
        }
        viewModelProperties.push("}\r");
    }

    return viewModelProperties.join("") + "\r" + viewModelFunctions.join("");
};

module.exports = new ViewModelTemplate();