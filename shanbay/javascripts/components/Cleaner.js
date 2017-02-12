import {
    $,
    $$,
} from '../utils';

export default () => {
    $('#article').removeOnly(document.body);
    $('h1').removeSibs();
    $('.gs-container > .content__main-column--article').removeSibs();
    $('.content__meta-container').remove();
    $('.submeta').remove();
    $('.content__article-body').childOnly('p', 'figure');

    setInterval(() => {
        $$('.content__article-body')[0].childOnly('p', 'figure');
    }, 1000);

    const lists = $$('.content__main-column');
    [...lists].forEach((list) => {
        list.css('margin', '0 auto');
    });
};
