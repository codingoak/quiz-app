// Bookmark Button

const btnBookmark = document.querySelector('[data-js="btnBookmark"]');
const imgBookmark = document.querySelector('[data-js="imgBookmark"]');

btnBookmark?.addEventListener('click', () => {
  imgBookmark.classList.toggle('card__bookmark--filled');
});

// Answer Button

const btnAnswer = document.querySelector('[data-js="btnAnswer"]');
const txtAnswer = document.querySelector('[data-js="txtAnswer"]');
const textShow = 'SHOW ANSWER';
const textHide = 'HIDE ANSWER';

btnAnswer?.addEventListener('click', () => {
  btnAnswer.textContent =
    btnAnswer.textContent === textShow ? textHide : textShow;
  txtAnswer.classList.toggle('card__hide');
});
