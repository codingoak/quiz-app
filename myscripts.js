// Bookmark Button

const btnBookmark = document.querySelector('[data-js="btnBookmark"]');
const imgBookmark = document.querySelector('[data-js="imgBookmark"]');

btnBookmark.addEventListener('click', () => {
  imgBookmark.classList.toggle('card__bookmark--filled');
});

// Answer Button

const btnAnswer = document.querySelector('[data-js="btnAnswer"]');
const txtAnswer = document.querySelector('[data-js="txtAnswer"]');

btnAnswer.addEventListener('click', () => {
  if (btnAnswer.textContent === 'SHOW ANSWER') {
    btnAnswer.textContent = 'HIDE ANSWER';
    txtAnswer.classList.toggle('card__hide');
  } else {
    btnAnswer.textContent = 'SHOW ANSWER';
    txtAnswer.classList.toggle('card__hide');
  }
});
