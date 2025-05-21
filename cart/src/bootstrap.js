const { faker } = require("@faker-js/faker");

const renderCart = (htmlElement) => {
  const cartText = `<div>You have ${faker.random.numeric()} items in your cart</div>`;

  htmlElement.innerHTML = cartText;
};

//if in development mode
if (process.env.NODE_ENV === "development") {
  const element = document.querySelector("#local-cart-section");

  if (element) {
    renderCart(element);
  }
}

//if in production mode
export { renderCart };
