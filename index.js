import Card from './js/Card.js';
import Navbar from './js/Navbar.js';
import Counter from './js/Form.js';

const allCardElements = document.querySelectorAll('[data-js="card"]');

allCardElements.forEach(cardElement => {
  Card(cardElement);
});

const allNavElements = document.querySelectorAll('[data-js="nav"]');

allNavElements.forEach(navElement => {
  Navbar(navElement);
});

const allFormElements = document.querySelectorAll('[data-js="form"]');

allFormElements.forEach(formElement => {
  Form(formElement);
});
