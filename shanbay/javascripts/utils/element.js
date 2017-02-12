Element.prototype.remove = Element.prototype.remove || () => {
    // remove self
    this.parentNode.removeChild(this);
};

Element.prototype.removeChildren = Element.prototype.removeChildren || () => {
    // remove all children
    while (this.firstChild) {
        this.remove(this.firstChild);
    }
};

Element.prototype.removeSibs = Element.prototype.removeSibs || () => {
    // remove all siblings
    const par = this.parentNode;
    while (par.firstChild) {
        par.removeChild(par.firstChild);
    }
    par.appendChild(this);
};

Element.prototype.removeTo = Element.prototype.removeTo || finalNode => {
    const node = this;
    while (node !== finalNode) {
        node.removeSibs();
        node = node.parentNode;
    }
};

Element.prototype.removeOthers = Element.prototype.removeOthers || finalNode => {
    while (finalNode.firstChild) {
        finalNode.removeChild(finalNode.firstChild);
    }
    finalNode.appendChild(this);
};

Element.prototype.childOnly = Element.prototype.childOnly || ([...nameLists]) => {
    const lists = [...this.childNodes];
    lists.filter(list => {
        const name = list.nodeName.toLowerCase();
        if (nameLists.indexOf(name) === -1) {
            list.remove();
            return true;
        }
    });
    return lists.length;
};

Element.prototype.removeOnly = Element.prototype.removeOnly || finalNode => {
    const self = this.cloneNode(true);
    while (finalNode.firstChild) {
        finalNode.removeChild(finalNode.firstChild);
    }
    finalNode.appendChild(self);
};

Element.prototype.css = Element.prototype.css || (property, value) => {
    this.style[property] = value;
    return this;
};

Element.prototype.qsa = Element.prototype.qsa || (val) => {
    return this.querySelectorAll(val);
};

Element.prototype.qs = Element.prototype.qs || (val) => {
    return this.querySelector(val);
};
