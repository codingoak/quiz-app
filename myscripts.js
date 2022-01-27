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

// Navbar

const home = document.querySelector('[data-js="home"]');
const bookmarks = document.querySelector('[data-js="bookmarks"]');
const create = document.querySelector('[data-js="create"]');
const create = document.querySelector('[data-js="create"]');

const btnHome = document.querySelector('[data-js="btnHome"]');
const btnBookmarks = document.querySelector('[data-js="btnBookmarks"]');
const btnCreate = document.querySelector('[data-js="btnCreate"]');
const btnProfile = document.querySelector('[data-js="btnProfile"]');

btnHome.addEventListener('click', () => {});

btnBookmarks.addEventListener('click', () => {});

btnCreate.addEventListener('click', () => {});

btnProfile.addEventListener('click', () => {});
