

$(document).ready(function(){
	
	$('.cat_item').bind("click", function(){
		var category = '.' + $(this).attr('id');
		if($(this).attr('class') != "cat_item active"){
			$('#all, #animals, #food, #scenery').removeClass('active');
			$(this).addClass('active');
		}
		if(category == '.all'){
			$('.animals, .food, .scenery').addClass('hide');
			setTimeout(function(){
				$('.animals, .food, .scenery').removeClass('hide');
			}, 300);
		}else{
			$('.animals, .food, .scenery').addClass('hide');
			setTimeout(function(){
				$(category).removeClass('hide');
			}, 300);

		}
	});
});