import createQuestion from "./createQuestion.js";
import countdown from "./countdown.js";
import game from "../../data/state.js";

const startQuiz = array => {
  //clean score

  game.correct = 0;
  game.incorrect = 0;

  //show questions
  $("#start-end").removeClass("start-end");
  $("#start-btn").remove();
  $("#container").append($('<div id="quiz"></div>'));
  $("#quiz").prepend(
    `<h2 class="timer"> Time remaining: <span id="counter">${game.counter}</span> seconds</h2>`
  );
  $.each(array, function (i, val) {
    $("#quiz").append(createQuestion(val));
    $(".question").fadeIn(800);
  });
  //start timer
  countdown(game.counter);
};

export default startQuiz;
