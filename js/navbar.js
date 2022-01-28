export function navbar() {
  /******* still under construction ********/

  // const buttons
  const buttonHome = document.querySelector('[data-nav="home"]');
  const buttonBookmarks = document.querySelector('[data-nav="bookmarks"]');
  const buttonCreate = document.querySelector('[data-nav="create"]');
  const buttonProfile = document.querySelector('[data-nav="profile"]');
  // const sites
  const pageHome = document.querySelector('[data-page="home"]');
  const pageBookmarks = document.querySelector('[data-page="bookmarks"]');
  const pageCreate = document.querySelector('[data-page="create"]');
  const pageProfile = document.querySelector('[data-page="profile"]');

  // Activate home icon and show content
  buttonHome.addEventListener('click', () => {
    setActiveSite(buttonHome, pageHome);
    removeActiveSite(buttonBookmarks, pageBookmarks);
    removeActiveSite(buttonCreate, pageCreate);
    removeActiveSite(buttonProfile, pageProfile);
  });
  // Activate bookmarks icon and show content
  buttonBookmarks.addEventListener('click', () => {
    setActiveSite(buttonBookmarks, pageBookmarks);
    removeActiveSite(buttonCreate, pageCreate);
    removeActiveSite(buttonProfile, pageProfile);
    removeActiveSite(buttonHome, pageHome);
  });
  // Activate create icon and show content
  buttonCreate.addEventListener('click', () => {
    setActiveSite(buttonCreate, pageCreate);
    removeActiveSite(buttonHome, pageHome);
    removeActiveSite(buttonBookmarks, pageBookmarks);
    removeActiveSite(buttonProfile, pageProfile);
  });
  // Activate profile icon and show content
  buttonProfile.addEventListener('click', () => {
    setActiveSite(buttonProfile, pageProfile);
    removeActiveSite(buttonHome, pageHome);
    removeActiveSite(buttonBookmarks, pageBookmarks);
    removeActiveSite(buttonCreate, pageCreate);
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
