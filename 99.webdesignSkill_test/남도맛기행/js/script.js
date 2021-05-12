$(document).ready(function(){

//.gnb>li에 hover 했을때 ul.sub 가 천천히 나타나기
$(".gnb>li").hover(function(){
    $(this).find("ul.sub").stop().slideDown();
},function(){
    $(this).find("ul.sub").stop().slideUp();
});
//.contents .slide li 좌에서 우로 슬라이드 되며 3초마다 이동
$(".contents .slide li").eq(0).siblings().css({"left":"-800px"});
    var slideI=0;
    
    setInterval(function(){
        if(slideI<2){
            slideI++;
        }else{
            slideI=0;
        }
    $(".contents .slide li").eq(slideI).siblings().animate({"left":"-800px"},500);
    $(".contents .slide li").eq(slideI).animate({"left":"0"},500);
        
    },3000);
//.notice_gal h2 클릭시 탭 메뉴 클릭 시 해당 ul이 보여주기
$(".notice_gal h2").click(function(){
    $(this).addClass("on").siblings().removeClass("on");
    $(this).next("ul").addClass("on");
});
//.notice li .modal 첫 번째 클릭시 팝업창 띄우기
$(".notice li").eq(0).click(function(){
    $(".modal").fadeIn();
});
//button 클릭시 .modal 팝업창 닫기
$("button").eq(0).click(function(){
    $(".modal").fadeOut();
});
    
}); //end