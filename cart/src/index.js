const { faker } = require("@faker-js/faker");

const cartText = `<div>You have ${faker.random.numeric()} items in your cart</div>`;

document.querySelector("#cart-section").innerHTML = cartText;
