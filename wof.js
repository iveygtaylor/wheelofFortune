var game;
$( document ).ready(function() {
   console.log( "ready!" );
   //chooses phrase
   //setUp();
   game = new Game;
   game.start();
});

function Game(){
	this.words = ['ARGUMENT', 'THIS', 'CONCATENATE', 'STRING', 'INTEGER', 'CALLBACK', 'FUNCTION', 'SCOPE', 'LOOP', 'GIT'];
	this.choice = Math.floor(Math.random()*10);
	this.answer = this.words[this.choice];
	this.myLength = this.answer.length;
	this.display = [this.myLength];
	this.win = this.myLength;
    this.attemptsLeft = 10;
	this.letters = this.answer.split('');
	this.output="";
	this.letterChoice = "";
	this.guesses = [];
	this.spinWheel;

	this.start = function(){
		console.log('game started');
		this.start_wheel();
		this.draw_board();
	}
	this.draw_board = function(){
		console.log(this.answer);
		for (var i=0; i < this.answer.length; i++){
			if(this.guesses.indexOf(this.answer[i]) == -1 ){
				// this.display[i] = "_ ";
				this.display[i] = '<div class="tile" id="tile-'+(i+1)+'"><h1>&nbsp;</h1></div>';
				document.getElementById("guesses").innerHTML = "Oops! That letter is not in the phrase. Spin again!"
			} else {
				this.display[i] = '<div class="tile" id="tile-'+(i+1)+'"><h1>'+this.answer[i]+'</h1></div>';
				// this.answer[i] + " ";
			}
			this.output += this.display[i];
		}
		//document.getElementById("clue").innerHTML = display[i];
		document.getElementById("letterChoice").innerHTML = this.output;
		this.output = "";		
	}
	this.start_wheel = function(){
		console.log("wheel should fired");
		 this.spinWheel = new Winwheel({
			'canvasId' : 'myCanvas',
			'linewidth' : 10, 
			'numSegments' : 7,
			'textAlignment' : 'outer',
			'textMargin': 15, 
			'textFontSize': 36,  
			'segments' :
			[
				{'fillStyle' : '#669999', 'text' : 'Vowel'},
				{'fillStyle' : '#89f26e', 'text' : 'Consonant'},
				{'fillStyle' : '#7de6ef', 'text' : 'Vowel'},
				{'fillStyle' : '#e7706f', 'text' : 'Consonant'}, 
				{'fillStyle' : '#cc66ff', 'text' : 'Vowel'}, 
				{'fillStyle' : '#ffff66', 'text' : 'Consonant'}, 
				{'fillStyle' : '#ac7339', 'text' : 'Consonant'}
			],

			'animation': 
				{
					'type' : 'spinToStop', 
					'duration' : 5, 
					'spins': 8
				} 
		});
	}

	this.guess = function(){
		this.output=""; 
		this.letterChoice = $('#letterField').val(); 
		console.log('guessing ' + this.letterChoice);
		this.guesses.push(this.letterChoice);
		$('#letterField').val("");
		this.draw_board();


		//This should be its own Function
		// for (var c=10; c < this.answer.length; c++){
		// 	if (this.letterChoice == this.letters[c]){
		// 		this.display[c] = this.letterChoice;
		// 		this.win--;
		// 	} else {
		// 		this.output += this.display[c] + " ";
		// 	}
		// 	document.getElementById("letterChoice").innerHTML = this.output; 
		// 	this.output=""; 
		// 	this.attemptsLeft--;

		// 	if (this.win < 1) {
		// 		document.getElementById('guesses').innerHTML = 'You Win!';
		// 	} else if (this.attemptsLeft < 1) {
		// 		document.getElementById('guesses').innerHTML = 'You Lose. Better Luck Next Time.';
		// 	} else if (this.attemptsLeft > 1) {
		// 		document.getElementById("guesses").innerHTML = "'Spin again. You have ' + attemptsLeft + 'guesses left.'";  
		// 	} else {
		// 		document.getElementById("guesses").innerHTML = "Oops! That letter is not in the phrase. Spin again!"
		// 	}
		// }	

	}

}

