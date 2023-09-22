"use strict";

let categoriesList = document.getElementById("categories");
let goodsList = document.getElementById("goods");
let goodsInfo = document.getElementById("goods-card");

function displayCategories() {
  for (const categoryKey in categories) {
    const category = categories[categoryKey];
    const item = document.createElement("div");
    item.textContent = category.name;
    item.setAttribute('data-category', categoryKey)
    categoriesList.appendChild(item);
  }
}

 displayCategories();

function displayProducts(products, category) {
  goodsList.innerHTML = '';
  for (let product of products) {
    const item = document.createElement("div");
    item.textContent = `${product.name}`;
    item.setAttribute('data-product', product.id);
    item.setAttribute('data-category', category);
    goodsList.appendChild(item);
  }
}
function displayGoods(product) {
    goodsInfo.innerHTML = '';
    const goodsCard = document.createElement('div');
    goodsCard.innerHTML = `<h3>${product.name}</h3> 
    <p>$${product.price}</p>
    <button id='buy-btn'>BUY GOODS</button>`;
    goodsCard.setAttribute('data-product', product.name);
    goodsInfo.appendChild(goodsCard);
}

categoriesList.addEventListener('click', event => {
  if (event.target.nodeName === 'DIV') {
    const categoryKey = event.target.getAttribute('data-category');
    const categoryProducts = categories[categoryKey].products;
    displayProducts(categoryProducts, categoryKey);
      goodsInfo.innerHTML = '';
  }
});

goodsList.addEventListener('click', event => {
  if (event.target.nodeName === 'DIV') {
    const productId = event.target.getAttribute('data-product');
    const categoryKey = event.target.getAttribute('data-category');
      const product = categories[categoryKey].products.find(product => product.id == productId);
    displayGoods(product);
  }
});

const form = document.getElementById('form');
goodsInfo.addEventListener('click', event => {
    goodsList.innerHTML = '';
    goodsInfo.innerHTML = '';
    form.style.display = 'block';
})

const formElements = document.getElementById('mainForm');
const order = document.getElementById('order');


const cities = {
    ck: 'Черкаси',
    dn: 'Дніпро',
    lv: 'Львів'
};

document.getElementById('btn').addEventListener('click', () => {
    const firstName = formElements.firstName.value;
    const lastName = formElements.lastName.value;
    const cityKey = formElements.city.value;
    const city = cities[cityKey];
    const depot = formElements.depot.value;
    const payment = formElements.payment.value;
    const number = formElements.number.value;
    const comment = formElements.comment.value;

    const isValid = validateForm(firstName, lastName, city, depot, number, payment);
    if (isValid) {
        form.style.display = 'none';
        order.style.display = 'block';
        displayTable(firstName, lastName, payment, city, depot, number, comment);
    }
})

function displayTable(firstName, lastName, payment, city, depot, number, comment) {
    table.innerHTML = '';
    table.innerHTML += `<tr><td>Ім'я</td><td>${firstName}</td>`;
    table.innerHTML += `<tr><td>Прізвище</td><td>${lastName}</td>`;
    table.innerHTML += `<tr><td>Місто</td><td>${city}</td>`;
    table.innerHTML += `<tr><td>Відділення Нової пошти</td><td>${depot}</td>`;
    table.innerHTML += `<tr><td>Кількість товару</td><td>${number}</td>`;
    table.innerHTML += `<tr><td>Спосіб оплати</td><td>${payment}</td>`;
    table.innerHTML += `<tr><td>Коментар до замовлення </td><td>${comment}</td>`;
}

function validateForm(firstName, lastName, city, depot, number, payment) {
    if (firstName === ''||
        lastName === '' ||
        city === '' ||
        depot === '' ||
        number === '' ||
        payment !== 'postpaid' && payment !== 'payment by card'
    ) {
        const parent = document.getElementById('error');
        const errorMessage = document.createElement('p');
        const btnMessage = document.createElement('button');
        parent.innerHTML = '';
        errorMessage.textContent = 'Будь ласка, заповніть обов`язкові поля форми!';
        btnMessage.textContent = 'X';
        parent.appendChild(errorMessage);
        errorMessage.appendChild(btnMessage);
        btnMessage.addEventListener('click', () => {
            errorMessage.remove();
        })
        return false;
    }
    return true;
}