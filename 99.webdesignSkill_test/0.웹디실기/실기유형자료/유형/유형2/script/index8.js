$(".bts").click(function(){
	var n = $(this).index();
	$(".banner > ul").stop().animate({"left":(-n*1000)+"px"}, 500, function(){
		$(".bts").css({"color":"#fff"});
		$(".bts").eq(n).css({"color":"#f30"});
	});
});

