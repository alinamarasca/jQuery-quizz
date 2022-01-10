import createQuestion from "./createQuestion.js";
import countdown from "./countdown.js";
import game from "../../data/state.js";
// import questions from "../../data/questions.js";

const startQuiz = array => {
  //clean score

  game.correct = 0;
  game.incorrect = 0;

  //show questions
  $("#start-btn").remove();
  $("#info").remove();
  $("#container").append($('<div id="quiz"></div>'));
  $("#quiz").prepend(
    `<h2 class="timer"> Time remaining: <span id="counter">${game.counter}</span> seconds</h2>`
  );
  $.each(array, function (i, val) {
    $("#quiz").append(createQuestion(val));
    $(".question").fadeIn(800);
  });

  $(".hint").click(e => {
    const id = e.currentTarget.id;
    $(`#hint-${id}`).show({
      done: () => {
        $(`#hint-${id}`).mouseleave(e => $(`#hint-${id}`).hide(1000));
      }
    });
  });

  //start timer
  countdown(game.counter);
};

export default startQuiz;
