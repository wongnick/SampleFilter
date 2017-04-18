

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
		
		// Find which category is currently active
		var curr = '.' + $('.cat_item.active').attr('id');
		if(curr == ".all"){
			curr = ".block_container img";
		}

		// Highlight the selected format
		$('.toggle').removeClass("active");
		$(this).addClass("active");

		// Hide the elements before switching formats
		$('.block_container img').addClass("hidden");

		if($(this).attr('id') == "LIST"){				
			setTimeout(function(){
				$(curr).removeClass("hidden");
				$('.block_container img').removeClass("grid");
				$('.block_container img').addClass("list");
			}, 300);
			

		}else{
			setTimeout(function(){
				$(curr).removeClass("hidden");
				$('.block_container img').removeClass("list");
				$('.block_container img').addClass("grid");
			}, 300);
			
		}
	});
	
});