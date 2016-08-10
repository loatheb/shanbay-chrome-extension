function Translate (word) {
  // 写一个翻译类
  // 工厂模式 存放基础内容
  this.word = word;
  this.response = this.word in this.cashe
                  ? this.cashe[this.word]
                  : this.queryUrl().getResponse();
  // this.init = function (){
  //   //启动函数
  //   //如果在cashe中存在，则返回存在的结果，如果不存在，发送ajax请求
}
// 原型存放缓存，url，以及ajax操作
Translate.prototype.cashe = {};
//定义cashe
Translate.prototype.baseUrl =  'https://api.shanbay.com/bdc/search/?word=';
//base URL
Translate.prototype.queryUrl = function () {
  this.url = this.baseUrl + this.word;
  // return 连缀
  return this;
}
//URI编码
Translate.prototype.getResponse = function () {
  var self = this;
  var xhr = new XMLHttpRequest();
  xhr.open('get', this.url, false);
  // 异步进行ajax请求
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) ) {
      //2开头表示返回正常 304返回浏览器缓存
      console.log('ajax here');
      self.cashe[self.word] = xhr.response;
      // 将结果存放在原型中
      // 在原型存放cashe
    }
  }
  xhr.send(null);//get方法发送null

  return xhr.response;
}


var word1 = new Translate('back');
console.log(word1.response);
var word2 = new Translate('rest');
console.log(word2.response);
// console.log(word2.response);
var word3 = new Translate('rest');
console.log(word3.response);
// console.log(word2);
// console.log(word2.response);
// console.log(word1);
// console.log(word1.response);
console.log(word2)
