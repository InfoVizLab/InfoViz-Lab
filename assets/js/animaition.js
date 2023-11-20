// $(document).ready(function(){
//  $(window).scroll(function(){
//   //window의 스크롤창을 변수에 저장  
//   var st = $(this).scrollTop();
//   $('h1').text(st);
//   if(st > 700){
//     $('.box1').stop().animate({top:300});
//   } else{
//     $('.box1').stop().animate({top:900});
//   }
//   if(st > 1500){
//     $('.box2').stop().animate({left:100});
//   } else{
//     $('.box2').stop().animate({left:-250});
//   }
//  });
// });

window.addEventListener("wheel", function(e){
	e.preventDefault();
},{passive : false});

var $html = $("html");
var page = 1; 
var lastPage = $(".content").length; 
$html.animate({scrollTop:0},10);

$(window).on("wheel", function(e){
 
	if($html.is(":animated")) return;
 
	if(e.originalEvent.deltaY > 0){
		if(page== lastPage) return;
 
		page++;
	}else if(e.originalEvent.deltaY < 0){
		if(page == 1) return;
 
		page--;
	}
	var posTop = (page-1) * $(window).height();
 
	$html.animate({scrollTop : posTop});
 
});


