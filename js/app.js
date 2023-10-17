'use strict';

const mainParentSelector = document.getElementById('root');


const container = createElement(
    'div',
    mainParentSelector,
    ''
);

const parent = createElement(
    'div',
    mainParentSelector,
    ''
);

const message = createElement(
    'div',
    mainParentSelector,
    ''
);

    function createBtn() {

    createElement(
        'button',
        parent,
        'To fill out the form, click this button',
        {type: 'button',
            id: 'btn',
            className: "btn btn-outline-secondary"},
        {click: () => {createForm();
                parent.innerHTML = '';}}
    )
}
createBtn();

function createForm() {

    const form = createElement('form', container, '',
        {action: '#', name: 'mainForm', id: 'form', }
    )

    createElement('h4', form, 'PERSON');

    const inputName = createElement(
    'div',
    form,
    '',{
            className: "form-floating"
        }
    )
    createElement('input', inputName,'',
        {name: 'name', type: 'text', id: 'personName', className: "form-control", placeholder: 'Enter person name'}
    )
    createElement('label', inputName, 'Name:',
        {for: 'personName'}
    )


    const inputAge = createElement(
        'div',
        form,
        '',{
            className: "form-floating"
        }
    )
    createElement('input', inputAge, '',
        {name: 'age', type: 'number', id: 'personAge', className: "form-control", placeholder: 'Enter person age'}
    )
    createElement('label', inputAge, 'Age:',
        {for: 'personAge'}
    )

    createElement('h4', form, 'CAR');


    const inputBrand = createElement(
        'div',
        form,
        '',{
            className: "form-floating"
        }
    )
    createElement('input', inputBrand, '',
        {name: 'brand', type: 'text', id: 'carBrand', className: "form-control", placeholder: 'Enter brand'}
    )
    createElement('label', inputBrand, 'Brand:',
        {for: 'carBrand'}
    )

    const inputModel = createElement(
        'div',
        form,
        '',{
            className: "form-floating"
        }
    )
    createElement('input', inputModel, '',
        {name: 'model', type: 'text', id: 'carModel', className: "form-control", placeholder: 'Enter model'}
    )
    createElement('label', inputModel, 'Model:',
        {for: 'carModel'}
    )


    const inputYear = createElement(
        'div',
        form,
        '',{
            className: "form-floating"
        }
    )
    createElement('input', inputYear, '',
        {name: 'year', type: 'number', id: 'carYear', className: "form-control", placeholder: 'Enter year'}
    )
    createElement('label', inputYear, 'Year:',
        {for: 'carYear'}
    )


    const inputNumber = createElement(
        'div',
        form,
        '',{
            className: "form-floating "
        }
    )
    createElement('input', inputNumber, '',
        {name: 'number', type: 'text', id: 'carNumber', className: "form-control", placeholder: 'Enter number CA 1111 CA'}
    )
    createElement('label', inputNumber, 'Number:',
        {for: 'carNumber'}
    )

    createElement('button', form, 'SEND',
        {type: 'button',
        className: "btn btn-primary",
        },
        {click: savePerson}
    )

    createElement('button', form, 'BACK',
        {type: 'button',
            className: "btn btn-primary",
        },
        {click: () => {
                form.remove();
                createBtn();
            }}
    )
}

function validate(user, car) {

    if (
        user.name === '' ||
        user.age === '' ||
        car.brand === '' ||
        car.model === '' ||
        car.year === '' ||
        car.number === ''
    ) {

        const errorMessage = document.createElement('p');
        const btnMessage = document.createElement('button');

        errorMessage.textContent = 'Будь ласка, заповніть обов`язкові поля форми!';
        btnMessage.textContent = 'X';
        container.appendChild(errorMessage);
        errorMessage.id = 'modal';
        errorMessage.appendChild(btnMessage);
        btnMessage.addEventListener('click', () => {
            errorMessage.remove();
            createForm();
        });
        return false;
    }
    return true;
}

function savePerson() {
    message.innerHTML = '';

    const mainForm = document.forms[0].elements;
    const name = mainForm.name.value;
    const age = mainForm.age.value;
    const user = new Person(name, age)

    const brand = mainForm.brand.value;
    const model = mainForm.model.value;
    const year = mainForm.year.value;
    const number = mainForm.number.value;
    const car = new Car(brand, model, year, number)

    const isValid = validate(user, car);
    if (isValid) {
        user.displayInfoOfPerson();
        car.ownerVerification(user);
        car.displayInfoOfCar();
    }
    form.remove();
}


