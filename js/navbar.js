export function navbar() {
  // const heading = document.querySelector('[data-js="headingMain"]');
  const allButtons = document.querySelectorAll('[data-nav]');
  const allPages = document.querySelectorAll('[data-page]');

  console.log(allButtons);
  console.log(allPages);

  allButtons.forEach(button => {
    button.addEventListener('click', event => {
      allPages.forEach(page => {
        page.classList.add('hidden'); // set all pages to hidden
      });
      const buttonAttribute = event.currentTarget.getAttribute('data-nav'); // getAttribute from clicked button
      const currentPage = document.querySelector(
        `[data-page="${buttonAttribute}"]` // getAttribute from current page
      );
      currentPage.classList.remove('hidden'); // remove hidden class from current page
    });
  });

  // buttons
  // const buttonHome = document.querySelector('[data-nav="home"]');
  // const buttonBookmarks = document.querySelector('[data-nav="bookmarks"]');
  // const buttonCreate = document.querySelector('[data-nav="create"]');
  // const buttonProfile = document.querySelector('[data-nav="profile"]');
  // pages
  // const pageStart = document.querySelector('[data-page="start"]');
  // const pageHome = document.querySelector('[data-page="home"]');
  // const pageBookmarks = document.querySelector('[data-page="bookmarks"]');
  // const pageCreate = document.querySelector('[data-page="create"]');
  // const pageProfile = document.querySelector('[data-page="profile"]');

  // // Activate home icon and show content
  // buttonHome.addEventListener('click', () => {
  //   setActiveSite(buttonHome, pageHome);
  //   removeActiveSite(buttonBookmarks, pageBookmarks);
  //   removeActiveSite(buttonCreate, pageCreate);
  //   removeActiveSite(buttonProfile, pageProfile);
  //   heading.textContent = 'QUIZ-APP | Home';
  // });

  // // Activate bookmarks icon and show content
  // buttonBookmarks.addEventListener('click', () => {
  //   setActiveSite(buttonBookmarks, pageBookmarks);
  //   removeActiveSite(buttonCreate, pageCreate);
  //   removeActiveSite(buttonProfile, pageProfile);
  //   removeActiveSite(buttonHome, pageHome);
  //   heading.textContent = 'QUIZ-APP | Bookmarks';
  // });

  // // Activate create icon and show content
  // buttonCreate.addEventListener('click', () => {
  //   setActiveSite(buttonCreate, pageCreate);
  //   removeActiveSite(buttonHome, pageHome);
  //   removeActiveSite(buttonBookmarks, pageBookmarks);
  //   removeActiveSite(buttonProfile, pageProfile);
  //   heading.textContent = 'QUIZ-APP | Create';
  // });
  // // Activate profile icon and show content
  // buttonProfile.addEventListener('click', () => {
  //   setActiveSite(buttonProfile, pageProfile);
  //   removeActiveSite(buttonHome, pageHome);
  //   removeActiveSite(buttonBookmarks, pageBookmarks);
  //   removeActiveSite(buttonCreate, pageCreate);
  //   heading.textContent = 'QUIZ-APP | Profile';
  // });

  // // enable icon and site
  // function setActiveSite(buttonSelector, siteSelector) {
  //   buttonSelector.classList.add('nav__active');
  //   siteSelector.classList.remove('hidden');
  // }
  // // disable icon and site
  // function removeActiveSite(buttonSelector, siteSelector) {
  //   buttonSelector.classList.remove('nav__active');
  //   siteSelector.classList.add('hidden');
  //   pageStart.classList.add('hidden');
  // }
}
