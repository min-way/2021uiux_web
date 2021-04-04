$(document).ready(function(){
$(".gnb>li").hover(function(){
    $(this).find("ul.sub").stop().slideDown();
},function(){
    $(this).find("ul.sub").stop().slideUp();
    });
    
$(".contents .slide li").eq(0).siblings().hide();
    var slideI=0;
    
    setInterval(function(){
        if(slideI<2){
            slideI++;
        }else{
            slideI=0;
        }
        
        $(".contents .slide li").eq(slideI).siblings().fadeOut();
        $(".contents .slide li").eq(slideI).fadeIn();
        
    },3000);
$(".notice_gal h2").click(function(){
    $(this).addClass("on").siblings().removeClass("on");
    $(this).next("ul").addClass("on");
});
    
$(".notice li").eq(0).click(function(){
    $(".modal").fadeIn();
});

    $("button").click(function(){
       $(".modal").fadeOut();
    });
    
}); //end