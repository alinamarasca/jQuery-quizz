import startQuiz from "./startQuiz.js";
import questions from "../../data/questions.js";
import btnAppear from "./btnAppear.js";

const showScore = state => {
  //fade & clean
  $("#container").fadeOut(600, function () {
    $("#quiz").remove();
    //add score
    let { correct, incorrect } = state;
    $("#start-end")
      .addClass("start-end")
      .append(
        `<h2 id="results"> Your result: <br> Correct answers: ${correct} <br> Incorrect answers: ${incorrect}.<br>`
      );
    $("#container").fadeIn(800, function () {
      $("#start-end").append(
        `<button id='play-again-btn'>Start again</button>`
      );
      btnAppear("#play-again-btn");
    });

    $("#play-again-btn").click(function () {
      $(this).remove();
      $("h2").remove();
      startQuiz(questions);
    });
  });
};

export default showScore;
