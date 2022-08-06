$(function(){
  $('#back a').on('click', function(event){
    $('body, html').animate({
      scrollTop:0
    }, 800);
    event.preventDefault();
  });
});

// eventはイベントオブジェクトfunction(e)とされることが多い
// body, htmlはbody要素またはhtml要素の意味
// ユーザーの利用環境によって対象の要素が変化するため
// event.preventDefault()；はaタグの機能を無効にするメソッド