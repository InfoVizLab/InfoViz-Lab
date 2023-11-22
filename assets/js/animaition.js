$(document).ready(function(){
 $(window).scroll(function(){
  //window의 스크롤창을 변수에 저장  
  var st = $(this).scrollTop();
  $('h1').text(st);
  if(st > 5){
    $('.text1').stop().animate({top:100});
  } else{
    $('.text1').stop().animate({top:-250});
  }
  if(st > 700){
    $('.box1').stop().animate({top:300});
  } else{
    $('.box1').stop().animate({top:900});
  }
  if(st > 1500){
    $('.box2').stop().animate({left:100});
  } else{
    $('.box2').stop().animate({left:-250});
  }
 });
});

