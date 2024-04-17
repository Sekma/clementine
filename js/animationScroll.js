$( document ).ready(function(){
    function animationScroll(hash, section){
        $(hash).click(function() {
            $([document.documentElement, document.body]).animate({
                scrollTop: $(section).offset().top
            }, 600);
        });
    };

    animationScroll("#home", "#main-content");
    animationScroll("#footer_home", "#main-content");
    
    animationScroll("#contact", "#footer");
    
});