// $(function(){
//   $('.box1').css({
//     'background-color': '#0000FF',
//     'height': '100px'
//   });
// });


// 下に
// $(function(){
//   $('.box1').slideDown();
// });


// 上に
// $(function(){
//   $('.box1').slideUp();
// });


// 表示
// $(function(){
//   $('.box1').show();
//   $('.box1').css({'background-color': '#0000FF'});
// });


// 非表示
// $(function(){
//   $('.box1').hide();
// });


// 演習
$(function(){
  $('.box1').slideDown(function(){
    $('.box1').css({
      'background-color': '#0000FF',
      'height': '100px',
      'width': '200px'
    }).slideUp();
  })
});