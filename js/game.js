function Game(configObj){
	
	var boardSize = configObj.boardSize;
	var elem = configObj.elem;//this is the element that will be appended with board
	var userChoice = configObj.userChoice;
	var pcChoice = configObj.pcChoice;

	this.isOn = false;
	// var userChoice = 'x' || 'o';
	var moves = 0;

	var clicked = new Array(configObj.boardSize * configObj.boardSize);

	this.init = function(){
		createBoard();
		initBoard();
		if (userChoice==='O') {
			this.letAiThink();
		}
	};

	this.place = function(number, item){
		$("#id"+number).text(item);
		moves++;
		console.log('moves is ' + moves);
		clicked[number-1] = true;
	};

	this.end = function(){
		this.reset();
	};

	this.reset = function(){
		moves = 0;
		this.init();
	};

	//easy mode
	this.letAiThink = function(){
		console.log("thinking");
		var temp = random();
		if (isOccupied(temp)) {
			if(moves===8){
				console.log('only one spot is empty go find it');
				//go and find the last unclicked tile
				for(var i = 0 ; i < 9; i++){
					if (clicked[i] === false) {
						console.log('the last spot is ' + i);
						if(userChoice==='x'){
							this.place(i, userChoice);						
						}else{
							this.place(i, pcChoice);
						}
					}
				}
			}else{
				console.log('this place is occupided');
				this.letAiThink();
			}
		}else{
			this.place(temp, pcChoice); 
			clicked[temp] = true;
		}
	};

	this.letAiThinkHarder = function() {
		//hard mode
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
			clicked[i-1] = false;
		}
	}
	
	function isOccupied(number){
		if(clicked[number-1] === true){
			return true;
		}else{
			return false;
		}
	}

	function random(){
		//random will be a number between [1, 10)  1-9
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
}