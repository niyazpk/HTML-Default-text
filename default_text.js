;(function($) {

$(document).ready(function(){

	// Default text values
	// Format is like: 
	// {'selector' : 'default text'}
	var default_text_item = {
		'#example-selector-1' : 'Example deafult text-1',
		'#example-selector-2' : 'Example deafult text-2',
	}

	// Generic function for default text for text fields.
	for (item in default_text_item){

		$(item).attr("default-text", default_text_item[item]); // Beacuse you cannot get 'item' inside the each loop
		$(item).attr("value", default_text_item[item]);
		
		$(item).focus(function () {
			if($(this).attr("value")===$(this).attr("default-text")){
				$(this).attr("value", "");
			}
		}); 
		$(item).blur(function () {
			if($(this).attr("value")===""){
				$(this).attr("value", $(this).attr("default-text"));
			}
		});
	}

});

})(jQuery);