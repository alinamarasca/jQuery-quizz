const setTime = input => {
  document.getElementById("user-time").addEventListener("change", () => {
    game.counter = input.value;
  });
};
