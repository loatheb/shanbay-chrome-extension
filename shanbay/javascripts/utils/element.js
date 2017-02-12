/* eslint func-names: ["error", "never"] */

Element.prototype.remove = Element.prototype.remove || function () {
    // remove self
    this.parentNode.removeChild(this);
};

Element.prototype.removeChildren = Element.prototype.removeChildren || function () {
    // remove all children
    while (this.firstChild) {
        this.remove(this.firstChild);
    }
};

Element.prototype.removeSibs = Element.prototype.removeSibs || function () {
    // remove all siblings
    const par = this.parentNode;
    while (par.firstChild) {
        par.removeChild(par.firstChild);
    }
    par.appendChild(this);
};

Element.prototype.removeTo = Element.prototype.removeTo || function (finalNode) {
    // remove up to finalNode
    let node = this;
    while (node !== finalNode) {
        node.removeSibs();
        node = node.parentNode;
    }
};

Element.prototype.removeOthers = Element.prototype.removeOthers || function (finalNode) {
    // remove other childs except finalNode
    while (finalNode.firstChild) {
        finalNode.removeChild(finalNode.firstChild);
    }
    finalNode.appendChild(this);
};

Element.prototype.childOnly = Element.prototype.childOnly || function ([...nameLists]) {
    const lists = [...this.childNodes];
    lists.filter((list) => {
        const name = list.nodeName.toLowerCase();
        if (nameLists.indexOf(name) === -1) {
            list.remove();
            return true;
        }
        return false;
    });
    return lists.length;
};

Element.prototype.removeOnly = Element.prototype.removeOnly || function (finalNode) {
    const self = this.cloneNode(true);
    while (finalNode.firstChild) {
        finalNode.removeChild(finalNode.firstChild);
    }
    finalNode.appendChild(self);
};

Element.prototype.css = Element.prototype.css || function (property, value) {
    this.style[property] = value;
    return this;
};

Element.prototype.qsa = Element.prototype.qsa || function (val) {
    return this.querySelectorAll(val);
};

Element.prototype.qs = Element.prototype.qs || function (val) {
    return this.querySelector(val);
};
