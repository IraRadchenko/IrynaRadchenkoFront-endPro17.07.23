'use strict'
//1.Є текстове поле на сторінці.
// При фокусі на цьому полі збоку з'являється <div> з інформацією.
// При зникненні фокуса - так само пропадає
let textField = document.getElementById("text-field");
let box = document.getElementById("box");

textField.addEventListener("focus", function () {
    box.style.display = "block";
});
textField.addEventListener("blur", function () {
    document.getElementById("box").style.display = "none";
});

// 2.На сторінці є дві кнопки.
// При натисканні на першу кнопку просимо користувача ввести в prompt посилання,
// при натисканні на другу - переадресовується на інший сайт
// (за раніше введеним посиланням). Реалізувати перевірку на http/https.
// Якщо протокол не вказано - додаємо
let enterLinkBtn = document.getElementById('enterLink');
let redirectLinkBtn = document.getElementById('redirectLink');
let link;

enterLinkBtn.addEventListener('click', function () {
    link = prompt('Введіть посилання:');
});
redirectLinkBtn.addEventListener('click', function () {
    if(link){
        if(!link.startsWith("http://") && !link.startsWith("https://")) {
            link = "http://" + link;
        }
        location.href = link;
    } else  {
        alert("Для того, щоб здійснити переадресацію, будь ласка, введіть посилання, натиснувши кнопку 'ENTER A LINK'!");
    }
});

// 3.Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)

let table = document.getElementById("dynamicTable");

function createTable(rows, cols) {
    let number = 1;
    for (let i = 0; i < rows; i++) {
        let tableRow = document.createElement("tr");
        for (let j = 0; j < cols; j++) {
            let tableCell = document.createElement("td");
            tableCell.textContent = number++;
            tableRow.appendChild(tableCell);
        }
        table.appendChild(tableRow);
    }
}
createTable(10, 10);

// 4.У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg.
// Вивести зображення з цієї папки отримане випадковим чином (Math.random)
let images = "images/";
let ImagesNumber = 9;

//let randomImageNumber = Math.floor(Math.random() * ImagesNumber) + 1;

function generateRandomImageNumber() {
    return Math.floor(Math.random() * ImagesNumber) + 1;
}

// Виклик функції для отримання випадкового числа
const randomNumber = generateRandomImageNumber();


let pathToTheImage = `${images}${randomNumber}.jpg`;

let randomImage = document.getElementById("randomImage");
randomImage.src = pathToTheImage;