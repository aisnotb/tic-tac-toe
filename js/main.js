$(document).ready(function(){

	$(".row").on('click', function(){
		alert('you clicked on row');
	});

	$('#x').on('click', function(){
		console.log("you clicked x");
		hideStartMessage();
	});

	$('#o').on('click', function(){
		console.log("you clicked o");
		hideStartMessage();
	});

	function hideStartMessage(){
		$('#gamePromote').hide('slow');
	}

	// var userInfo = $('#');

	var game = new Game(userInfo);
	game.init();


});
