console.clear();

// Bookmark Button

const btnBookmark = document.querySelector('[data-js="btnBookmark"]');
const imgBookmark = document.querySelector('[data-js="imgBookmark"]');

btnBookmark.addEventListener('click', () => {
  imgBookmark.classList.toggle('card__bookmark--filled');
});

// Answer Button

const btnAnswer = document.querySelector('[data-js="btnAnswer"]');
const txtShow = document.querySelector('[data-js="txtShow"]');
const txtHide = document.querySelector('[data-js="txtHide"]');
const txtAnswer = document.querySelector('[data-js="txtAnswer"]');

btnAnswer.addEventListener('click', () => {
  txtAnswer.classList.toggle('card__hide');
  txtShow.classList.toggle('card__hide');
  txtHide.classList.toggle('card__hide');
});
