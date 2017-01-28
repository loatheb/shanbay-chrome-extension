// node 节点依赖

Element.prototype.remove = Element.prototype.remove || function() {
    this.parentNode.removeChild(this);
};
// 删除自己

Element.prototype.removeChildren = Element.prototype.removeChildren || function() {
    while (this.firstChild) {
        this.remove(this.firstChild);
    }
};
// 删除该节点下的所有节点

Element.prototype.removeSibs = Element.prototype.removeSibs || function() {
    var par = this.parentNode;
    while (par.firstChild) {
        par.removeChild(par.firstChild);
    }
    par.appendChild(this);
};
// 删除所有兄弟

Element.prototype.removeTo = Element.prototype.removeTo || function(finalNode) {
    var node = this;
    while (node !== finalNode) {
        node.removeSibs();
        node = node.parentNode;
    }
};

Element.prototype.removeOthers = Element.prototype.removeOthers || function(finalNode) {
    while (finalNode.firstChild) {
        finalNode.removeChild(finalNode.firstChild);
    }
    finalNode.appendChild(this);
};

Element.prototype.childOnly = Element.prototype.childOnly || function() {
    var num = 0;
    var nameLists = Array.prototype.slice.call(arguments);
    var lists = Array.prototype.slice.call(this.childNodes);
    lists.forEach(function(ele) {
        var name = ele.nodeName.toLowerCase();
        if (nameLists.indexOf(name) === -1) {
            ele.remove();
            num++;
        }
    });
    return num;
};

Element.prototype.removeOnly = Element.prototype.removeOnly || function(finalNode) {
    var self = this.cloneNode(true);
    while (finalNode.firstChild) {
        finalNode.removeChild(finalNode.firstChild);
    }
    finalNode.appendChild(self);
};

Element.prototype.css = Element.prototype.css || function() {
    var property = arguments[0];
    var value = arguments[1];

    this.style[property] = value;
    return this;
};

Element.prototype.qsa = Element.prototype.qsa || function(val) {
    return this.querySelectorAll(val);
};

Element.prototype.qs = Element.prototype.qs || function(val) {
    return this.querySelector(val);
};
