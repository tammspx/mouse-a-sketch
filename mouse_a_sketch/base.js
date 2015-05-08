console.log("this is a sanity check");

$(document).ready(function(){
  console.log("Let's get coding!")

  var color = $("input");

	$('td').hover(function(){
	   $(this).css("background",color.val());
	});

})