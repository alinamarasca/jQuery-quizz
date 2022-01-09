import startQuiz from "./javascript/components/startQuiz.js";
import questions from "./data/questions.js";
import btnAppear from "./javascript/components/btnAppear.js";
import game from "./data/state.js";

$(document).ready(function () {
  $("#container").append(
    `<div id='start-end'class='start-end'><h1 id='header-quiz'>Silly Quiz</h1><p id="info" class = 'info'>Hello there! We have <span>${questions.length} questions</span> in our 'Silly quiz'. 
    <br> How much time do you need to answer them? <br><br><span><input id="user-time" type="number" name="user-time"></input> seconds.</span><br>
    <small> If you don't provide time, we will set timer by default.</small></p><button id='start-btn'>Start</button></div>`
  );

  $("#header-quiz").fadeIn(1500, function () {
    $("#info").slideDown(1000, function () {
      btnAppear("#start-btn");
    });
  });

  $("#start-btn").click(function () {
    let input = $("input#user-time");
    game.counter = input.val();
    if (game.counter === "") {
      game.counter = questions.length * 5;
    }
    $("#start-btn").remove();
    startQuiz(questions);
  });
});
