var submit = function (){

	output="";
	letterChoice = $('#letterField').val();
	$('#letterField').value="";

	for (var c=0; c < answer.length; c++){
		//debugger;
		if (letterChoice == letters[c]){

			display[c] = letterChoice;
			win--;
		} else {

		}
		output = output + display[c] + " ";
	}
	document.getElementById("letterChoice").innerHTML = output;
	output="";
	attemptsLeft--;

	if (win < 1) {
		document.getElementById("guesses").innerHTML = "You Win!";
	} else if (attemptsLeft < 1) {
		document.getElementById("guesses").innherHTML = "You Lose."; 

	} else if (attemptsLeft > 1) {
		document.getElementById("guesses").innherHTML = "You have " + attemptsLeft + " guesses left";
	} else {
		document.getElementById("guesses").innerHTML = "Choose another letter that is not in the "
	}
}

var game; 
var wheel;
var canSpin;
var slices = 6;
var sliceChoices = ['CONSONANT', 'VOWEL', 'CONSONANT', 'VOWEL', 'CONSONANT', 'VOWEL']; 
var choice 
var choiceText;

window.onload = function(){
	game = new Phaser.Game(458, 488, Phaser.AUTO, '',null, true);
	game.state.add ('PlayGame', playGame);
	game.state.start('PlayGame');
};

//PlayGame State
 var playGame = function(game){}; 

 playGame.prototype = {
 	preload: function () {
 		game.load.image("wheel", "Wheel.png");
 		game.load.image("pin", "pin.png")
 	}
 };

 var wheelSetup = function(){
 	//game.stage.backgroundColor = "#FFFFFF";
 	wheel = game.add.sprite(game.width / 2, game.width / 2, "wheel");
 		wheel.anchor.set(0.5);
 		var pin = game.add.sprite(game.width / 2, game.width / 2, "pin");
 		pin.anchor.set(0.5);
 		canSpin = true; 
 		game.input.onDown.add(this.spin, this);

 };

 //spin the wheel

 var spin = function(){
 	if (canSpin) {

 		var rounds = game.rnd.between(4, 6);
 		var degrees = game.rnd.between(0, 360);
 		choice = slices - 1 - Math.floor(degrees / (360 / slices));
 		canSpin = false;
 		var spinTween = game.add.tween(wheel).to({
 			angle: 360 * rounds + degrees
 		}, 3000, Phaser.Easing.Quadratic.Out, true);
 		spinTween.onComplete.add(this.pick, this);

 	}
 };

 /*pick(){
 	
 	canSpin=true; 

 	}
};*/

