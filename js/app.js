'use strict';

const parentContainer = document.getElementById('container');

createElement(
    'button',
    parentContainer,
    'PREV',
    {
        type: 'button',
        id: 'prevBtn',
        className: 'btn'
    },
    {
        click: prevImg
    }
)

const slider = createElement(
    'div',
    parentContainer,
    '',
    {
        id: 'sliderContainer'
    }
)

const image = createElement(
    'img',
    slider,
    '',
    {
        id: 'slide',
        src: 'images/1.jpg',
        alt: 'Зображення'
    }
)

createElement(
    'button',
    parentContainer,
    'NEXT',
    {
        type: 'button',
        id: 'nextBtn',
        className: 'btn'
    },
    {
        click: nextImg
    }
)

let  currentIndex = 0;

function showImage(index) {
    image.src = images[index];
}

let interval;
function showAutoImage() {
    interval = setInterval(nextImg, 3000);
}

showAutoImage();

function nextImg() {
    clearInterval(interval);
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
    showAutoImage();
}

function prevImg() {
    clearInterval(interval);
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
    showAutoImage();
}















