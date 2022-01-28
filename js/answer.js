export function answer() {
  const btnAnswer = document.querySelector('[data-js="btnAnswer"]');
  const txtAnswer = document.querySelector('[data-js="txtAnswer"]');

  btnAnswer?.addEventListener('click', () => {
    btnAnswer.textContent =
      btnAnswer.textContent === 'SHOW ANSWER' ? 'HIDE ANSWER' : 'SHOW ANSWER';
    txtAnswer.classList.toggle('card__hide');
  });
}
