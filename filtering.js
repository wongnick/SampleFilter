

// when dom is loaded
$(document).ready(function(){
	
	// When a category is clicked
	$('.cat_item').bind("click", function(){
		
		// Find which category that was clicked
		var category = '.' + $(this).attr('id');
		
		// If the category clicked is not active, set it to active 
		// and show the corresponding filtered blocks
		if(!$(this).hasClass("active")){
			$('.cat_item').removeClass("active");
			$(this).addClass("active");
		}

		// Show all blocks if the 'all' tab was clicked
		// Otherwise, show only the selected category blocks
		if(category == '.all'){
			$('.block_container img').addClass("hidden");
			setTimeout(function(){
				$('.block_container img').removeClass("hidden");
			}, 300);
		}else{
			$('.block_container img').addClass("hidden");
			setTimeout(function(){
				$(category).removeClass("hidden");
			}, 300);
		}

	});	

	//Toggle between grid and list format
	$('.toggle').bind("click", function(){
		var curr = '.' + $('.cat_item.active').attr('id');
		if(curr == ".all"){
			curr = ".block_container img";
	
		}
		$('.toggle').removeClass("active");
		$(this).addClass("active");
		$('.block_container img').addClass("hidden");

		if($(this).attr('id') == "list"){				
			setTimeout(function(){
				$(curr).removeClass("hidden");
				$(".block_container [id*='grid']").attr('id', 'list');
			}, 300);
			

		}else{
			setTimeout(function(){
				$(curr).removeClass("hidden");
				$(".block_container [id*='list']").attr('id', 'grid');
			}, 300);
			
		}
	});
	
});