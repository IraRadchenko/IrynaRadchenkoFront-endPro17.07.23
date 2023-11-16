import axios from "axios";
import { basicUrl } from "./common.js";
import { createElement } from "./domHelpers.js";
import { Hamburger } from "./Hamburger.js";

let products = [];
const cart = [];

const productsContainer = document.getElementById("content");
export async function handleCategoryClick(event) {
  productsContainer.innerHTML = "";
  createElement("h2", productsContainer, "Products");

  const categoryId = event.target.getAttribute("data-id");

  const { data } = await axios(`${basicUrl}/api/products/${categoryId}`);
  products = data;
  const productList = createElement("ul", productsContainer, "");
  data.forEach((item) => {
    createElement(
      "li",
      productList,
      `${item.name} $${item.price}`,
      {
        "data-category": categoryId,
        "data-product": item.id,
      },
      {
        click: item.configurable
          ? handleConfigurableItemClick
          : handleProductClick,
      },
    );
  });
}

function handleConfigurableItemClick(event) {
  // todo:
  // 1. show modal with form with checkbox for sizes and toppings
  // 2. in click handler combine selected data using class Hamburger
  // 3. the object which we get in result with the calculated price - add to cart
  // cart.push({ productId, product: {Hamburger} })
  const categoryId = event.target.getAttribute("data-category");
  const productId = event.target.getAttribute("data-product");
  const myProduct = getProduct(productId);

  createForm();

  axios.post(`${basicUrl}/api/order`, {
    categoryId,
    productId,
  });
}

function handleProductClick(event) {
  const categoryId = event.target.getAttribute("data-category");
  const productId = event.target.getAttribute("data-product");

  getProduct(productId);

  axios.post(`${basicUrl}/api/order`, { categoryId, productId });

  showCart();
}

function getProduct(productId) {
  const myProduct = products.find((item) => item.id == productId);

  cart.push(myProduct);

  showCart();
}

function showCart() {
  const cartContainer = document.getElementById("cart");

  cartContainer.innerHTML = "<h2>Shopping Cart</h2>";

  const cartList = createElement("ul", cartContainer, "");
  cart.forEach((item) => {
    createElement("li", cartList, `${item.name} - ${item.price}`);
  });

  let totalPrice = 0;

  for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].price;
  }

  createElement("div", cartContainer, `order amount ${totalPrice}`);

  createElement("button", cartContainer, "order");
}

function createForm() {
  const form = createElement("form", productsContainer, "", {
    id: "hamburger-form",
  });

  createElement("p", form, "TOPPING:");
  const toppingsBlock = createElement("div", form, "", {
    id: "toppings",
  });
  createElement("input", toppingsBlock, "", {
    type: "checkbox",
    name: "toppings",
    id: "spice",
    value: "spice",
  });
  createElement("label", toppingsBlock, "spice", {
    for: "spice",
  });
  createElement("input", toppingsBlock, "", {
    type: "checkbox",
    name: "toppings",
    id: "mayo",
    value: "mayo",
  });
  createElement("label", toppingsBlock, "mayo", {
    for: "mayo",
  });

  createElement(
    "button",
    form,
    "CALCULATE",
    {
      type: "button",
      id: "button",
    },
    {
      click: () => {
        showInfo();
      },
    },
  );
}

function showInfo() {
  const hamburger = new Hamburger();

  const checkbox = document.getElementById("toppings");
  const selected = Array.from(
    checkbox.querySelectorAll('input[type="checkbox"]:checked'),
  );
  const toppings = selected.map((checkbox) => checkbox.value);

  toppings.forEach((topping) => {
    switch (topping) {
      case "spice":
        hamburger.addTopping(Hamburger.TOPPING_SPICE);
        break;
      case "mayo":
        hamburger.addTopping(Hamburger.TOPPING_MAYO);
        break;
    }
  });

  const topping = {
    name: `toppings-${toppings}`,
    price: hamburger.calculatePrice(),
  };

  cart.push(topping);
  console.log(hamburger);

  showCart();
  document.getElementById("hamburger-form").innerHTML = "";
}
