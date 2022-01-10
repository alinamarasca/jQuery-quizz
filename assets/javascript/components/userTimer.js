import questions from "../../data/questions.js";

const userTimer = className => {
  const form = document.createElement("form");
  const p = document.createElement("p");
  p.innerHTML = `How much time do you need to answer <span>${questions.length} questions</span>?`;
  form.appendChild(p);
  form.className = className;
  form.id = className;
  //input
  const input = document.createElement("input");
  input.id = "user-time";
  input.type = "number";
  input.name = "user-time";

  const span = document.createElement("span");
  span.innerHTML = "seconds";
  span.appendChild = input;

  const small = document.createElement("small");
  small.innerText = "If you don't set timer, we will set it by default";
  form.append(input, span, small);
  return form;
};

export default userTimer;
