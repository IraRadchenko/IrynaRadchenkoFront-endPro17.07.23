'use strict';

const mainParent = document.getElementById('root');

const container = new HTMLElement('div', {class: 'block'});
container.setText('Form of a high-rise building');

function createFormHouse() {

    const form = new HTMLElement('form', {name: 'formHouse', id: 'formHouse'});

    const inputAddress = new HTMLElement('input', {type: 'text', name: 'address', placeholder: 'enter the address'} );

    const inputFloors = new HTMLElement('input', {type: 'number', name: 'floors', placeholder: 'enter the floors'});

    const inputApartments = new HTMLElement('input', {type: 'number', name: 'numberOfApartments', placeholder: 'enter the number of apartments'});

    const btn = new HTMLElement('button', {type: 'button'});
    btn.setText('NEXT STEP');

    inputAddress.appendTo(form.element);
    inputFloors.appendTo(form.element);
    inputApartments.appendTo(form.element);
    btn.appendTo(form.element);
    form.appendTo(container.element);
    container.appendTo(mainParent);
    btn.onClick(() => {createAndDisplayBuilding()})
}

createFormHouse();

const apartmentFormsContainer = document.createElement('div');
apartmentFormsContainer.textContent = '';
mainParent.appendChild(apartmentFormsContainer);

const personsFormsContainer = document.createElement('div');
personsFormsContainer.textContent = '';
mainParent.appendChild(personsFormsContainer);

const formHouse = document.getElementById('formHouse');

function createAndDisplayBuilding() {
    apartmentFormsContainer.innerHTML = '';
    const apartmentCount = formHouse.numberOfApartments.value;


    for (let i = 1; i <= apartmentCount; i++) {
        const formApartment = new HTMLElement('form', {
            name: 'formApp',
            class: 'formApartment',
            id: `formApartment-${i}`});

        const appNumber = new HTMLElement('p');

        const residentCount = new HTMLElement('input', {
            type: 'text',
            name: 'peopleNumber',
            id: `residentsCount-${i}`,
            placeholder: 'enter the number of people'
        });

        const btn = new HTMLElement('button', {type: 'button', id: `btnApp-${i}`});
        btn.setText('NEXT STEP');
        appNumber.appendTo(formApartment.element);
        appNumber.setText(`apartment ${i}`);
        residentCount.appendTo(formApartment.element);
        btn.appendTo(formApartment.element);
        formApartment.appendTo(apartmentFormsContainer);
        btn.onClick( () => createResidentForm(i));
    }
}

function createResidentForm(apartmentNumber){

    const residentCountInput = document.getElementById(`residentsCount-${apartmentNumber}`);
    const residentsCount = residentCountInput.value;

    const residentForm = new HTMLElement('form',
        {name: 'people', class: 'formPerson', id: `formPerson-${apartmentNumber}`,
        });
    residentForm.setText(`Apartment ${apartmentNumber}, residents`);
    residentForm.appendTo(personsFormsContainer);

    for (let j = 1; j <= residentsCount; j++) {
        const residentInput = new HTMLElement('input', {
            type: 'text', name: 'fullName', id: `residentName-${apartmentNumber}-${j}`, placeholder: 'enter residents fullName'
        });
        residentInput.appendTo(residentForm.element);
    }

    const btn = new HTMLElement('button', {type: 'button',
    id: `residentsButton-${apartmentNumber}`});
    btn.setText('NEXT STEP');
    btn.appendTo(residentForm.element);

    residentForm.appendTo(personsFormsContainer);

    btn.onClick(() => {saveResidents(apartmentNumber)});
}

function saveResidents(apartmentNumber) {

    const residentCountInput = document.getElementById(`residentsCount-${apartmentNumber}`);
    const residentsCount = residentCountInput.value;

    const residentNames = [];

    for (let j = 1; j <= residentsCount; j++) {
        const residentNameInput = document.getElementById(`residentName-${apartmentNumber}-${j}`);
        residentNames.push(residentNameInput.value);
    }

    const apartmentResidents = residentNames.map(name => new Person(name));
    const apartment = new Apartment(apartmentNumber, apartmentResidents);

    const address = formHouse.elements.address.value;
    const floors = formHouse.elements.floors.value;

    const house = new House(address, floors);

   house.apartments.push(apartment);

        displayBuildingInfo(house, apartment);
}


function displayBuildingInfo(house) {
    // const isValid = validate(resident, apartment, house);
    // if(isValid) {
        mainParent.innerHTML = '';
        const information = document.createElement("div");
        information.innerHTML = `<h2>Information about the house</h2>
            <p><strong>Home address:</strong> ${house.address}</p>
            <h3>Apartments:</h3>
            <ul>
                ${house.apartments.map(apartment => `
                    <li>Apartment №${apartment.number}
                        <ul>Resident:
                            ${apartment.residents.map(resident => `
                                <li>${resident.name}</li>`).join('')}
                        </ul>
                    </li>`).join('')}
            </ul>`;
        mainParent.appendChild(information);
   // }
}

// function validate(resident, apartment, house) {
//
//     if (
//         resident.name === '' ||
//         apartment.number === '' ||
//         apartment.residents === '' ||
//         house.address === '' ||
//       //  house.floors === '' ||
//         house.apartments === ''
//     ) {
//
//         const errorMessage = document.createElement('p');
//         const btnMessage = document.createElement('button');
//
//         errorMessage.textContent = 'Будь ласка, заповніть обов`язкові поля форми!';
//         btnMessage.textContent = 'X';
//         mainParent.appendChild(errorMessage);
//         errorMessage.id = 'modal';
//         errorMessage.appendChild(btnMessage);
//         btnMessage.addEventListener('click', () => {
//             errorMessage.remove();
//         });
//         return false;
//     }
//     return true;
// }