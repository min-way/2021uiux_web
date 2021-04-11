$(document).ready(function(){
    $(".gnb>li").hover(function(){
        $(this).find("ul").stop().slideDown();
    },function(){
        $(this).find("ul").stop().slideUp();
    });
    
    $(".slide li").eq(0).siblings().hide();
    
    var slideI=0;
    setInterval(function(){
        if(slideI<2){
            slideI++;
        }else{
            slideI=0;
        }
        $(".slide li").eq(slideI).siblings().fadeOut();
        $(".slide li").eq(slideI).fadeIn();
        
    },3000);
    
    
});