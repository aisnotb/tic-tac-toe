function Game(){
	
	this.isOn = false;

	this.init = function(){
		alert('inited');
		setTimeout(gameStartMessage, 1000);
	};

	this.end = function(){
		this.reset();
	};

	this.reset = function(){
		this.init();
	};

	function update(){

	}

	function initBoard(){}

	function computerMakeChoice(){}

	function gameStartMessage(){
		$("#gamePromote").show();
	}


}