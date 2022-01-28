import Card from './js/Card.js';

import { counter } from './js/counter.js';
import { navbar } from './js/navbar.js';

counter();
navbar();

const allCardElements = document.querySelectorAll('[data-js="card"]');

allCardElements.forEach(cardElement => {
  Card(cardElement);
});
