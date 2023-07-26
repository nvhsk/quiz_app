// // TASK 1
// //Gettings Elements from HTML
// const showAnswer = document.querySelector('[data-js="show-answer-button"]');
// const hideAnswer = document.querySelector('[data-js="hide-answer-button"]');
// const answer = document.querySelector('[data-js="answer"]');

// //Show answer
// showAnswer.addEventListener("click", () => {
//   answer.classList.toggle("invisible");
//   showAnswer.classList.toggle("invisible");
//   hideAnswer.classList.toggle("invisible");
// });
// //Hide answer
// hideAnswer.addEventListener("click", () => {
//   answer.classList.toggle("invisible");
//   showAnswer.classList.toggle("invisible");
//   hideAnswer.classList.toggle("invisible");
// });
// // END TASK 1

// TASK 1
// Gettings Elements from HTML
document.addEventListener("DOMContentLoaded", () => {
  const showAnswer = document.querySelector('[data-js="show-answer-button"]');
  const hideAnswer = document.querySelector('[data-js="hide-answer-button"]');
  const answer = document.querySelector('[data-js="answer"]');
  // Show answer
  showAnswer.addEventListener("click", () => {
    answer.classList.toggle("invisible");
    showAnswer.classList.toggle("invisible");
    hideAnswer.classList.toggle("invisible");
  });
  // Hide answer
  hideAnswer.addEventListener("click", () => {
    answer.classList.toggle("invisible");
    showAnswer.classList.toggle("invisible");
    hideAnswer.classList.toggle("invisible");
  });
});
// END TASK 1
