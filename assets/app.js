import startQuiz from "./javascript/components/startQuiz.js";
import questions from "./data/questions.js";
import btnAppear from "./javascript/components/btnAppear.js";
import game from "./data/state.js";
import userTimer from "./javascript/components/userTimer.js";

$(document).ready(function () {
  $("#container").append(
    `<div id='start-end'class='start-end'><h1 id='header-quiz'>Silly Quiz</h1>
  <button id='start-btn'>Start</button></div>`
  );
  $("#start-btn").before(userTimer("info"));
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
