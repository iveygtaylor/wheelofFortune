$( document ).ready(function() {

   console.l og( "ready!" );

   setUp();


});

var game = ['WISCONSIN', 'DEGAS', 'CORVETTE', 'PRINCE', 'WOZNIAK', 'MYSPACE', 'KRAFTWERK', 'AVATAR', 'PALINDROME', 'BYTE'];
//var puzzleHint = ["This midwestern state is known for cheese curds.", "This French artist is most widely known for his paintings of ballerinas. (HINT: Last name only)", "This classic Chevrolet was originally known as the Opel.", "Name the artist who wrote the Bangles classic hit, Manic Monday.", "Not Jobs. Name the other Steve who founded Apple.", "If you took part in this social media site, Tom was probably your first friend.", "Name the 70s German electronic act, known for albums 'Computer Love' and 'It's More Fun to Compute,' are still performing 3D concerts.", "When released in 2009, this movie surpassed 'Titanic' as the all-time highest-grossing movie worldwide.", "This type of word can be spelled the same way backwards and forwards.", "This is made up of 8 bits."]
//var puzzleHintChoice = puzzleHint(Math.floor(Math.random()*10));
//var hint = puzzleHint[puzzleHintChoice];
//var puzzleAnswerChoice = puzzleAnswer(Math.floor(Math.random()*10));
var choice = Math.floor(Math.random()*10);
var answer = game[choice];
var myLength = answer.length;
var display = [myLength];
var win = myLength;
var attemptsLeft = 10;
var letters = answer.split('');
var output="";
var letterChoice="";
//alert(answer);


var setUp = function(){
	for (var i=0; i< answer.length; i++){
		display[i] = "_ ";
		output = output + display[i];
	}
	//document.getElementById("clue").innerHTML = display[i];
	document.getElementById("letterChoice").innerHTML= output;
	output="";

};

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



function Phrase(answer, hint){
	this.answer = answer;
	this.hint = hint
}
















var phrase1 = 'WISCONSIN';
var hint1 = "This midwestern state is known for cheese curds.";
var phrase2 = "DEGAS";
var hint2 = "This French artist is most widely known for his paintings of ballerinas. (HINT: Last name only)";
var phrase3 = "CORVETTE";
var hint3 = "This classic Chevrolet was originally known as the Opel.";
var phrase4 = "PRINCE";
var hint4 = "Name the artist who wrote the Bangles classic hit, Manic Monday.";
var phrase5 = "WOZNIAK";
var hint5 = "Not Jobs. Name the other Steve who founded Apple.";
var phrase6 = "MYSPACE";
var hint6 = "If you took part in this social media site, Tom was probably your first friend.";
var phrase7 = "KRAFTWERK";
var hint7 = "Name the 70s German electronic act, known for albums 'Computer Love' and 'It's More Fun to Compute,' are still performing 3D concerts."
var phrase8 = "AVATAR";
var hint8 = "When released in 2009, this movie surpassed 'Titanic' as the all-time highest-grossing movie worldwide."
var phrase9 = "PALINDROME";
var hint9 = "This type of word can be spelled the same way backwards and forwards.";
var phrase10 = "BYTE"
var hint10 = "This is made up of 8 bits."


