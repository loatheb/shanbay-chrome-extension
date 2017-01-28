// 其它函数依赖

var qsa = document.querySelectorAll.bind(document);

var qs = document.querySelector.bind(document);

var getArray = Function.prototype.bind.call(Array.prototype.slice);
