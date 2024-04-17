$(document).ready(function () {
   
        function showSubbar(service, parent, item){
            document.getElementById(service).onmouseover=function(){
                document.getElementById(item).classList.add("subbar-active");
                document.getElementById(parent).classList.add("change_color");
                $("nav").css("background-color", "rgb(255, 255, 255)");
            };
            document.getElementById(service).onmouseleave=function(){
                document.getElementById(item).classList.remove("subbar-active");
                document.getElementById(parent).classList.remove("change_color");
                $("nav").css("background-color", "rgba(255, 255, 255, 0.5)");
            };
        };
    
        if($(window).width() > 992){

        $('.subbar').css("display","block");

        //services
        //affichage du menu-scroll
        showSubbar("service", "service", "service_subbar");
        
        //conserver l'affichage du menu-scroll lors du survol sur elle meme
        showSubbar("service_subbar", "service", "service_subbar");
        
        //projects
        //affichage du menu-scroll
        showSubbar("project", "project", "project_subbar");
    
        //conserver l'affichage du menu-scroll lors du survol sur elle meme
        showSubbar("project_subbar", "project", "project_subbar");
        
    }
    $(window).resize(function(){
        if($(window).width() > 992){

        $('.subbar').css("display","block");

        showSubbar("service", "service", "service_subbar");
        showSubbar("service_subbar", "service", "service_subbar");
        showSubbar("project", "project", "project_subbar");
        showSubbar("project_subbar", "project", "project_subbar");
        }else{
            $('.subbar').css("display","none");
            
        }
      })

});