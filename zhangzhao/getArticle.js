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
var advertise;
window.onload = function(){
  var time = 'executeTime';
  console.time(time);
  handle();
  while(advertise) {
    advertise = document.getElementsByClassName('content__article-body')[0].childOnly('p', 'figure');
    console.log(advertise);
  }
  console.timeEnd(time);
}
function handle() {
  document.getElementById('article').removeTo(document.body);
  document.getElementsByTagName('h1')[0].removeSibs();
  document.querySelector('.gs-container > .content__main-column--article').removeSibs();
  document.getElementsByClassName('content__meta-container')[0].remove();
  document.getElementsByClassName('submeta')[0].remove();
  advertise = document.getElementsByClassName('content__article-body')[0].childOnly('p', 'figure');
  console.log(advertise)
}
