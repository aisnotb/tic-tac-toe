function Game(configObj){
	
	var boardSize = configObj.boardSize;
	var elem = configObj.elem;//this is the element that will be appended with board
	var userChoice = configObj.userChoice;
	var pcChoice = configObj.pcChoice;

	this.isOn = false;
	// var userChoice = 'x' || 'o';

	var board = [];
	var clicked = new Array(configObj.boardSize * configObj.boardSize);

	this.init = function(){
		createBoard();
		initBoard();
	};

	this.place = function(number, item){
		$("#id"+number).text(item);
		clicked[number-1] = true;
		board[number-1] = userChoice;
	};

	this.end = function(){
		this.reset();
	};

	this.reset = function(){
		this.init();
	};

	this.letAiThink = function(){
		userInput();
		console.log("thinking");
		var temp = random();

		console.log('random is ' + temp);
		if (isOccupied(temp)) {
			console.log('is occupide');
			this.letAiThink();
		}else{
			this.place(temp, pcChoice); 
			console.log("pc choice is " + pcChoice);
			clicked[temp-1] = true;
		}
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
		// $("span").text('');
		for (var i = 1; i <= 9; i++) {
			clicked[i-1] = false;
		}
	}
	
	function userInput(){
		console.log('user choice is ' + userChoice);
		console.log('pc choice is ' + pcChoice);
	}

	function isOccupied(number){
		if(clicked[number-1] === true){
			return true;
		}else{
			return false;
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

	function letAiThinkHarder() {
		//hard mode
	}

}