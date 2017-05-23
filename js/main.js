$(document).ready(function(){
	console.clear();

	var userChoice;
	var pcChoice;
	var elem = $("#container");
	var configObj = {
		boardSize: 3,
		elem: elem, //element to be appendto
		userChoice: "",
		pcChoice: ""
	};
	var game;
	var button = $('button');

	function startGame(whatwaspressed, whatwasnotpressed){
		configObj.userChoice = whatwaspressed;
		configObj.pcChoice = whatwasnotpressed;
		game = new Game(configObj);
	}

	button.on('click', function(this){
		switch(this){
			case 'X': startGame('X', 'O');
			break;
			case 'O': startGame('O', 'X');
			break;
		}
	});

	// $('#x').on('click', function(){
	// 	userChooseX = 'X';
	// 	pcChoice  = 'O';
	// 	configObj.userChoice = 'X';
	// 	configObj.pcChoice = 'O';
	// 	game = new Game(configObj);
	// 	game.init();
	// 	hideStartMessage();

	// });

	// $('#o').on('click', function(){
	// 	userChooseO = 'O';
	// 	pcChoice = 'X';
	// 	configObj.userChoice = 'O';
	// 	configObj.pcChoice = 'X';
	// 	game = new Game(configObj);
	// 	game.init();
	// 	hideStartMessage();

	// });

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

	//blinking text
	for (var i = 0; i < 3; i++) {
		(function(i){
			setTimeout(showGameInfoConstantly, 2000);
		})(i);
	}

	setTimeout(gameStartMessage, 1000);

});
