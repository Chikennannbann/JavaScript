// $(function(){
//   $('.bg1').on('click', function(){
//     $('.bg1').slideUp();
//   });
// });

// $(function(){
//   $('.bg2').on('click', function(){
//     $('.bg2').slideUp();
//   });
// });

// $(function(){
//   $('.bg3').on('click', function(){
//     $('.bg3').slideUp();
//   });
// });

// $(function(){
//   $('.bg4').on('click', function(){
//     $('.bg4').slideUp();
//   });
// });


// thisを利用すると
// $(function(){
//   $('.box1').on('click', function(){
//     $(this).slideUp();
//   });
// });
// thisはクリックされた要素を指している


// .children()はHTML直下全ての子要素を取得
$(function(){
  $('button').on('click', function(){
    $('ul').children().css('color','red');
  });
});