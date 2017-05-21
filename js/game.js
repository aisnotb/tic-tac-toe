function Game(configObj){
	
	var boardSize = configObj.boardSize;
	var elem = configObj.elem;//this is the element that will be appended with board
	var userChoice = configObj.userChoice;
	console.log('user choice is ' + userChoice);

	this.isOn = false;
	// var userChoice = 'x' || 'o';

	var board = [];
	var clicked = new Array(configObj.boardSize * configObj.boardSize);

	this.init = function(){
		setTimeout(gameStartMessage, 1000);
		createBoard();
		initBoard();
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
			clicked[i-1] = false;
		}
	}
	
	function userInput(){}

	function isOccupied(number){
		if ($("#id"+number).text() == ''){
			return false;
		}else{
			console.log("this place is occupied");
			return true;
		}
	}

	function place(number){
		if(clicked[number-1] == false){
			$("#id"+number).text('balabalab');
			clicked[number-1] = true;
			board[number-1] = userChoice;
		}else{
			alert("place is occupied");
		}
	}

	function random(){
		var random = Math.floor(Math.random() * Math.pow(configObj.boardSize, 2)+ 1);
		return random;
	}

	function isGameOver(){
		//brute force 
		for( var i = 0 ; i < boardSize ; i++){
			for(var j = 0 ; j < boardSize; j++){

			}
		}
	}

	this.letAiThink = function(){
		var temp = random();
		if (isOccupied(temp)) {
			this.letAiThink();
		}else{
			place(temp); // todo
		}
	};

	function letAiThinkHarder() {
		//hard mode
	}

	function gameStartMessage(){
		$("#gamePromote").show();
	}

}