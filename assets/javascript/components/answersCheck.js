import game from "../../data/state.js";
import questions from "../../data/questions.js";

const answersCheck = e => {
  let userAnswer = e.target.value;
  let questionId = e.target.name;
  let question = questions.find(item => item.id == questionId);
  if (question.correct === userAnswer) {
    game.correct++;
  } else {
    game.incorrect++;
  }
};

export default answersCheck;
