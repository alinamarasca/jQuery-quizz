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
        `<p id="results"> Correct answers: <span>${correct}</span> <br> Incorrect answers: <span>${incorrect}</span>.</p>`
      );
    $("#container").fadeIn(600, function () {
      $("#start-end").append(
        `<button id='play-again-btn'>Start again</button>`
      );
      btnAppear("#play-again-btn");
      $("#play-again-btn").click(function () {
        location.reload();
      });
    });
  });
};

export default showScore;
