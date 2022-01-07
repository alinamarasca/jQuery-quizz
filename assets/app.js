import startQuiz from "./javascript/components/startQuiz.js";
import questions from "./data/questions.js";
import btnAppear from "./javascript/components/btnAppear.js";

$(document).ready(function () {
  $("#container").append(
    "<div id='start-end'class='start-end'><h1 id='header-quiz'>Silly Quiz</h1><button id='start-btn'>Start</button></div>"
  );
  $("#header-quiz").fadeIn(1500, function () {
    btnAppear("#start-btn");
    // $("#start-btn").css({ opacity: "1" });
    // $("#start-btn").animate({
    //   width: 110,
    //   height: 60
    // });
    // $("#start-btn").animate({
    //   width: 100,
    //   height: 50
    // });
  });

  var box = $("#box2");
  box.animate({
    left: "300"
  });
  box.animate({
    bottom: "300"
  });
  box.animate({
    left: "0",
    bottom: "300"
  });
  box.animate({
    left: "0",
    bottom: "0"
  });

  $("#start-btn").click(function () {
    $("#start-btn").remove();
    startQuiz(questions);
  });
});
