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
let tasks = [];
function showTasks() {
    tasks.map(showTask);
}
const goodsOrder = [];

function displayGoods(product) {
    goodsInfo.innerHTML = '';
    const goodsCard = document.createElement('div');
    goodsCard.innerHTML = `<h3>${product.name}</h3> 
    <p>$${product.price}</p>
    <button id='buy-btn'>BUY GOODS</button>`;
    goodsCard.setAttribute('data-product', product.name);
    goodsInfo.appendChild(goodsCard);
    goodsOrder.push(product.price);
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
const row = [];


document.getElementById('btn').addEventListener('click', () => {
    const firstName = formElements.firstName.value;
    const lastName = formElements.lastName.value;
    const cityKey = formElements.city.value;
    const city = cities[cityKey];
    const depot = formElements.depot.value;
    const payment = formElements.payment.value;
    const number = formElements.number.value;
    const comment = formElements.comment.value;

    goodsOrder.push(number);
    const sum = goodsOrder[0] * goodsOrder[1];
    row.push(sum.toString());
    row.push(firstName);
    row.push(lastName);
    row.push(city);
    row.push(depot);
    row.push(payment);
    row.push(number);
    row.push(comment);

    const isValid = validateForm(firstName, lastName, city, depot, number, payment);
    if (isValid) {
        form.style.display = 'none';
        tasks.push(row.join(' '));
        //  showTask(row, tasks.length - 1);
        localStorage.setItem('ourTasks', JSON.stringify(tasks));
        cleanElement('#form form');
    }
})

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

window.addEventListener('load', () => {
    tasks = JSON.parse(localStorage.getItem('ourTasks')) || [];
    //showTasks();
})
function showTask(task, index) {

    const parent = document.getElementById('tasks');
    const itemContent = document.createElement('div');
    itemContent.textContent = '';
    itemContent.id = 'row';
    const item = document.createElement('div');
    item.id = 'task';
    item.textContent = task;
    item.addEventListener('click', () => {
        const parentContainer = document.getElementById('orderDetails');
        if (parentContainer) {
            parentContainer.remove();
        }
        showOrderDetails();
    })

    const btn = document.createElement('button');
    btn.textContent = 'X';
    btn.setAttribute('data-task-index', index);
    btn.addEventListener('click', () => {
        tasks.splice(index, 1);
        localStorage.setItem('ourTasks', JSON.stringify(tasks));
        itemContent.remove();
    });
    itemContent.appendChild(item);
    itemContent.appendChild(btn);
    parent.appendChild(itemContent)

}

const dateNow = new Date().toDateString();
row.push(dateNow);
//row.push(Date.now());

document.getElementById('btnOrder').addEventListener('click', () => {
    showTasks(tasks);
    categoriesList.innerHTML = '';
})

function showOrderDetails() {
    const parent = document.getElementById('details');
    const item = document.createElement('div');
    item.id = 'orderDetails';
    item.textContent = JSON.stringify(tasks);
    parent.appendChild(item);
}