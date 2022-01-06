import answersCheck from "./answersCheck.js";

const createQuestion = obj => {
  const { question, answers, id } = obj;
  //question
  let div = document.createElement("div");
  let questionEl = document.createElement("h2");
  questionEl.innerHTML = question;
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
