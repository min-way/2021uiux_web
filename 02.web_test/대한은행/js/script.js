$(document).ready(function(){
    $(".gnb>li").hover(function(){
        $(".sub_menu").stop().slideDown();
    },function(){
        $(".sub_menu").stop().slideUp();
    });
});