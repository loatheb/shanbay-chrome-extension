// 查询单词的实例的构造函数
var Translater = function (word) {
    this.word = word;
    this.response = this.word in this.cache ?
        JSON.parse(this.cache[this.word]) :
        JSON.parse(this.queryUrl().getResponse());
};

Translate.prototype.cache = {};

Translate.prototype.baseUrl = 'https://api.shanbay.com/bdc/search/?word=';

Translate.prototype.queryUrl = function() {
    this.url = this.baseUrl + this.word;
    return this;
};

Translate.prototype.getResponse = function() {
    var self = this;
    var xhr = new XMLHttpRequest();
    xhr.open('get', this.url, false);
    // 异步进行ajax请求
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304)) {
            //2开头表示返回正常 304返回浏览器缓存
            self.cache[self.word] = xhr.response;
            // 将结果存放在原型中
            // 在原型存放cache
        }
    };
    xhr.send(null); //get方法发送null

    return xhr.response;
};

export default Translater;
