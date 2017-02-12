import './utils/element';
import {
    Modal,
    Pager,
    Cleaner,
    Translater
} from './components';

const readyFn = () => {
    Cleaner();
    Modal();
    Translater();
    Pager();
};

const readyState = document.readyState;
if (readyState === 'interactive' || readyState === 'complete') {
    readyFn();
} else {
    window.addEventListener('DOMContentLoaded', readyFn);
}


// window.onload = function() {
//     var ad = 'clear advertise', //记录清除广告的时间
//         at = 'make pager'; //记录分页文章的时间
//     remove();
//     console.timeEnd(ad);
//
//     console.time(at);
//     Article();
//     console.timeEnd(at);
//
//     var container = new Dialog();
//     //实例化一个dialog
//     article.onclick = function(event) {
//         var ts = 'translate time';
//         // 监听点击事件，并记录一次查询的时间
//         console.time(ts);
//         var selection = window.getSelection();
//         var word = selection.toString();
//
//         var pattern = /\n/;
//         if (word && word.search(pattern) == -1) {
//             //如果word是字符串
//             container.show();
//             var wordDetail = new Translate(word);
//
//             var data = wordDetail.response.data;
//             var dialog;
//             if (data) {
//                 //查询到内容
//                 dialog = getHtml(data);
//             } else {
//                 //未查询到内容
//                 dialog = '<strong>抱歉，未查询到结果！</strong>';
//             }
//             container.addContent(dialog);
//             container.pos(event.pageX, event.pageY);
//             console.timeEnd(ts);
//         } else {
//             container.hide();
//         }
//     };
//
//     function getHtml(data) {
//         var dialog = '<section>' + '<strong>' + data.content + '</strong>' + '</section>';
//         dialog += '<hr></hr>';
//         dialog += '<article>';
//         dialog += '<header>' + '<span style="white-space: pre;">' + data.definition.trim() + '</span>' + '</header>';
//         dialog += '<ul>';
//         if (data.uk_audio) {
//             dialog += '<li><img src="http://120.27.97.69/assets/volume.svg" onclick="var audio = document.createElement(\'audio\');audio.setAttribute(\'src\',\'' + data.uk_audio + '\');audio.play();">' + '英式发音' + '/' + data.pronunciations.uk + '/' + '</li>';
//         }
//         if (data.us_audio) {
//             dialog += '<li><img src="http://120.27.97.69/assets/volume.svg" onclick="var audio = document.createElement(\'audio\');audio.setAttribute(\'src\',\'' + data.us_audio + '\');audio.play();">' + '美式发音' + '/' + data.pronunciations.us + '/' + '</li>';
//         }
//         dialog += '</ul>';
//         dialog += '</article>';
//
//         return dialog;
//     }
// };
