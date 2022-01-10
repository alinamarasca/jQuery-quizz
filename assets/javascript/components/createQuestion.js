import answersCheck from "./answersCheck.js";

const createQuestion = obj => {
  const { question, answers, id, hint } = obj;
  // question:
  const div = document.createElement("div");
  const questionEl = document.createElement("div");
  questionEl.className = "question-header";
  questionEl.id = id;
  // question itself
  const h2 = document.createElement("h2");
  h2.innerHTML = question;
  // hint
  const hintEl = document.createElement("div");
  hintEl.innerHTML = `<h4>Hint</h4><span id="hint-${id}">${hint}</span>`;
  hintEl.className = "hint";
  hintEl.id = id;
  questionEl.append(h2, hintEl);
  div.className = "question";
  //answers
  let ulEl = document.createElement("ul");
  //radio for each
  answers.forEach(answer => {
    let radioEl = document.createElement("input");
    radioEl.type = "radio";
    radioEl.name = id;
    radioEl.value = answer;
    let liEl = document.createElement("li");
    liEl.innerText = answer;
    ulEl.appendChild(liEl);
    liEl.appendChild(radioEl);
    liEl.addEventListener("change", answersCheck);
  });
  div.append(questionEl);
  div.append(ulEl);
  return div;
};

export default createQuestion;
