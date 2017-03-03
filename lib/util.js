/**
 * 
 * @summary 操作工具类 
 */
function Util() { }

/**
 * 
 * @summary 判断是否是数组类型
 * @returns {} 
 */
Util.prototype.isArray = function(o) {
    return Object.prototype.toString.call(o) === '[object Array]';
};

module.exports = new Util;