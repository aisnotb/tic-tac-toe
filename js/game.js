function Game(configObj){
	
	var boardSize = configObj.boardSize;
	var elem = configObj.elem;//this is the element that will be appended with board
	var userChoice = configObj.userChoice;
	console.log('user choice is ' + userChoice);

	this.isOn = false;
	// var userChoice = 'x' || 'o';

	var board = [];

	this.init = function(){
		setTimeout(gameStartMessage, 1000);
		createBoard();
		initBoard();
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
		var k = 1;
		for (var i = 0; i < boardSize; i++) {
			elem.append("<div class='row'>");
			for(var j = 0; j < boardSize; j++){
				$(".row:nth-child(" + (i+1) + ")").append("<div id=id" + k + ">" + "<span></span>" + "</div>");
				k++;
			}
			elem.append("</div>");
		}
	}

	function initBoard(){
		for (var i = 1; i <= 9; i++) {
			$("span").text('');
		}
	}

	function update(){
		console.log('Board is '+ board);
		for(var i = 0 ; i < 9 ; i++){
			console.log(board[i]);
		}
	}

	function userInput(){}

	function isOccupied(number){
		if ($("#id"+number).text() === ''){
			return false;
		}else{
			console.log("this place is occupied");
			return true;
		}
	}

	function place(number){
		$("#id"+number).text('balabalab');
	}

	function random(){
		var random = Math.floor(Math.random() * Math.pow(configObj.boardSize, 2)+ 1);
		return random;
	}

	function isGameOver(){

	}

	this.letAiThink = function(){
		if (isOccupied(random())) {
			letAiThink();
		}else{
			place(random()); // todo
		}
	};

	function letAiThinkHarder() {
		//hard mode
	}

	function gameStartMessage(){
		$("#gamePromote").show();
	}

}