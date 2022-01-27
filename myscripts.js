// Bookmark Button

const btnBookmark = document.querySelector('[data-js="btnBookmark"]');
const imgBookmark = document.querySelector('[data-js="imgBookmark"]');

btnBookmark?.addEventListener('click', () => {
  imgBookmark.classList.toggle('card__bookmark--filled');
});

// Answer Button

const btnAnswer = document.querySelector('[data-js="btnAnswer"]');
const txtAnswer = document.querySelector('[data-js="txtAnswer"]');

btnAnswer?.addEventListener('click', () => {
  btnAnswer.textContent =
    btnAnswer.textContent === 'SHOW ANSWER'
      ? (btnAnswer.textContent = 'HIDE ANSWER')
      : (btnAnswer.textContent = 'SHOW ANSWER');
  txtAnswer.classList.toggle('card__hide');
});

// Counter textarea

const txtQuestion = document.querySelector('[data-js="txtQuestion"]');
const counterQuestion = document.querySelector('[data-js="counterQuestion"]');

console.clear();
let counter = 0;

document.body.addEventListener('keydown', () => {
  console.log('aha');
});
