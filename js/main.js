$(document).ready(function(){
	console.clear();

	var userChooseX = false;
	var userChooseO = false;
	var userChoice;

	function reset(){
		userChooseX = false;
		userChooseO = false;
	}


	$('#x').on('click', function(){
		reset();
		userChooseX = 'X';
		userChoice = userChooseX;
		hideStartMessage();
	});

	$('#o').on('click', function(){
		reset();
		userChooseO = 'O';
		userChoice = userChooseO;
		hideStartMessage();
	});

	function respondToClick(){
		for (var i = 1; i <= configObj.boardSize * configObj.boardSize ; i++) {
			(function(i){
				var elem = $("#id" + i);
				elem.on('click',function(){
					console.log("id " + i + " is clicked");
					$(elem).text(userChoice);
					game.letAiThink();
				});

			})(i);
		}
	}

	function hideStartMessage(){
		$('#gamePromote').hide('slow');
		respondToClick();
	}

	function showGameInfoConstantly(){
		$("label").fadeOut(500);
		$("label").fadeIn(500);
	}
	setInterval(showGameInfoConstantly, 2000);

	var elem = $("#container");
	var configObj = {
		boardSize: 3,
		elem: elem, //element to be appendto
		userChoice: userChoice
	};

	var game = new Game(configObj);
	game.init();

});
