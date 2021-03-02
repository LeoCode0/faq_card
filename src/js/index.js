const allArrows = Array.from(document.querySelectorAll(".question span"));
const allQuestions = Array.from(document.querySelectorAll(".question"));
const allAnswers = Array.from(document.querySelectorAll(".answer"));

const checkClassName = (element, className) => {
  if (element.classList.contains(className)) {
    element.classList.remove(className);
  } else {
    element.classList.add(className);
  }
};

allQuestions.map((question, id) => {
  const currentAnswer = allAnswers[id];
  const currentArrow = allArrows[id];
  question.addEventListener("click", () => {
    checkClassName(question, "strong");
    checkClassName(currentArrow, "rotate");
    checkClassName(currentAnswer, "showAnswer");
  });
});
