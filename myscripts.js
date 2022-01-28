/******** Bookmark Button ********/

const btnBookmark = document.querySelector('[data-js="btnBookmark"]');
const imgBookmark = document.querySelector('[data-js="imgBookmark"]');

btnBookmark?.addEventListener('click', () => {
  imgBookmark.classList.toggle('card__bookmark--filled');
});

/******** Answer Button ********/

const btnAnswer = document.querySelector('[data-js="btnAnswer"]');
const txtAnswer = document.querySelector('[data-js="txtAnswer"]');
const textShow = 'SHOW ANSWER';
const textHide = 'HIDE ANSWER';

btnAnswer?.addEventListener('click', () => {
  btnAnswer.textContent =
    btnAnswer.textContent === 'SHOW ANSWER' ? 'HIDE ANSWER' : 'SHOW ANSWER';
  txtAnswer.classList.toggle('card__hide');
});

/******** Navbar icon and page display ********/

/******************************************
 ******** still under construction ********/

// const buttons
const btnHome = document.querySelector('[data-js="btnHome"]');
const btnBookmarks = document.querySelector('[data-js="btnBookmarks"]');
const btnCreate = document.querySelector('[data-js="btnCreate"]');
const btnProfile = document.querySelector('[data-js="btnProfile"]');
// const sites
const home = document.querySelector('[data-js="home"]');
const bookmarks = document.querySelector('[data-js="bookmarks"]');
const create = document.querySelector('[data-js="create"]');
const profile = document.querySelector('[data-js="profile"]');

// Activate home icon and show content
btnHome.addEventListener('click', () => {
  setActiveSite(btnHome, home);
  removeActiveSite(btnBookmarks, bookmarks);
  removeActiveSite(btnCreate, create);
  removeActiveSite(btnProfile, profile);
});
// Activate bookmarks icon and show content
btnBookmarks.addEventListener('click', () => {
  setActiveSite(btnBookmarks, bookmarks);
  removeActiveSite(btnCreate, create);
  removeActiveSite(btnProfile, profile);
  removeActiveSite(btnHome, home);
});
// Activate create icon and show content
btnCreate.addEventListener('click', () => {
  setActiveSite(btnCreate, create);
  removeActiveSite(btnHome, home);
  removeActiveSite(btnBookmarks, bookmarks);
  removeActiveSite(btnProfile, profile);
});
// Activate profile icon and show content
btnProfile.addEventListener('click', () => {
  setActiveSite(btnProfile, profile);
  removeActiveSite(btnHome, home);
  removeActiveSite(btnBookmarks, bookmarks);
  removeActiveSite(btnCreate, create);
});
// enable icon and site
function setActiveSite(btnSelector, siteSelector) {
  btnSelector.classList.add('nav__active');
  siteSelector.classList.remove('hidden');
}
// disable icon and site
function removeActiveSite(btnSelector, siteSelector) {
  btnSelector.classList.remove('nav__active');
  siteSelector.classList.add('hidden');
}

// const siteElements = document.querySelectorAll('.js-siteElements');
// console.log(siteElements);

// for (let i = 0; i < siteElements.length; i++) {
//   console.log(siteElements[i]);
//   console.log(siteElements.classList)
//   if (siteElements.classList.hasOwnProperty('hidden')) {
//     console.log('it contains hidden')
//   }
// }

/******** Counter textarea ********/

// Question
const counterOutputQuestion = document.querySelector(
  '[data-js="counterOutputQuestion"]'
);
const textareaQuestion = document.querySelector('[data-js="textareaQuestion"]');
const counterQuestion = 200;

textareaQuestion.addEventListener('input', () => {
  const stringLength = textareaQuestion.value.length;
  counterOutputQuestion.value = counterQuestion - textareaQuestion.value.length;
});

// Answer
const counterOutputAnswer = document.querySelector(
  '[data-js="counterOutputAnswer"]'
);
const textareaAnswer = document.querySelector('[data-js="textareaAnswer"]');
const counterAnswer = 200;

textareaAnswer.addEventListener('input', () => {
  const stringLength = textareaAnswer.value.length;
  counterOutputAnswer.value = counterAnswer - textareaAnswer.value.length;
});
