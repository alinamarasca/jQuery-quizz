import startQuiz from "./javascript/components/startQuiz.js";
import questions from "./data/questions.js";

$(document).ready(function () {
  $("#container").append(
    "<div id='start-end'class='start-end'><h1 id='header-quiz'>Silly Quiz</h1><button id='start-btn'>Start</button></div>"
  );
  $("#header-quiz").fadeIn(1500, function () {
    $("#start-btn").css({ opacity: "1" }).slideDown("slow");
  });

  $("#start-btn").click(function () {
    $("#start-btn").remove();
    startQuiz(questions);
  });
});
