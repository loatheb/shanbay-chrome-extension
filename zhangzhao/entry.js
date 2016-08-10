window.onload = function(){
  var time = "all";
  console.time(time);
  handle();
  setInterval(function(){
    advertise = document.getElementsByClassName('content__article-body')[0].childOnly('p', 'figure');
  }, 1000);
  console.timeEnd(time);

  article.ondblclick = function (e) {
    var word = window.getSelection().toString();
    //window API 调用进行解析选中的string
    var wordDetail = new Translate(word);
    //Translate对象实例，存有response

    var dialog  = '<div>';
        dialog +=   '<section>'+ wordDetail.response.content +'</section>';
        dialog +=   '<hr></hr>';
        dialog +=   '<article>';
        dialog +=     '<header>' + wordDetail.response.definition + '</header>';
        dialog +=     '<ul>';
        dialog +=       '<li>' + 英式发音 + '/'+ wordDetail.response.data.pronunciations.uk + '/' +'</li>';
        dialog +=       '<li>' + 美式发音 + '/' + wordDetail.response.data.pronunciations.us + '/' +'</li>';
        dialog +=     '</ul>';
        dialog +=   '</article>';
        dialog += '</div>';

    console.log(dialog);
  }
}
