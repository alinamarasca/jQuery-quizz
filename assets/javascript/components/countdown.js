import showScore from "./showScore.js";
import game from "../../data/state.js";

const countdown = time => {
  let timer = setInterval(() => {
    time = time - 1;
    $("#counter").html(time);
    if (time == 0) {
      clearInterval(timer);
      showScore(game);
      // $("#quiz").fadeOut(1000);
    }
  }, 1000);
};
export default countdown;
