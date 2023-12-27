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
  }

  let pages = document.querySelector('.pages');
  let pagination = document.querySelector('.pagination');
  let slider = new Slider(pages, pagination)
}
const spyEls = document.querySelectorAll('.scroll-spy')
spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({ // 감시할 장면(Scene)을 추가
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
})