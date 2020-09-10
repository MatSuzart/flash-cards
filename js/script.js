/*
$(function(){
	$('.tab').on('click',function(){
	$('.active').removeClass('active');
	$(this).addClass('active');

	var item = $('.active').index();
        $('.tabbody').hide();
		$('.tabbody').eq(item).show();
	});
});
*/
var $newCard = document.querySelector('.newCard');
var $newCardContent = document.querySelector('.newCard-content');

$newCard.addEventListener('submit',function(event){
	
	if($newCardContent.value==''){
	event.preventDefault();


	console.log('is empty');
	}
	
});
