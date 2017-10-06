$(document).ready(function(){
    
let person = '';
let aiPlayer = '';
let moves = 0;
let startGame = false;
let gameOver= false;
let player = true;
let currPlayer = person;
let personScore = 0;
let aiScore = 0;

let s0 = $('#s0').html('');
let s1 = $('#s1').html('');
let s2 = $('#s2').html('');
let s3 = $('#s3').html('');
let s4 = $('#s4').html('');
let s5 = $('#s5').html('');
let s6 = $('#s6').html('');
let s7 = $('#s7').html('');
let s8 = $('#s8').html('');

function removeWinner(){
  $("div").removeClass("winner");
}


function resetBoard(){
  s0 = $('#s0').html('');
  s1 = $('#s1').html('');
  s2 = $('#s2').html('');
  s3 = $('#s3').html('');
  s4 = $('#s4').html('');
  s5 = $('#s5').html('');
  s6 = $('#s6').html('');
  s7 = $('#s7').html('');
  s8 = $('#s8').html('');
  moves = 0;
  startGame = true;
  gameOver= false;
  player = true;
  $('.display').html('');
  setInterval(removeWinner, 1000);
};

function resetGame(){
  resetBoard();
  person = '';
  aiPlayer = '';
  personScore = 0;
  aiScore = 0;
  updateScore();
  $('#x').show();
  $('#o').show();
}

$('#new').click(resetBoard);
$('#reset').click(resetGame);

$('.choose').click(function() {
  if($(this).attr('id') === 'x') {
    person = "x";
    aiPlayer = "o";
    $('#o').hide();
  } else {
    person = "o";
    aiPlayer = "x";
    $("#x").hide();
  }
  startGame = true;
});



function takeTurns(currPlayer){
  currPlayer === person ? person : aiPlayer;
};


function checkWin() {
  if(s0 === s1 && s1 === s2 && s0 !== ''){
    if(s0 === person) {
      mark("#s0", "#s1", "#s2");
      personScore = personScore + 1;
    } else {
      aiScore = aiScore + 1;
    }
    gameOver = true;
    updateScore();
    resetBoard();
  } else if(s3 === s4 && s4 === s5 && s3 !== ''){
    if(s3 === person) {
      mark("#s3", "#s4", "#s5");
      personScore = personScore + 1;
    } else {
      aiScore = aiScore + 1;
    }
    gameOver = true;
    updateScore();
    resetBoard();
  } else if(s6 === s7 && s7 === s8 && s6 !== ''){
    if(s6 === person) {
      mark("#s6", "#s7", "#s8");
      personScore = personScore + 1;
    } else {
      aiScore = aiScore + 1;
    }
    gameOver = true;
    updateScore();
    resetBoard();
  } else if(s0 === s3 && s3 === s6 && s0 !== ''){
    if(s0 === person) {
      mark("#s0", "#s3", "#s6");
      personScore = personScore + 1;
    } else {
      aiScore = aiScore + 1;
    }
    gameOver = true;
    updateScore();
    resetBoard();
  } else if(s1 === s4 && s4 === s7 && s1 !== ''){
    if(s1 === person) {
      mark("#s1", "#s4", "#s7");
      personScore = personScore + 1;
    } else {
      aiScore = aiScore + 1;
    }
    gameOver = true;
    updateScore();
    resetBoard();
  } else if(s2 === s5 && s5 === s8 && s2 !== ''){
    if(s2 === person) {
      mark("#s2", "#s5", "#s8");
      personScore = personScore + 1;
    } else {
      aiScore = aiScore + 1;
    }
    gameOver = true;
    updateScore();
    resetBoard();
  } else if(s0 === s4 && s4 === s8 && s0 !== ''){
    if(s0 === person) {
      mark("#s0", "#s4", "#s8");
      personScore = personScore + 1;
    } else {
      aiScore = aiScore + 1;
    }
    gameOver = true;
    updateScore();
    resetBoard();
  } else if(s2 === s4 && s4 === s6 && s2 !== ''){
      if(s2 === person) {
      mark("#s2", "#s4", "#s6");
      personScore = personScore + 1;
    } else {
      aiScore = aiScore + 1;
    }
    gameOver = true;
    updateScore();
    resetBoard();
  } else {
    if(moves === 9) {
      gameOver = true;
      resetBoard();
    }
  }
};

function mark(line1, line2, line3){
  let $line1 = $(line1).attr("background-color", "red");
  let $line2 = $(line2).attr("background-color", "red");
  let $line3 = $(line3).attr("background-color", "red");
  $line1.addClass("winner");
  $line2.addClass("winner");
  $line3.addClass("winner");
}


function checkPos(){
  s0 = $('#s0').html();
  s1 = $('#s1').html();
  s2 = $('#s2').html();
  s3 = $('#s3').html();
  s4 = $('#s4').html();
  s5 = $('#s5').html();
  s6 = $('#s6').html();
  s7 = $('#s7').html();
  s8 = $('#s8').html();
}

function updateScore(){
  $('.person').text(personScore);
  $('.aiPlayer').text(aiScore);
}

function drawPos(id){
  if(id === person) {
    $('#' + id).html(person);
  } else {
    $('#' + id).html(aiPlayer);
  }
};

function aiTurn(){
  switch(true){
    case s0 !== person && s0 !== aiPlayer:
    s0 === aiPlayer;
    drawPos("s0");
    break;
    case s1 !== person && s1 !== aiPlayer:
    s1 === aiPlayer;
    drawPos("s1");
    break;
    case s2 !== person && s2 !== aiPlayer:
    s2 === aiPlayer;
    drawPos("s2");
    break;
    case s3 !== person && s3 !== aiPlayer:
    s3 === aiPlayer;
    drawPos("s3");
    break;
    case s4 !== person && s4 !== aiPlayer:
    s4 === aiPlayer;
    drawPos("s4");
    break;
    case s5 !== person && s5 !== aiPlayer:
    s5 === aiPlayer;
    drawPos("s5");
    break;
    case s6 !== person && s6 !== aiPlayer:
    s6 === aiPlayer;
    drawPos("s6");
    break;
    case s7 !== person && s7 !== aiPlayer:
    s7 === aiPlayer;
    drawPos("s7");
    break;
    case s8 !== person && s8 !== aiPlayer:
    s8 === aiPlayer;
    drawPos("s8");
    break;
  }
};

$('.tile').click(function() {
  if(startGame === true && gameOver === false && player === true) {
    if($(this).html() === '') {
      $(this).html(person);
        checkPos();
        checkWin();
        moves++;
        player = false;
        aiTurn();
        checkPos();
        checkWin();
        moves++;
        player = true;
    }
  }

});

});

