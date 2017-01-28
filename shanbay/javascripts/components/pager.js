/* global qs qsa getArray*/

/* eslint no-unused-vars: 0 */
var Article = function () {
    var body = document.body;

    var height = window.innerHeight;

    var article = qs('#article'),
        head = article.qs('header'),
        content = article.qs('.content__main'),

        headHeight = head.clientHeight,
        articleHeight = article.clientHeight;

    body.css('height', height + 'px').css('overflow', 'hidden');

    article.css('height', height - 30 + 'px').css('paddingBottom', '0px').css('overflow', 'hidden');

    head.style.position = 'relative';
    content.style.position = 'relative';

    createSide();

    function createSide() {
        var side = document.createElement('div');
        side.className = 'btnLists';

        var pages = Math.ceil(articleHeight / (height - 30));

        var list = '<ul>';
        for (var i = 0; i < pages; i++) {
            list += '<li><button>' + (i + 1) + '</button></li>';
        }
        list += '</ul>';
        side.innerHTML = list;
        body.appendChild(side);

        var lists = qsa('ul button');
        getArray(lists).forEach(function(ele, index) {
            ele.onclick = function(event) {
                showPage(index);
            };
        });
    }

    function showPage(index) {
        var step = height - 30;
        var contentShow = step - headHeight;

        switch (index) {
        case 0:
            head.css('top', '0px');
            content.css('top', '0px');
            break;
        default:
            head.css('top', '-' + height + 'px');
            content.css('top', '-' + step * index + 'px');
        }
    }
};
