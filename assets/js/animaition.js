$(document).ready(function(){
 $(window).scroll(function(){
  //window의 스크롤창을 변수에 저장  
  var st = $(this).scrollTop();
  $('h1.point_num').text(st);
  if(st > 1){
    $('.img1').stop().animate({left:'50%'});
  } else{
    $('.img1').stop().animate({left:'-100%'});
  }
  if(st > 3){
    $('.text1').stop().animate({left:'50%'});
  } else{
    $('.text1').stop().animate({left:'-100%'});
  }
  if(st > 50){
    $('.text1_1').stop().animate({left:150});
  } else{
    $('.text1_1').stop().animate({left:-250});
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

window.onload = () => {
  const Slider = function(pages, pagination) {
    let slides = [],
        btns = [],
        pageadd = [],
        count = 0,
        current = 0,
        touchstart = 0,
        animation_state = false;

    const init = () => {
      slides = pages.children;
      count = slides.length;
      for(let i = 0; i < count; i++) {
        slides[i].style.bottom = -(i * 100) + '%';
        let btn = document.createElement('li');
        btn.dataset.slide = i;
        btn.addEventListener('click', btnClick)
        btns.push(btn);
        pagination.appendChild(btn);
      }
      btns[0].classList.add('active');
    }

    const gotoNum = (index) => {
      if((index != current) && !animation_state) {
        animation_state = true;
        setTimeout(() => animation_state = false, 500);
        btns[current].classList.remove('active');
        current = index;
        btns[current].classList.add('active');
        for(let i = 0; i < count; i++) {
          slides[i].style.bottom = (current - i) * 100 + '%';
        }
      }
    }
    const gotoNext = () => current < count - 1 ? gotoNum(current + 1) : false;
    const gotoPrev = () => current > 0 ? gotoNum(current - 1) : false;
    const btnClick = (e) => gotoNum(parseInt(e.target.dataset.slide));
    pages.ontouchstart = (e) => touchstart = e.touches[0].screenY;
    pages.ontouchend = (e) => touchstart < e.changedTouches[0].screenY ? gotoPrev() : gotoNext();
    pages.onmousewheel = pages.onwheel = (e) => e.deltaY < 0 ? gotoPrev() : gotoNext();

    init();

    const addclass = (index) => {
      if((index != current) && !animation_state) {
        animation_state = true;
        setTimeout(() => animation_state = false, 500);
        pageadd[current].classList.remove('add');
        current = index;
        pageadd[current].classList.add('add');
        for(let i = 0; i < count; i++) {
          slides[i].style.bottom = (current - i) * 100 + '%';
        }
      }
    }
  }

  let pages = document.querySelector('.pages');
  let pagination = document.querySelector('.pagination');
  let slider = new Slider(pages, pagination)
}
