Element.prototype.remove = Element.prototype.remove || function(){
  this.parentNode.removeChild(this);
}

Element.prototype.removeSibs = Element.prototype.removeSibs ||  function () {
    var self = this;
    var par = this.parentNode;
    while (par.firstChild) {
      par.removeChild(par.firstChild);
    }
    par.appendChild(this);
  }

Element.prototype.removeTo = Element.prototype.removeTo || function (finalNode) {
  var node = this;
  while ( node !== finalNode) {
    node.removeSibs();
    node = node.parentNode;
  }
}

Element.prototype.removeOthers = Element.prototype.removeOthers || function (finalNode) {
  while (finalNode.firstChild) {
    finalNode.removeChild(finalNode.firstChild);
  }
  finalNode.appendChild(this);
}

Element.prototype.childOnly = Element.prototype.childOnly || function () {
  var num = 0;
  var nameLists = Array.prototype.slice.call(arguments);
  var lists = Array.prototype.slice.call(this.childNodes);
  lists.forEach(function(ele, index, arr){
    var name = ele.nodeName.toLowerCase();
    if (nameLists.indexOf(name) === -1 ) {
      ele.remove();
      num++;
    }
  })
  return num;
}
Element.prototype.removeOnly = Element.prototype.removeOnly || function(finalNode){
  var self = this.cloneNode(true);
  while(finalNode.firstChild) {
    finalNode.removeChild(finalNode.firstChild);
  }
  finalNode.appendChild(self);
}
Element.prototype.css = Element.prototype.css || function () {
  var property = arguments[0];
  var value = arguments[1];

  this.style[property] = value;
}








var advertise;
var height = window.innerHeight;
var articleHeight = document.getElementById('article').clientHeight;



function handle() {
  document.getElementById('article').removeOnly(document.body);
  document.getElementsByTagName('h1')[0].removeSibs();
  document.querySelector('.gs-container > .content__main-column--article').removeSibs();
  document.getElementsByClassName('content__meta-container')[0].remove();
  document.getElementsByClassName('submeta')[0].remove();
  advertise = document.getElementsByClassName('content__article-body')[0].childOnly('p', 'figure');

  var lists = document.getElementsByClassName('content__main-column');
  Array.prototype.slice.call(lists).forEach(function(ele, index, arr){
    ele.css('margin', '0 auto');
  })
  cutArticle();
}





function cutArticle() {
  var bodyHeight = height + 'px';
  var bodyStyle = document.body.style;
  console.log(height)

  bodyStyle.cssText = 'height: ' + bodyHeight + ';';

  var article = document.getElementById('article');
  var head = article.getElementsByTagName('header')[0];
  var content = article.getElementsByClassName('content__main')[0];

  article.style.height = (height - 30) + 'px';
  article.style.paddingBottom = '0px';
  article.style.overflow = 'hidden';

  head.style.position = 'relative';
  content.style.position = 'relative';
  //将body设置一个属性

  createSide();

}

function createSide() {
  var side = document.createElement('div');
  var node = document.body;
  side.style.cssText = 'postition: absolute; bottom: 0px;text-align: center;';

  var pages = ~~(articleHeight / (height - 30));

  console.log(pages);

  var list = '<ul style=" display: inline-block;  margin: 0 auto;">';
  for (let i = 0; i < pages; i++) {
    list +='<li style="display: inline-block;"><button>'+ (i + 1)+'</button></li>';
  }
  list +='</ul>';
  side.innerHTML = list;
  node.appendChild(side);

  let lists = document.querySelectorAll('ul button');
  let _lists = Array.prototype.slice.call(lists);
  _lists.forEach(function(ele, index, arr){
    ele.onclick = function(event){
      console.log(index);
      showPage(index);
    }
  })

}
function showPage(index){
  var article = document.getElementById('article');
  var head = article.getElementsByTagName('header')[0];
  var content = article.getElementsByClassName('content__main')[0];
  var step = height - 30;
  var headerHeight = head.clientHeight;
  var contentShow = step - headerHeight;
  switch (index) {
    case 0:
      head.style.top = '0px';
      content.style.top = '0px';
      break;
    default:
      head.style.top = '-' + height + 'px';
      content.style.top = '-' + step*index +  'px';
  }
}
