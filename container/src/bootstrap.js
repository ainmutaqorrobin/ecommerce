import { renderProducts } from "productsApp/ProductsIndex";
import { renderCart } from "cartApp/CartShow";

console.log("container");

renderProducts(document.querySelector("#products-section"));
renderCart(document.querySelector("#cart-section"));
