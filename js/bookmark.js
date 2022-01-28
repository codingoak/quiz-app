export function bookmark() {
  const btnBookmark = document.querySelector('[data-js="btnBookmark"]');
  const imgBookmark = document.querySelector('[data-js="imgBookmark"]');

  btnBookmark?.addEventListener('click', () => {
    imgBookmark.classList.toggle('card__bookmark--filled');
  });
}
