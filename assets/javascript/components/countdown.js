import endQuiz from "./endQuiz.js";
import game from "../../data/state.js";

const countdown = time => {
  let timer = setInterval(() => {
    time = time - 1;
    $("#counter").html(time);
    if (time == 0) {
      clearInterval(timer);
      endQuiz(game);
      $("#quiz").remove();
    }
  }, 1000);
};
export default countdown;
