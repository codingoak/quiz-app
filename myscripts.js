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
    btnAnswer.textContent === 'SHOW ANSWER' ? 'HIDE ANSWER' : 'SHOW ANSWER';
  txtAnswer.classList.toggle('card__hide');
});

// Navbar -in progress

const btnHome = document.querySelector('[data-js="home"]');
const btnBookmarks = document.querySelector('[data-js="bookmarks"]');
const btnCreate = document.querySelector('[data-js="create"]');
const btnProfile = document.querySelector('[data-js="profile"]');

btnHome.addEventListener('click', () => {
  setActiveClass(btnHome);
  removeActiveClass(btnBookmarks);
  removeActiveClass(btnCreate);
  removeActiveClass(btnProfile);
});

btnBookmarks.addEventListener('click', () => {
  setActiveClass(btnBookmarks);
  removeActiveClass(btnHome);
  removeActiveClass(btnCreate);
  removeActiveClass(btnProfile);
});

btnCreate.addEventListener('click', () => {
  setActiveClass(btnCreate);
  removeActiveClass(btnHome);
  removeActiveClass(btnBookmarks);
  removeActiveClass(btnProfile);
});

btnProfile.addEventListener('click', () => {
  setActiveClass(btnProfile);
  removeActiveClass(btnHome);
  removeActiveClass(btnBookmarks);
  removeActiveClass(btnCreate);
});

function removeActiveClass(dataSelector) {
  dataSelector.classList.remove('nav__active');
}

function setActiveClass(dataSelector) {
  dataSelector.classList.add('nav__active');
}
