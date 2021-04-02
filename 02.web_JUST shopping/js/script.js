$(document).ready(function(){
//    nav
    $(".gnb>li").hover(function(){
        $("ul.sub").stop().slideDown();
    },function(){
        $("ul.sub").stop().slideUp();
    });
//    nav end
    
// main slide
$(".slide_all>li").eq(0).siblings().css("top","-300px");

    var slideI=0;

    setInterval(function(){
        if(slideI<2){
            slideI++;
        }else{
            slideI=0;
        }
    $(".slide_all>li").eq(slideI).siblings().animate({"top":"-300px"},500);
    $(".slide_all>li").eq(slideI).animate({"top":"0"},500);

    },3000);
//main slide

//tab menu
    $(".contents > .notice_gal h3").click(function(){
        $(".contents > .notice_gal h3").removeClass("on");
        $(this).addClass("on");
        $(".contents > .notice_gal ul").removeClass("on");
        $(this).next("ul").addClass("on");
        
    
    });
    
    
//tab menu end
    
    
});