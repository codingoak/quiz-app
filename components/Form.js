export default function Form(formElement) {
  // Question
  const counterOutputQuestion = formElement.querySelector(
    '[data-js="counterOutputQuestion"]'
  );
  const textareaQuestion = formElement.querySelector(
    '[data-js="textareaQuestion"]'
  );

  textareaQuestion.addEventListener('input', () => {
    const stringLength = textareaQuestion.value.length;
    const charsRemaining = 200 - stringLength;

    counterOutputQuestion.value =
      charsRemaining > 1
        ? `${charsRemaining} characters remaining`
        : `${charsRemaining} character  remaining`;
  });

  // Answer
  const counterOutputAnswer = formElement.querySelector(
    '[data-js="counterOutputAnswer"]'
  );
  const textareaAnswer = formElement.querySelector(
    '[data-js="textareaAnswer"]'
  );

  textareaAnswer.addEventListener('input', () => {
    const stringLength = textareaAnswer.value.length;
    const charsRemaining = 200 - stringLength;

    counterOutputAnswer.value =
      charsRemaining > 1
        ? `${charsRemaining} characters remaining`
        : `${charsRemaining} character remaining`;
  });

  // Tags
  const counterOutputTags = formElement.querySelector(
    '[data-js="counterOutputTags"]'
  );
  const textareaTags = formElement.querySelector('[data-js="textareaTags"]');

  textareaTags.addEventListener('input', () => {
    const stringLength = textareaTags.value.length;
    const charsRemaining = 100 - stringLength;

    counterOutputTags.value =
      charsRemaining > 1
        ? `${charsRemaining} characters remaining`
        : `${charsRemaining} character remaining`;
  });
}
