$(document).ready(function() {
  /* 1 */
  $(window).scroll( function(){
      /* 2 */
      $('.hideme').each( function(i){
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          /* 3 */
          if( bottom_of_window > bottom_of_object/2 ){
              $(this).animate({'opacity':'1'},500);
          }
      }); 
  });
});

$(document).ready(function() {
  $(window).scroll( function(){
      $('.slideinleft').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element ){
              $(this).animate({'margin-left':'0px'},1000);
          }
          
      }); 
  });
});

$(document).ready(function() {
  $(window).scroll( function(){
      $('.fadeinleft').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element ){
              $(this).animate({'opacity':'1','margin-left':'0px'},1000);
          }
          
      }); 
  });
});
