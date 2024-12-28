/* toggle menu */
function toggleMenu() {
    $('.burger-toggle').toggleClass('active');
    $('nav').toggleClass('active');
    $('li').toggleClass('li_height');
  };
  /* responsive logo */
  $( document ).ready(function(){
    

    if($(window).width() < 767){
      $('.logo').attr("src","img/photo_de_profil.png");
    }
    $(window).resize(function(){
      if($(window).width() < 767){
        $('.logo').attr("src","img/photo_de_profil.png");
      }
      else{
        $('.logo').attr("src","img/photo_de_couv.png");
      }
    });

    $(window).scroll(function () { 
      if($(window).scrollTop()>50){
          $("nav").css("background-color", "rgb(255, 255, 255)");
      }
      else{
        $("nav").css("background-color", "rgba(255, 255, 255, 0.5)");
      }
  });
  });

 
 
 