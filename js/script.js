$(function(){
	$('.tab').on('click',function(){
	$('.active').removeClass('active');
	$(this).addClass('active');

	var item = $('.active').index();
        $('.tabbody').hide();
		$('.tabbody').eq(item).show();
	});
});