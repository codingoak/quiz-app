export function navbar() {
  const allButtons = document.querySelectorAll('[data-nav]');
  const allPages = document.querySelectorAll('[data-page]');

  allButtons.forEach(button => {
    button.addEventListener('click', event => {
      allButtons.forEach(button => {
        button.classList.remove('nav__active'); // remove active class from all buttons
      });
      button.classList.add('nav__active'); // add active class to current button

      allPages.forEach(page => {
        page.classList.add('hidden'); // add hidden class to all pages
      });

      const buttonAttribute = event.currentTarget.getAttribute('data-nav'); // getAttribute from clicked button
      const currentPage = document.querySelector(
        `[data-page="${buttonAttribute}"]` // getAttribute from current page
      );
      currentPage.classList.remove('hidden'); // remove hidden class from current page

      // set the heading to the current page
      const heading = document.querySelector('[data-js="headingMain"]');
      heading.textContent = buttonAttribute;
      heading.textContent =
        heading.textContent[0].toUpperCase() + heading.textContent.substring(1); // Capitalize heading
    });
  });
}
