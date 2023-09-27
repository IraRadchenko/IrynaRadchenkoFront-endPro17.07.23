function showUserRow(user) {

    let container = document.querySelector(`[data-user-id="${user.id}"]`);

    if(!container){
        container = createElement('div', '#users', '', {
            'data-user-id': user.id,
        });
    }

    container.innerHTML = "";

    createElement('div', container, user.id); // idElement

    createElement('div', container, user.name + ' ' + user.lastName); // nameElement

    const actionsElement = createElement('div', container, '', {
        className: 'actions',
        'data-id': user.id,
    });

    createElement(
        'input',
        actionsElement,
        '',
        { type: 'button', value: 'View', 'data-type': 'view', id: 'view-btn' },
        {
            click: showUser,
        }
    ); // editBtnElement

    createElement(
        'input',
        actionsElement,
        '',
        { type: 'button', value: 'Edit', 'data-type': 'edit' },
        {
            click: showEditData,
        }
    ); // editBtnElement

    createElement(
        'input',
        actionsElement,
        '',
        { type: 'button', value: 'Delete', 'data-type': 'delete' },
        {
            click: confirmDeleteMessage,
        }
    ); // deleteBtnElement
}

function showRows(users) {
    for (let user of users) {
        showUserRow(user);
    }
}

function showAddUserForm(login = '', name = '', lastName = '', password = '', age = '',
                         email = '', phone = '', card = '', action = handleSaveUser) {
    const parentSelector = '#form form';

    createElement('input', parentSelector, '', {
        name: 'login',
        type: 'text',
        placeholder: 'Enter login',
        value: login,
        id: 'login',
    }); // login input

    createElement('span', parentSelector, '', {id: 'login-error'});

    createElement('input', parentSelector, '', {
        name: 'name',
        type: 'text',
        placeholder: 'Enter name',
        value: name,
        id: 'name',
    }); // name input
    createElement('span', parentSelector, '', {id: 'name-error'});

    createElement('input', parentSelector, '', {
        name: 'lastName',
        type: 'text',
        placeholder: 'Enter last name',
        value: lastName,
        id: 'lastName',
    }); // lastName input
    createElement('span', parentSelector, '', {id: 'lastName-error'});

    createElement('input', parentSelector, '', {
        name: 'password',
        type: 'text',
        placeholder: 'Enter password',
        value: password,
    }); // password input

    createElement('input', parentSelector, '', {
        name: 'age',
        type: 'text',
        placeholder: 'Enter age',
        value: age,
        id: 'age',
    }); // age input
    createElement('span', parentSelector, '', {id: 'age-error'});

    createElement('input', parentSelector, '', {
        name: 'email',
        type: 'text',
        placeholder: 'Enter email',
        value: email,
        id: 'email',
    }); // email input
    createElement('span', parentSelector, '', {id: 'email-error'});

    createElement('input', parentSelector, '', {
        name: 'phone',
        type: 'text',
        placeholder: '+38...',
        value: phone,
        id: 'phone',
    }); // phone input
    createElement('span', parentSelector, '', {id: 'phone-error'});

    createElement('input', parentSelector, '', {
        name: 'card',
        type: 'text',
        placeholder: 'Enter bank card',
        value: card,
        id: 'card',
    }); // bankCard input
    createElement('span', parentSelector, '', {id: 'card-error'});

    createElement(
        'input',
        parentSelector,
        '',
        {
            type: 'button',
            value: 'Save',
        },
        {
            click: action,
        }
    );
}

const formElements = document.forms[0].elements;

function handleSaveUser() {
    const login = formElements.login.value;
    const name = formElements.name.value;
    const lastName = formElements.lastName.value;
    const password = formElements.password.value;
    const age = formElements.age.value;
    const email = formElements.email.value;
    const phone = formElements.phone.value;
    const card = formElements.card.value;

    const user = {
        login,
        name,
        lastName,
        password,
        age,
        email,
        phone,
        card,
        id: Date.now(), // TODO: think about other options
    };
   const isValid = validate(user);
    if (!isValid) {
    }
    else {
        saveUser(user);
        cleanElement('#form form');
    }
}

function handleEditUser(id) {
    let user = users.find((user) => user.id === id);

    user.login = formElements.login.value;
    user.name = formElements.name.value;
    user.lastName = formElements.lastName.value;
    user.password = formElements.password.value;
    user.age = formElements.age.value;
    user.email = formElements.email.value;
    user.phone = formElements.phone.value;
    user.card = formElements.card.value;

    const isValid = validate(user);

    if (isValid) {
        updateStorage();
        showUserRow(user);
        cleanElement('#form form');
    }
}



