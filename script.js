"use strict";
const formElements = document.forms.mainForm.elements;
const form = document.getElementById('form');
const table = document.getElementById('table');
const regTable = document.getElementById('regTable');
function getCheckedItems(items) {
    const values = [];

    for(let i = 0; i < items.length; i++) {
        if(items[i].checked) {
            values.push(items[i].value)
        }
    }
    return values
}

const cities = {
    ck: 'Cherkasy',
    dn: 'Dnipro',
    lv: 'Lviv'
};

document.getElementById('btn').addEventListener('click', () => {
    const firstName = formElements.firstName.value;
    const lastName = formElements.lastName.value;
    const dateOfBirth = formElements.dateOfBirth.value;
    const gender = formElements.gender.value;
    const cityKey = formElements.city.value;
    const city = cities[cityKey];
    const address = formElements.address.value;
    const languages = getCheckedItems(formElements.languages);
    form.style.display ='none';
    regTable.style.display ='block';
    displayTable(firstName, lastName, dateOfBirth, gender, city, address,languages);
})

function displayTable(firstName, lastName, dateOfBirth, gender, city, address,languages) {
    table.innerHTML = '';
    table.innerHTML += `<tr><td>First Name</td><td>${firstName}</td></tr>`;
    table.innerHTML += `<tr><td>Last Name</td><td>${lastName}</td></tr>`;
    table.innerHTML += `<tr><td>Date of birth</td><td>${dateOfBirth}</td></tr>`;
    table.innerHTML += `<tr><td>Gender</td><td>${gender}</td></tr>`;
    table.innerHTML += `<tr><td>City</td><td>${city}</td></tr>`;
    table.innerHTML += `<tr><td>Address</td><td>${address}</td></tr>`;
    table.innerHTML += `<tr><td>Languages</td><td>${languages}</td></tr>`;
}