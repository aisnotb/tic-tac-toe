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

	function startGame(whatwaspressed, whatwasnotpressed, configObj){
		configObj.userChoice = whatwaspressed;
		console.log('inside stargame');
		configObj.pcChoice = whatwasnotpressed;
		game = new Game(configObj);
		console.log('user choice is ' + configObj.userChoice);
		game.init();
		hideStartMessage();
	}

	var element = $('button');
	element.on('click', function(){
		var val = $(this).data(); 
		switch(val.value){
			case 'X':
				startGame('X', 'O',configObj);
				break;
			case 'O':
				startGame('O', 'X',configObj);
				break;
		}
	});

	function respondToClick(){
		for (var i = 1; i <= configObj.boardSize * configObj.boardSize ; i++) {
			(function(i){
				var elem = $("#id" + i);
				elem.on('click',function(){
					console.log("id " + i + " is clicked");
					// $(elem).text(userChoice);
					game.place(i, configObj.userChoice);
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
