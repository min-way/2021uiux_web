$(document).ready(function(){
    $(".gnb>ul").hover(function(){
        $(this).find(".sub_menu").stop().slideDown();
    },function(){
        $(this).find(".sub_menu").stop().slideUp();
    });
    
});