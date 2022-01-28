export function answer() {
  const buttonAnswer = document.querySelector('[data-js="buttonAnswer"]');
  const txtAnswer = document.querySelector('[data-js="txtAnswer"]');

  buttonAnswer?.addEventListener('click', () => {
    buttonAnswer.textContent =
      buttonAnswer.textContent === 'SHOW ANSWER'
        ? 'HIDE ANSWER'
        : 'SHOW ANSWER';
    txtAnswer.classList.toggle('card__hide');
  });
}
