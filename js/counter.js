export function counter() {
  // Question
  const counterOutputQuestion = document.querySelector(
    '[data-js="counterOutputQuestion"]'
  );
  const textareaQuestion = document.querySelector(
    '[data-js="textareaQuestion"]'
  );

  textareaQuestion.addEventListener('input', () => {
    const stringLength = textareaQuestion.value.length;
    counterOutputQuestion.value = 200 - stringLength;
  });
  // Answer
  const counterOutputAnswer = document.querySelector(
    '[data-js="counterOutputAnswer"]'
  );
  const textareaAnswer = document.querySelector('[data-js="textareaAnswer"]');

  textareaAnswer.addEventListener('input', () => {
    const stringLength = textareaAnswer.value.length;
    counterOutputAnswer.value = 200 - stringLength;
  });
}
