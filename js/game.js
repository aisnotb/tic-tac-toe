function Game(){
	
	this.isOn = false;

	var board = [];

	this.init = function(){
		alert('inited');
		setTimeout(gameStartMessage, 1000);
		initBoard();
		update();
	};

	this.end = function(){
		this.reset();
	};

	this.reset = function(){
		this.init();
	};

	function update(){
		console.log('Board is '+ board);
		for(var i = 0 ; i < 9 ; i++){
			console.log(board[i]);
		}
	}

	function initBoard(){
		for (var i = 0; i < 9; i++) {
			board.push('x');
		}
	}

	function userInput(){}

	function computerMakeChoice(){}

	function gameStartMessage(){
		$("#gamePromote").show();
	}

}