import Card from './components/Card.js';
import Navbar from './components/Navbar.js';
import Form from './components/Form.js';

// Card
const allCardElements = document.querySelectorAll('[data-js="card"]');

allCardElements.forEach(cardElement => {
  Card(cardElement);
});

//Navbar
const allNavElements = document.querySelectorAll('[data-js="nav"]');

allNavElements.forEach(navElement => {
  Navbar(navElement);
});

// Form
const allFormElements = document.querySelectorAll('[data-js="form"]');

allFormElements.forEach(formElement => {
  Form(formElement);
});
