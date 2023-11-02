'use strict';
createHeader();
createPriceList();
createForm();
createInfoList();
const infoBody = document.getElementById('infoBody');
function showInfo() {
    infoBody.innerHTML = '';

    const hamburger = new Hamburger();

    const sizeBlock = document.getElementById('size');
    const size = sizeBlock.querySelector('input[type="radio"]:checked').value;

    const select = document.getElementById('stuffing');
    const stuffing = select.querySelector('input[type="radio"]:checked').value;

    const checkbox = document.getElementById('toppings');
    const selected = Array.from(checkbox.querySelectorAll('input[type="checkbox"]:checked'));
    const toppings = selected.map(checkbox => checkbox.value);

    switch (size) {
        case 'small':
            hamburger.addSize(Hamburger.SIZE_SMALL);
            break;
        case 'large':
            hamburger.addSize(Hamburger.SIZE_LARGE);
            break;
    }

    switch (stuffing) {
        case 'cheese':
            hamburger.addStuffing(Hamburger.STUFFING_CHEESE);
            break;
        case 'salad':
            hamburger.addStuffing(Hamburger.STUFFING_SALAD);
            break;
        case 'potato':
            hamburger.addStuffing(Hamburger.STUFFING_POTATO);
            break;
    }

    toppings.forEach(topping => {
        switch (topping) {
            case 'spice':
                hamburger.addTopping(Hamburger.TOPPING_SPICE);
                break;
            case 'mayo':
                hamburger.addTopping(Hamburger.TOPPING_MAYO);
                break;
        }
    });

    createElement(
        'h5',
        infoBody,
        `Calories: ${hamburger.calculateCalories()}kcal`,
    )
    createElement(
        'h5',
        infoBody,
        `Price: ${hamburger.calculatePrice()}$`,
    )
    createElement(
        'button',
        infoBody,
        'ORDER',
        {
            type: 'button',
            id: 'orderBtn',
        },
        {
            click: () => {
                createElement(
                    'h2',
                    mainContent,
                    `thank you for your order`,
                )
            }
        }
    )
}