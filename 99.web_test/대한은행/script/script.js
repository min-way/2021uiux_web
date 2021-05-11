$(document).ready(function(){
    $(".gnb>li").hover(function(){
        $(".sub_menu").stop().slideDown();
    },function(){
        $(".sub_menu").stop().slideUp();
    });
    
    $(".slide li").eq(0).siblings().css({"left":"-1900px"});
    
    var slideI=0;
    
    setInterval(function(){
        if(slideI<2){
            slideI++;
        }else{
            slideI=0;
        }
        
        $(".slide li").eq(slideI).siblings().animate({"left":"-1900px"},500);
        $(".slide li").eq(slideI).animate({"left":"0"},500);
        
    },3000);
    
    $(".notice_gal h2").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
        $(this).next("ul").addClass("on");
        
    });
    
    $(".notice>li").eq(0).click(function(){
        $(".modal").fadeIn();
    });
    
    $("button").click(function(){
        $(".modal").fadeOut();
    });
});