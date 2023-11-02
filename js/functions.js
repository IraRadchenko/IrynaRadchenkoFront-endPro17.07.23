const mainParent = document.getElementById('header');

const mainContent = document.getElementById('main-container');

function createHeader() {
    const header = createElement(
        'div',
        mainParent,
        '',
        {
            id: 'sliderContainer'
        }
    )

    const image = createElement(
        'img',
        header,
        '',
        {
            id: 'slide',
            src: 'img/1.jpg',
            alt: 'Зображення'
        }
    )

    createElement(
        'h1',
        header,
        'choose your burger',
    )

    let  currentIndex = 0;

    function showImage(index) {
        image.src = images[index];
    }

    let interval;
    function showAutoImage() {
        interval = setInterval(nextImg, 5000);
    }

    showAutoImage();

    function nextImg() {
        clearInterval(interval);
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
        showAutoImage();
    }
}

function createForm() {
    const form = createElement(
        'form',
        mainContent,
        '',
        {
            id: 'hamburger-form',
        }
    )
    createElement(
        'p',
        form,
        'SIZE:',
    )
    const sizeBlock = createElement(
        'div',
        form,
        '',
        {
            id: 'size'
        }
    )
    createElement(
        'input',
        sizeBlock,
        '',
        {
            type: 'radio',
            name: 'size',
            id: 'size-small',
            value: 'small',
            checked: true

        }
    )
    createElement(
        'label',
        sizeBlock,
        'SMALL',
        {
            for: 'size-small'
        }
    )

    createElement(
        'input',
        sizeBlock,
        '',
        {
            type: 'radio',
            name: 'size',
            id: 'size-large',
            value: 'large',

        }
    )
    createElement(
        'label',
        sizeBlock,
        'LARGE',
        {
            for: 'size-large'
        }
    )

    createElement(
        'p',
        form,
        'STUFFING:',
    )
    const stuffingBlock = createElement(
        'div',
        form,
        '',
        {
            id: "stuffing",
        }
    )
    createElement(
        'input',
        stuffingBlock,
        '',
        {
            type: 'radio',
            name: 'stuffing',
            id: 'cheese',
            value: 'cheese',
            checked: true
        }
    )
    createElement(
        'label',
        stuffingBlock,
        'cheese',
        {
            for: 'cheese'
        }
    )
    createElement(
        'input',
        stuffingBlock,
        '',
        {
            type: 'radio',
            name: 'stuffing',
            id: 'salad',
            value: 'salad'
        }
    )
    createElement(
        'label',
        stuffingBlock,
        'salad',
        {
            for: 'salad'
        }
    )
    createElement(
        'input',
        stuffingBlock,
        '',
        {
            type: 'radio',
            name: 'stuffing',
            id: 'potato',
            value: 'potato'
        }
    )
    createElement(
        'label',
        stuffingBlock,
        'potato',
        {
            for: 'potato'
        }
    )

    createElement(
        'p',
        form,
        'TOPPING:',
    )
    const toppingsBlock = createElement(
        'div',
        form,
        '',
        {
            id: "toppings",
        }
    )
    createElement(
        'input',
        toppingsBlock,
        '',
        {
            type: 'checkbox',
            name: 'toppings',
            id: 'spice',
            value: 'spice'
        }
    )
    createElement(
        'label',
        toppingsBlock,
        'spice',
        {
            for: 'spice'
        }
    )
    createElement(
        'input',
        toppingsBlock,
        '',
        {
            type: 'checkbox',
            name: 'toppings',
            id: 'mayo',
            value: 'mayo'
        }
    )
    createElement(
        'label',
        toppingsBlock,
        'mayo',
        {
            for: 'mayo'
        }
    )

    createElement(
        'button',
        form,
        'CALCULATE',
        {
            type: 'button',
            id: 'button',
        },
    {
        click: showInfo
    }
    )
}

function createPriceList() {
    const priceList = createElement(
        'div',
        mainContent,
        '',
        {
            id: 'price-list',
        }
    )
    createElement(
        'h3',
        priceList,
        'price-list',
    )
    createElement(
        'h5',
        priceList,
        'Hamburger',
    )
    createElement(
        'p',
        priceList,
        `Small - ${Hamburger.SIZE_SMALL.price}$ / ${Hamburger.SIZE_SMALL.calories}kcal `,
    )
    createElement(
        'p',
        priceList,
        `Large - ${Hamburger.SIZE_LARGE.price}$ / ${Hamburger.SIZE_LARGE.calories}kcal `,
    )
    createElement(
        'h5',
        priceList,
        'Stuffing',
    )
    createElement(
        'p',
        priceList,
        `Cheese - ${Hamburger.STUFFING_CHEESE.price}$ / ${Hamburger.STUFFING_CHEESE.calories}kcal `,
    )
    createElement(
        'p',
        priceList,
        `Salad - ${Hamburger.STUFFING_SALAD.price}$ / ${Hamburger.STUFFING_SALAD.calories}kcal `,
    )
    createElement(
        'p',
        priceList,
        `Potato - ${Hamburger.STUFFING_POTATO.price}$ / ${Hamburger.STUFFING_POTATO.calories}kcal `,
    )
    createElement(
        'h5',
        priceList,
        'Topping',
    )
    createElement(
        'p',
        priceList,
        `Spice - ${Hamburger.TOPPING_SPICE.price}$ / ${Hamburger.TOPPING_SPICE.calories}kcal `,
    )
    createElement(
        'p',
        priceList,
        `Mayo - ${Hamburger.TOPPING_MAYO.price}$ / ${Hamburger.TOPPING_MAYO.calories}kcal `,
    )
}

function createInfoList() {
    const infoList = createElement(
        'div',
        mainContent,
        '',
        {
            id: 'info-list',
        }
    )
    infoList.innerHTML = `<h3>YOUR BURGER</h3>`;
    const infoBody = createElement(
        'div',
        infoList,
        '',
        {
            id: 'infoBody'
        }
    )
}
