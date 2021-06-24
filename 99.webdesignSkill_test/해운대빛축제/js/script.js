$(document).ready(function(){
//.gnb>li에 마우스를 올렸을때 ul.sub의 메뉴가 천천히 나타내기
$(".gnb>li").hover(function(){
    $(this).find("ul.sub").stop().slideDown();
},function(){
    $(this).find("ul.sub").stop().slideUp();
});
//.contents .slide li 1번~3번의 슬라이드를 3초안에 천천히 사라지고 나타내기
$(".contents .slide li").eq(0).siblings().hide();

    var slideI=0;
    setInterval(function(){
        if(slideI<2){
            slideI++;
        }else{
            slideI=0;
        }
        
        $(".contents .slide li").eq(slideI).fadeIn().siblings().fadeOut();
        
    },3000);
    
//.notice_gal h2를 클릭했을때 공지사항과 갤러리가 바뀌며 목록도 같이 바뀌게 한다
    $(".notice_gal h2").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
        $(this).next("ul").addClass("on");
    });

    //.notice li 공지사항의 첫번째 글을 클릭했을때 .modal 레이어팝업창 
    $(".notice li").eq(0).click(function(){
        $(".modal").fadeIn();
    });

    //.modal 레이어팝업창 button 닫기
    $("button").click(function(){
        $(".modal").fadeOut();
    });
    
});//end