const { faker } = require("@faker-js/faker");

const renderProducts = (htmlElement) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  htmlElement.innerHTML = products;
};

//if in development mode
if (process.env.NODE_ENV === "development") {
  const element = document.querySelector("#local-dev-products");

  if (element) {
    renderProducts(element);
  }
}

//if in production mode
export { renderProducts };
