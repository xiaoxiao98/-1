
$(function(){
	 //当页面滚动到300的时候，显示出来回顶部
	 $(window).scroll(function(){
	 	if($(this).scrollTop()>=600){
	 		$('.goTop').show();
	 	} else {
	 		$('.goTop').hide();

	 	}
	 })
	 //当点击回顶部（bt）时候让页面滚动距离等于0
	 $('.goTop').click(function(){
	 	$('html,body').animate({scrollTop:'0'},600)
	 })
})

