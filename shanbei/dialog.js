//created by zhangzhao
// dialog 构造函数
function Dialog(){
  var body = document.body;

  this.dialog = document.createElement('div');
  this.dialog.className = 'dialog';

  body.appendChild(this.dialog);

  this.property = {};

  this.addContent = function (html) {
    this.dialog.innerHTML = html;
    return this;
  }
  this.hide = function () {
    this.dialog.style.display = 'none';
    this.dialog.innerHTML = '';
  }
  this.show = function () {
    this.dialog.style.display = 'block';
  }
  this.pos = function (x, y) {

    var dialogX = x;
    var dialogY = y + 20;
    var width = this.dialog.clientWidth;
    var height = this.dialog.clientHeight;
    var screenX = window.innerWidth;
    var screenY = window.innerHeight;

    this.dialog.css('maxWidth', screenX).css('maxHeight', screenY);

    if (screenX - dialogX < width) {
      //屏幕右侧剩余位置不够dialog
      var restX = width - (screenX - dialogX);
      dialogX = dialogX - restX - 20;
    }
    if (screenY - dialogY < height) {
      //屏幕上侧位置不够dialog
      dialogY = dialogY - 40 - height;
    }

    this.dialog.css('left', dialogX + 'px').css('top', dialogY + 'px');
  }
}
