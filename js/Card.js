export default function Card(cardElement) {
  // Bookmark
  const buttonBookmark = cardElement.querySelector(
    '[data-js="buttonBookmark"]'
  );
  const imgBookmark = cardElement.querySelector('[data-js="imgBookmark"]');

  buttonBookmark.addEventListener('click', () => {
    imgBookmark.classList.toggle('card__bookmark--filled');
  });

  // Answer button
  const buttonAnswer = cardElement.querySelector('[data-js="buttonAnswer"]');
  const txtAnswer = cardElement.querySelector('[data-js="txtAnswer"]');

  buttonAnswer?.addEventListener('click', () => {
    buttonAnswer.textContent =
      buttonAnswer.textContent === 'SHOW ANSWER'
        ? 'HIDE ANSWER'
        : 'SHOW ANSWER';
    txtAnswer.classList.toggle('card__hide');
  });
}
