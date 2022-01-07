import showScore from "./showScore.js";
import game from "../../data/state.js";

const countdown = time => {
  let timer = setInterval(() => {
    time = time - 1;
    $("#counter").html(time);
    if (time == 0) {
      clearInterval(timer);
      showScore(game);
      $("#quiz").remove();
    }
  }, 1000);
};
export default countdown;