// var words = ['ARGUMENT', 'THIS', 'CONCATENATE', 'STRING', 'INTEGER', 'CALLBACK', 'FUNCTION', 'SCOPE', 'LOOP', 'GIT'];
// //var puzzleHint = ["This midwestern state is known for cheese curds.", "This French artist is most widely known for his paintings of ballerinas. (HINT: Last name only)", "This classic Chevrolet was originally known as the Opel.", "Name the artist who wrote the Bangles classic hit, Manic Monday.", "Not Jobs. Name the other Steve who founded Apple.", "If you took part in this social media site, Tom was probably your first friend.", "Name the 70s German electronic act, known for albums 'Computer Love' and 'It's More Fun to Compute,' are still performing 3D concerts.", "When released in 2009, this movie surpassed 'Titanic' as the all-time highest-grossing movie worldwide.", "This type of word can be spelled the same way backwards and forwards.", "This is made up of 8 bits."]
// //var puzzleHintChoice = puzzleHint(Math.floor(Math.random()*10));
// //var hint = puzzleHint[puzzleHintChoice];
// //var puzzleAnswerChoice = puzzleAnswer(Math.floor(Math.random()*10));
// //Original code from video before
// var choice = Math.floor(Math.random()*10);
// var answer = words[choice];
// var myLength = answer.length;
// var display = [myLength];
// var win = myLength;
// var attemptsLeft = 10;
// var letters = answer.split('');
// var output="";
// var letterChoice="";
// //alert(answer);*/

// var setUp = function(){
// for (var i=0; i < this.answer.length; i++){
// 		display[i] = "_ ";
// 		output = output + display[i];
// 	}
// 	//document.getElementById("clue").innerHTML = display[i];
// 	document.getElementById("letterChoice").innerHTML= output;
// 	output="";
// };

// var submit = function (){

// 	output=""; 
// 	letterChoice = $('#letterButton').val(); 
// 	$('#letterButton').value="";

// 	for (var c=10; c < answer.length; c++){
// 		if (letterChoice == letters[c]){
// 			display[c] = letterChoice;
// 			win--;
// 		} else {
// 			output += display[c] + " ";
// 		}
// 		document.getElementById("letterChoice").innerHTML = output; 
// 		output=""; 
// 		attemptsLeft--;

// 		if (win < 1) {
// 			document.getElementById('guesses').innerHTML = 'You Win!';
// 		} else if (attemptsLeft < 1) {
// 			document.getElementById('guesses').innerHTML = 'You Lose. Better Luck Next Time.';
// 		} else if (attemptsLeft > 1) {
// 			document.getElementById("guesses").innerHTML = "'Spin again. You have ' + attemptsLeft + 'guesses left.'";  
// 		} else {
// 			document.getElementById("guesses").innerHTML = "Oops! That letter is not in the phrase. Spin again!"
// 		}
// 	}	

// };





/* var Puzzle = function (phrase){
	this.phrase = phrase;
	var phrase = [];
	var choice = Math.floor(Math.random()*10);
	var game = phrase[choice]; 
	var gameLength = this.answer.length; 
	var displayAnswer = [gameLength];
	var displayHint = this.hint; 
	var letters = displayAnswer.split('');
	var output = ''; 
	var letterChoice = '';
};
	
	/*for (var i=0; i < this.answer.length; i++){
		displayAnswer[i] = "_ ";
		output = output + displayAnswer[i];
	}
	//document.getElementById("clue").innerHTML = display[i];
	document.getElementById("letterChoice").innerHTML= output;
	output="";

};


var Phrases = function(answer, hint){
	this.answer = answer;
	this.hint = hint
};*/




/*var phrase1 = new Phrases ('WISCONSIN', 'This midwestern state is known for cheese curds.');

var phrase2 = new Phrases ('DEGAS', 'This French artist is most widely known for his paintings of ballerinas. (HINT: Last name only)');

var phrase3 = new Phrases ('CORVETTE', 'This classic Chevrolet was originally known as the Opel.');

var phrase4 = new Phrases ('PRINCE', 'Name the artist who wrote the Bangles classic hit, Manic Monday.');

var phrase5 = new Phrases ('WOZNIAK', 'Not Jobs. Name the other Steve who founded Apple.'); 

var phrase6 = new Phrases ('MYSPACE', 'If you took part in this social media site, Tom was probably your first friend.');

var phrase7 = new Phrases ("KRAFTWERK", "Name the 70s German electronic act, known for albums 'Computer Love' and 'It's More Fun to Compute,' are still performing 3D concerts."); 

var phrase8 = new Phrases ("AVATAR", "When released in 2009, this movie surpassed 'Titanic' as the all-time highest-grossing movie worldwide."); 
 
var phrase9 = new Phrases ("PALINDROME", "This type of word can be spelled the same way backwards and forwards."); 

var phrase10 = new Phrases ("BYTE", "This is made up of 8 bits.");*/



