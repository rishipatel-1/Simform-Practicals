
import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});

const usernameElement = document.getElementById("username");
if (usernameElement) {
  const loggedInUser = localStorage.getItem('loggedInUser');
  if (loggedInUser) {
    usernameElement.textContent = loggedInUser;
  } else {
    usernameElement.textContent = "Guest";
  }
}



const logoutButton = document.querySelector('#logout-button');


logoutButton.addEventListener('click', (e) => {
  e.preventDefault();
 console.log("ddd");
  window.location.href = "../index.html";
});