/* global qs qsa getArray */

/* eslint no-unused-vars: 0 */
var remove = function () {
    var advertise;

    qs('#article').removeOnly(document.body);
    qs('h1').removeSibs();
    qs('.gs-container > .content__main-column--article').removeSibs();
    qs('.content__meta-container').remove();
    qs('.submeta').remove();

    advertise = qs('.content__article-body').childOnly('p', 'figure');
    setInterval(function() {
        advertise = qsa('.content__article-body')[0].childOnly('p', 'figure');
    }, 1000);

    var lists = qsa('.content__main-column');
    getArray(lists).forEach(function(ele) {
        ele.css('margin', '0 auto');
    });
};
