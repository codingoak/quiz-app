export function navbar() {
  /******* still under construction ********/

  // const buttons
  const buttonHome = document.querySelector('[data-nav="home"]');
  const buttonBookmarks = document.querySelector('[data-nav="bookmarks"]');
  const buttonCreate = document.querySelector('[data-nav="create"]');
  const buttonProfile = document.querySelector('[data-nav="profile"]');
  // const sites
  const home = document.querySelector('[data-page="home"]');
  const bookmarks = document.querySelector('[data-page="bookmarks"]');
  const create = document.querySelector('[data-page="create"]');
  const profile = document.querySelector('[data-page="profile"]');

  // Activate home icon and show content
  buttonHome.addEventListener('click', () => {
    setActiveSite(buttonHome, home);
    removeActiveSite(buttonBookmarks, bookmarks);
    removeActiveSite(buttonCreate, create);
    removeActiveSite(buttonProfile, profile);
  });
  // Activate bookmarks icon and show content
  buttonBookmarks.addEventListener('click', () => {
    setActiveSite(buttonBookmarks, bookmarks);
    removeActiveSite(buttonCreate, create);
    removeActiveSite(buttonProfile, profile);
    removeActiveSite(buttonHome, home);
  });
  // Activate create icon and show content
  buttonCreate.addEventListener('click', () => {
    setActiveSite(buttonCreate, create);
    removeActiveSite(buttonHome, home);
    removeActiveSite(buttonBookmarks, bookmarks);
    removeActiveSite(buttonProfile, profile);
  });
  // Activate profile icon and show content
  buttonProfile.addEventListener('click', () => {
    setActiveSite(buttonProfile, profile);
    removeActiveSite(buttonHome, home);
    removeActiveSite(buttonBookmarks, bookmarks);
    removeActiveSite(buttonCreate, create);
  });

  // enable icon and site
  function setActiveSite(buttonSelector, siteSelector) {
    buttonSelector.classList.add('nav__active');
    siteSelector.classList.remove('hidden');
  }
  // disable icon and site
  function removeActiveSite(buttonSelector, siteSelector) {
    buttonSelector.classList.remove('nav__active');
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
}
