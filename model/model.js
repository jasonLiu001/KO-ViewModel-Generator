/**
 * 
 * @summary 生成ko viewmodel对应的数据描述
 */
var dataModel = {
    //key值为viewmodel对象的名称
    "mainViewModel": {
        title: '',
        summary: '',
        detailList: [],
        getData: new Function()//viewmodel中需要生成的方式
    },
    "detailViewModel": {
        detailTitle: '',
        detailSummary: ''
    }
};

module.exports = dataModel;