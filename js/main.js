$(document).ready(function(){

	$(".row").on('click', function(){
		alert('you clicked on row');
	});

	$('#x').on('click', function(e){
		console.log(e.target.id);
		hideStartMessage();
		function getUserInput(){
			if (e.target==x) {
				console.log('user info is ' + e.target);
			}
		}
		getUserInput();
	});

	$('#o').on('click', function(e){
		console.log(e.target.id);
		hideStartMessage();
		function getUserInput(e){
			if (e.target==o) {
				console.log('user info is ' + e.target);
			}
			getUserInput();
		}
	});

	function hideStartMessage(){
		$('#gamePromote').hide('slow');
	}

	function showGameInfoConstantly(){
		$("label").fadeOut(500);
		$("label").fadeIn(500);
	}

	var game = new Game();
	game.init();

	showGameInfoConstantly();

	setInterval(showGameInfoConstantly, 2000);
});
