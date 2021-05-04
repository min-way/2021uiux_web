$(document).ready(function(){
  // $(".slider li").eq(0).animate({left:"-100%"},1000);
  // $(".slider li").eq(1).animate({left:0},1000);

  let i = 0;
  const banner = $(".slider li");

  setInterval(function(){
    banner.eq(i).css({left:0}).stop().animate({left:"-100%"},1000)
    i++;
    if(i==banner.length){i=0;}
    banner.eq(i).css({left:"100%"}).stop().animate({left:0},1000)

    console.log(i)
  },1000);

  // setInterval(slider,1000);
});
