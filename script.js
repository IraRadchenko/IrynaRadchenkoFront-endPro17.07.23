"use strict";

const categories = {
    softDrink: [
        {
            id: 1,
            name: "Pepsi",
            price: 15,
        },
        {
            id: 2,
            name: "Coke",
            price: 10,
        },
        {
            id: 3,
            name: "Mirinda",
            price: 20,
        },
    ],
    chocolate: [
        {
            id: 4,
            name: "5Star",
            price: 10,
        },
        {
            id: 5,
            name: "Gems",
            price: 12,
        },
        {
            id: 6,
            name: "KitKat",
            price: 15,
        },
    ],
};

let categoriesList = document.getElementById("categories-list");
let goodsList = document.getElementById("goods-list");
let goodsInfo = document.getElementById("goods-card");

categoriesList.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        let section = event.target.getAttribute("data-category");
        displayGoods(section);
    }
});

function displayGoods(section) {
    goodsList.innerHTML = "";
    categories[section].forEach((goods) => {
        const listItem = document.createElement("li");
        listItem.textContent = goods.name;
        listItem.setAttribute("data-id", goods.id);
        goodsList.appendChild(listItem);
    });
}

goodsList.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        const goodsId = parseInt(event.target.getAttribute("data-id"));
        displayGoodsInfo(goodsId);
    }
});

function displayGoodsInfo(goodsId) {
    const goods = getGoodsById(goodsId);
    goodsInfo.innerHTML = `
    <h2 style="color: blue; margin-top: 0">${goods.name}</h2>
    <p>Ціна: ${goods.price} грн</p>
    <button class="buy-button">Купити</button>
  `;
    goodsInfo.style.display = "block";
}

function getGoodsById(goodsId) {
    for (const section in categories) {
        const goods = categories[section].find((prod) => prod.id === goodsId);
        if (goods) {
            return goods;
        }
    }
}

goodsInfo.addEventListener("click", (event) => {
    if (event.target.classList.contains("buy-button")) {
        alert("Товар куплений");
        returnToTheMainMenu();
    }
});

function returnToTheMainMenu() {
    goodsInfo.innerHTML = "";
    goodsInfo.style.display = "none";
    goodsList.innerHTML = "";
}