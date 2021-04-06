		var current=0;
		$(function(){
		ani();
		});


		function ani() {
				$(".banner > ul").delay(2000).animate({"left":"-=1000px"}, 500, 
					function(){
					current++;
					if(current == 5) {
						current = 0;
						$(this).css({"left":"0px"});
					}
					ani();
				});
			}