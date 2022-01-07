import startQuiz from "./startQuiz.js";
import questions from "../../data/questions.js";

const showScore = state => {
  let { correct, incorrect } = state;
  $("#start-end")
    .append(
      `<h2> Your result: <br> Correct answers: ${correct} <br> Incorrect answers: ${incorrect}.`
    )
    .addClass("start-end")
    .append("<button id='play-again-btn'>Start again</button>");
  $("#play-again-btn").click(function () {
    $(this).remove();
    $("h2").remove();

    startQuiz(questions);
  });
};

export default showScore;
