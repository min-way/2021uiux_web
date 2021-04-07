$(document).ready(function(){
<<<<<<< HEAD
    $(".gnb>ul").hover(function(){
        $(this).find(".sub_menu").stop().slideDown();
    },function(){
        $(this).find(".sub_menu").stop().slideUp();
    });
    
=======
    $(".gnb>li").hover(function(){
        $(".sub_menu").stop().slideDown();
    },function(){
        $(".sub_menu").stop().slideUp();
    });
>>>>>>> 5823c00b3bb6c92bea31bb492f9e7da8a9a659fc
});