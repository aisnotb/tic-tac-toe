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
		setInterval(function(){
			$("#game-info").toggle();
		}, 1500);
	}

	var game = new Game();
	game.init();

	showGameInfoConstantly();


});
