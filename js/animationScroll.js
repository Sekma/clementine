
$(document).ready(function (){
        
        
        $(window).on('scroll', function (){

                $('.home-container-carte h1').each(function () {
                        let top = $(this).offset().top + 100;
                        let scrollBottom = $(window).scrollTop() + $(window).height();
            
                        if (top <= scrollBottom) {
                            $(this).removeClass("visible");
                            $(this).addClass('slideRight');
                            setTimeout(() => {
                                $(".presentation").removeClass("visible");
                                $(".presentation").addClass("slideUp");
                              }, 600);
                        }
                    });

                    $('.specialites-container ul li, .offres-container ul li').each(function (index){
                        let top = $(this).offset().top + 200;
                        let scrollBottom = $(window).scrollTop() + $(window).height();
                        
                        if (top <= scrollBottom){
                                setTimeout(() => {
                                        $(this).removeClass("visible");
                                        $(this).addClass("slideUp");
                                }, index * 200);
                        }
                        
                     });
        });

        function animationScroll(hash, section){
                $(hash).click(function() {
                    $([document.documentElement, document.body]).animate({
                        scrollTop: $(section).offset().top
                    }, 600);
                });
            };
        
            animationScroll("#home", "#header-content");
            animationScroll("#offres", "#title2");
            
            animationScroll("#menu", "#pageContent");

            animationScroll("#contact", "#footer");
});
