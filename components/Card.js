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

  // Random spanish word from API
  fetch('https://palabras-aleatorias-public-api.herokuapp.com/random')
    .then(response => response.json())
    .then(data => createList(data.body))
    .catch(error => console.error(error));

  function createList(words) {
    console.log(words.Word);
    const randomWord = document.createElement('div');
    randomWord.textContent = words.Word;
    document.body.append(randomWord);
  }
}
