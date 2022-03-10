$(function(){
	
	
	<!--SPボタンのデザインを実装 -->
	$(".sp_btn a").click(function () {
		$("#globalNavigation").slideToggle(function(e){
			var thisObj = $(this);
			if(thisObj.hasClass('open_menu')) {
				thisObj.removeClass('open_menu');
			} else {
				thisObj.addClass('open_menu').css('display','');
			}
		});
	});
	
	
})



