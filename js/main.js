$(document).ready(function(){
	console.clear();

	var userChooseX = false;
	var userChooseO = false;
	var userChoice;
	var pcChoice;

	function reset(){
		userChooseX = false;
		userChooseO = false;
	}

	$('#x').on('click', function(){
		reset();
		userChooseX = 'X';
		pcChoice  = 'O';
		userChoice = userChooseX;
		hideStartMessage();
	});

	$('#o').on('click', function(){
		reset();
		userChooseO = 'O';
		pcChoice = 'X';
		userChoice = userChooseO;
		hideStartMessage();
	});

	function respondToClick(){
		for (var i = 1; i <= configObj.boardSize * configObj.boardSize ; i++) {
			(function(i){
				var elem = $("#id" + i);
				elem.on('click',function(){
					console.log("id " + i + " is clicked");
					// $(elem).text(userChoice);
					game.place(i, userChoice);
					game.letAiThink();
				});

			})(i);
		}
	}

	function gameStartMessage(){
		$("#gamePromote").show();
	}

	function hideStartMessage(){
		$('#gamePromote').hide('slow');
		respondToClick();
	}

	function showGameInfoConstantly(){
		$("label").fadeOut(500);
		$("label").fadeIn(500);
	}

	for (var i = 0; i < 3; i++) {
		(function(i){
			setTimeout(showGameInfoConstantly, 2000);
		})(i);
	}


	var elem = $("#container");
	var configObj = {
		boardSize: 3,
		elem: elem, //element to be appendto
		userChoice: userChoice,
		pcChoice: pcChoice
	};

	setTimeout(gameStartMessage, 1000);
	var game = new Game(configObj);
	game.init();

});
