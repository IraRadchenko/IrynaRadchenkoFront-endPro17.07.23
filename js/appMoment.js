'use strict';

const secondBlock = document.querySelector('#block-2');
const myBirthday = moment("1983-07-02");
const formatMyBirthday = myBirthday.format("MMMM Do YYYY");

const title = document.createElement('h2');
title.className = 'text-center';
title.textContent = `Моя дата народження ${formatMyBirthday}`;
secondBlock.appendChild(title);

const form = document.createElement('form');
form.id = 'form';
form.name = 'form';
secondBlock.appendChild(form);

const input = document.createElement('input');
input.id = 'inputDate';
input.className = 'placeholder col-12 bg-light';
input.type = 'text';
input.name = 'date';
input.textContent = '';
input.placeholder = 'Введіть дату Вашого народження YYYY-MM-DD';
form.appendChild(input);

const btn = document.createElement('button');
btn.type = 'button';
btn.value = 'save';
btn.textContent = 'Відправити';
btn.className = 'btn btn-secondary';
form.appendChild(btn);

const mainForm = document.forms[0].elements;
btn.addEventListener('click', () => {
    const regInput = /^(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

    const message = document.createElement('h2');
    message.className = 'text-center';
    message.textContent = '';
    secondBlock.appendChild(message);

   if (regInput.test(mainForm.date.value)) {
        const userBirthDate = moment(mainForm.date.value);
        const formatUserBirthDate = userBirthDate.format("MMMM Do YYYY");
       message.textContent = `Ваша дата народження: ${formatUserBirthDate}`;
    } else {
       showMessageError();
    }
})

function showMessageError() {
    const messageError = document.createElement('div');
    messageError.id = 'liveAlertPlaceholder';
    messageError.textContent = '';
    secondBlock.appendChild(messageError);

    const appendAlert = (message, type) => {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = [
            `<div class="alert alert-${type} alert-dismissible" role="alert">`,
            `   <div>${message}</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
        ].join('');

        messageError.append(wrapper);
    }

    if (btn) {
        appendAlert('Не вірний формат дати!', 'success');
    }
}


