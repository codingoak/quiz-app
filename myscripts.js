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

const btnHome = document.querySelector('[data-js="btnHome"]');
const btnBookmarks = document.querySelector('[data-js="btnBookmarks"]');
const btnCreate = document.querySelector('[data-js="btnCreate"]');
const btnProfile = document.querySelector('[data-js="btnProfile"]');

const home = document.querySelector('[data-js="home"]');
const bookmarks = document.querySelector('[data-js="bookmarks"]');
const create = document.querySelector('[data-js="create"]');
const profile = document.querySelector('[data-js="profile"]');

btnHome.addEventListener('click', () => {
  // Activate navbar icon
  setActiveClass(btnHome);
  removeActiveClass(btnBookmarks);
  removeActiveClass(btnCreate);
  removeActiveClass(btnProfile);
  // Display active content
  home.classList.remove('hidden');
  bookmarks.classList.add('hidden');
  create.classList.add('hidden');
  // profile.classList.add('hidden');
});

btnBookmarks.addEventListener('click', () => {
  // Activate navbar icon
  setActiveClass(btnBookmarks);
  removeActiveClass(btnCreate);
  removeActiveClass(btnProfile);
  removeActiveClass(btnHome);
  // Display active content
  bookmarks.classList.remove('hidden');
  create.classList.add('hidden');
  profile.classList.add('hidden');
  home.classList.add('hidden');
});

btnCreate.addEventListener('click', () => {
  // Activate navbar icon
  setActiveClass(btnCreate);
  removeActiveClass(btnHome);
  removeActiveClass(btnBookmarks);
  removeActiveClass(btnProfile);
  // Display active content
  create.classList.remove('hidden');
  profile.classList.add('hidden');
  home.classList.add('hidden');
  bookmarks.classList.add('hidden');
});

btnProfile.addEventListener('click', () => {
  // Activate navbar icon
  setActiveClass(btnProfile);
  removeActiveClass(btnHome);
  removeActiveClass(btnBookmarks);
  removeActiveClass(btnCreate);
  // Display active content
  profile.classList.remove('hidden');
  home.classList.add('hidden');
  bookmarks.classList.add('hidden');
  create.classList.add('hidden');
});

function removeActiveClass(dataSelector) {
  dataSelector.classList.remove('nav__active');
}

function setActiveClass(dataSelector) {
  dataSelector.classList.add('nav__active');
}