function validate() {
    const regExps = {
        login: {
            regexp: /^[a-zA-Z0-9_-]{3,18}$/,
            error: {
                message: 'Enter correct login!!!',
                element: document.querySelector('#login-error'),
            },
            formElement: formElements.login,
        },
        name: {
            regexp: /^[a-zA-Z-]{2,}$/,
            error: {
                message: 'Enter correct name!!!',
                element: document.querySelector('#name-error'),
            },
            formElement: formElements.name,
        },
        lastName: {
            regexp: /^[a-zA-Z-]{2,}$/,
            error: {
                message: 'Enter correct lastName!!!',
                element: document.querySelector('#lastName-error'),
            },
            formElement: formElements.lastName,
        },
        age: {
            regexp: /^(1[8-9]|[2-9][0-9])$/,
            error: {
                message: 'Enter correct age!!!',
                element: document.querySelector('#age-error'),
            },
            formElement: formElements.age,
        },
        email: {
            regexp: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            error: {
                message: 'Enter correct email!!!',
                element: document.querySelector('#email-error'),
            },
            formElement: formElements.email,
        },
        phone: {
            regexp: /^\+\d{12}$/,
            error: {
                message: 'Enter correct phone!!!',
                element: document.querySelector('#phone-error'),
            },
            formElement: formElements.phone,
        },
        card: {
            regexp: /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/,
            error: {
                message: 'Enter correct card!!!',
                element: document.querySelector('#card-error'),
            },
            formElement: formElements.card,
        },
    };

    for (let key in regExps) {
        const regItem = regExps[key];
        if(!regItem.regexp.test(regItem.formElement.value)) {
            regItem.error.element.textContent = regItem.error.message;
           return false;
        }
        else {
           regItem.error.element.textContent = '';
        }
    }
    return true;
}

function saveUser(newUser) {
    users.push(newUser);
    updateStorage();
    showUserRow(newUser);
}

function handleDeleteUser(event) {
    console.dir(event.target);
    const userId = event.target.parentNode.getAttribute('data-id');
    deleteUserById(+userId);
}

function deleteUserById(id) {
    const indexToRemove = users.findIndex((user) => user.id === id);
        users.splice(indexToRemove, 1);
        removeElement(`div[data-user-id="${id}"]`);
        updateStorage();

}

function updateStorage() {
    localStorage.setItem('users', JSON.stringify(users));
}

function showUser(event) {
    const userid = event.target.parentNode.getAttribute('data-id');
    showUserDataById(+userid);
}
function showUserDataById(id) {
    const user = users.find((user) => user.id === id);

    const parentContainer = document.getElementById('userInfo');
    if (parentContainer) {
        parentContainer.remove();
    }

    if (user) {
        const parentContainer = createElement('div', '#main', '', {
            'data-user-id': user.id,
            id: 'userInfo',
        });

        const container = createElement('div', parentContainer);

        createElement('div', container, user.login); // idElement
        createElement('div', container, user.name); // nameElement
        createElement('div', container, user.lastName);
        createElement('div', container, user.password);
        createElement('div', container, user.age);
        createElement('div', container, user.email);
        createElement('div', container, user.phone);
        createElement('div', container, user.card);
        const closeBtn = createElement('button', parentContainer, 'X');
        closeBtn.addEventListener('click', () => {
            parentContainer.remove();
        });
    }
}

function showEditData(event) {
    const userId = event.target.parentNode.getAttribute('data-id');
    editData(+userId);
}

function editData(id) {
    const user = users.find((user) => user.id === id);
    if (user) {
        showAddUserForm(user.login, user.name, user.lastName, user.password, user.age, user.email, user.phone, user.card, action = () => {handleEditUser(id)});
    }
}

function confirmDeleteMessage(event) {
    const parentSelector = document.querySelector('#main');
   const parentMain = document.createElement('div');
   parentMain.textContent = '';

    const deleteMessage = document.createElement('p');
    deleteMessage.textContent = 'Ви впевнені, що хочете видалити користувача?';

    const btnYes = document.createElement('button');
   btnYes.textContent = 'ТАК';
   btnYes.addEventListener('click', () => { handleDeleteUser(event);
       parentMain.remove()
   });

    const btnNo = document.createElement('button');
    btnNo.textContent = 'НІ';
    btnNo.addEventListener('click', () => {
        parentMain.remove();
    })
    deleteMessage.appendChild(btnYes);
    deleteMessage.appendChild(btnNo);
    parentMain.appendChild(deleteMessage);
    parentSelector.appendChild(parentMain);
}


