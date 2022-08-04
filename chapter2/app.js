let orange = 100;
let apple = 120;

if(orange < apple){
  alert('みかんの値段がりんごより安い');
} else if(orange == apple){
  alert('みかんとりんごが同じ値段');
} else{
  alert('みかんの値段がりんごより高い');
}


let max = 100;
let num = 1;
let count = 0;

while(num < max){
  num = num * 2;
  count = count + 1;
}
alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

// do while文の場合、条件式のtrue/falseに関わらず最初の1回だけは必ず処理される


let i;
let number = 0;

for(i = 1; i < 11; i++){
  number = number + i;
}
alert('１から１０まで足し算した結果は' + number + 'です');

