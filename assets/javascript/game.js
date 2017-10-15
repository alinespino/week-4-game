
//SET VALUES//
var wins = 0;
var losses = 0;
var score = 0;

var randomNumber = 0;
var gameStatus = 'new';


//SET FUNCTIONS // 

// Wins //

function winCount() {
	wins ++;
}

// Losses // 

function lossesCount() {
	losses ++;
}

// Generate random number//

function random (min,max) {
	return (Math.floor(Math.random() * (max - min))+ min);

}

//New game // 

function newGame(){

score = 0; 
wins = 0;
losses = 0;
gameStatus = 'new';

randomNumber = random(19,120);
$("#randomNumber").html(randomNumber);


$("#blue").attr("data-val",random(1,12));

$("#green").attr("data-val",random(1,12));

$("#red").attr("data-val",random(1,12));

$("#yellow").attr("data-val",random(1,12));

}

// Restart // 

function restart(){
	score = 0;
	gameStatus='new'

 randomNumber = random(19,120);
$("#randomNumber").html(randomNumber);


$("#blue").attr("data-val",random(1,12));

$("#green").attr("data-val",random(1,12));

$("#red").attr("data-val",random(1,12));

$("#yellow").attr("data-val",random(1,12));

}

// RUN ONCE PAGE LOADS // 

$(document).ready(function(){


newGame();

$(".crystals").on("click", function() {

if (gameStatus==='new') {	
 //$("score").val($("score") + parseInt($(this).attr("data-val")));
score = score + parseInt($(this).attr("data-val")) ; 	

$("#score").html("Your total score is: " + score);

if (score === randomNumber){
	winCount();
$("#wins").html("Wins: " + wins);
gameStatus = 'win';
alert ("GOOD JOB EINSTEIN! Go Again!");
restart();

}

else if (score > randomNumber){
	lossesCount();
$("#losses").html("Losses: " + losses);
gameStatus = 'loose';
alert ( "LOSER! Try Again !");
restart();

};

}


});

});
// $("#playAgain").on("click", function (){
// 	restart();

// console.log($("#blue").attr("data-val"));
// console.log($("#green").attr("data-val"));
// console.log($("#red").attr("data-val"));
// console.log($("#yellow").attr("data-val"));

// })


// console.log($("#blue").attr("data-val"));
// console.log($("#green").attr("data-val"));
// console.log($("#red").attr("data-val"));
// console.log($("#yellow").attr("data-val"));



// });
