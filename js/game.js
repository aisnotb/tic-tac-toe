function Game(configObj){
	
	var boardSize = configObj.boardSize;
	var elem = configObj.elem;

	this.isOn = false;

	var board = [];

	this.init = function(){
		alert('inited');
		setTimeout(gameStartMessage, 1000);
		initBoard();
		createBoard();
		update();
	};

	this.end = function(){
		this.reset();
	};

	this.reset = function(){
		this.init();
	};

	function createBoard(){
		// how can i represent board
		for (var i = 0; i < boardSize; i++) {

			elem.append("<div class='row'>");
			for(var j = 0; j < boardSize; j++){
		
				$(".row:nth-child(" + (i+1) + ")").append("<div id=id" + (j+1) * (i+1) + ">" + "</div>");

			}
			elem.append("</div>");
		}
	}

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