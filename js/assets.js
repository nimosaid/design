$(document).ready(function() {

/*Declaring Variables*/
var leftbutton = '<img class="check" src="https://bjorkpeter.github.io/shopping-list/images/approve.png" alt="check" title="click to mark purchase" width="30px">'
var rightbutton = '<img class="close" src="https://bjorkpeter.github.io/shopping-list/images/close.png" alt="close" title="click to remove item" width="30px>">'

/*Allows ENTER Keydown to add text to list*/
$('.textinput').keydown(function(a) {
	if (a.keyCode == 13) {
		$('.list').prepend('<div class="result">' + leftbutton + '<p>' + $('.add-items').val() + '</p>' + rightbutton + '</div>');
    $('input.add-items').val("");
	}
})
  
/*Allows LEFT Button Clicks*/
 $('.list').on('click', '.check', function() {
	if ($(this).closest('.list > div').hasClass('result')) {
  		$(this).closest('.list > div').addClass( 'result-remove' );
  		$(this).closest('.list > div').removeClass( 'result' );
  		
	} 	
	else {
  		$(this).closest('.list > div').removeClass( 'result-remove' );
  		$(this).closest('.list > div').addClass( 'result' );
	}
	});
  
  /*Allows RIGHT Button Clicks*/
  $('.list').on('click', '.close', function() {
	    $(this).closest('.list > div').fadeOut("fast")
  		
	});

  /*THINK about: button to enter text as well as [enter], actually swapping the check mark for another image, animating additions, if entry is very long, the item box is screwed up*/
});