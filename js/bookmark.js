export function bookmark() {
  const buttonBookmark = document.querySelector('[data-js="buttonBookmark"]');
  const imgBookmark = document.querySelector('[data-js="imgBookmark"]');

  buttonBookmark?.addEventListener('click', () => {
    imgBookmark.classList.toggle('card__bookmark--filled');
  });
}
