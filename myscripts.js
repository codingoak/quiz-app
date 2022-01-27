console.clear();

// Bookmark Button

const btnBookmark = document.querySelector('[data-js="btnBookmark"]');
const imgBookmark = document.querySelector('[data-js="imgBookmark"]');

btnBookmark.addEventListener('click', () => {
  imgBookmark.classList.toggle('card__bookmark--filled');
});

// Answer Button

const btnAnswer = document.querySelector('[data-js="btnAnswer"]');
const txtAnswer = document.querySelector('[data-js="txtAnswer"]');

btnAnswer?.addEventListener('click', () => {
  btnAnswer.textContent =
    btnAnswer.textContent === 'SHOW ANSWER' ? 'HIDE ANSWER' : 'SHOW ANSWER';
  txtAnswer.classList.toggle('card__hide');
});

// Navbar

const btnHome = document.querySelector('[data-js="home"]');
const btnBookmarks = document.querySelector('[data-js="bookmarks"]');
const btnCreate = document.querySelector('[data-js="create"]');
const btnProfile = document.querySelector('[data-js="profile"]');

btnHome.addEventListener('click', () => {
  console.log('home clicked');
  btnHome.classList.add('nav__active');
  btnBookmarks.classList.remove('nav__active');
  btnCreate.classList.remove('nav__active');
  btnProfile.classList.remove('nav__active');
});

btnBookmarks.addEventListener('click', () => {
  console.log('bookmarks clicked');
  btnBookmarks.classList.add('nav__active');
  btnHome.classList.remove('nav__active');
  btnCreate.classList.remove('nav__active');
  btnProfile.classList.remove('nav__active');
});

btnCreate.addEventListener('click', () => {
  console.log('create clicked');
  btnCreate.classList.add('nav__active');
  btnHome.classList.remove('nav__active');
  btnBookmarks.classList.remove('nav__active');
  btnProfile.classList.remove('nav__active');
});

btnProfile.addEventListener('click', () => {
  console.log('profile clicked');
  btnProfile.classList.add('nav__active');
  btnHome.classList.remove('nav__active');
  btnBookmarks.classList.remove('nav__active');
  btnCreate.classList.remove('nav__active');
});
