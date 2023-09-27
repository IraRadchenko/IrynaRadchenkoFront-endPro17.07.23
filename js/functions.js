function showUserRow(user) {

    let container = document.querySelector(`[data-user-id="${user.id}"]`);

    if(!container){
        container = createElement('div', '#users', '', {
            'data-user-id': user.id,
            id: 'userIdRow'
        });
    }

    container.innerHTML = "";

    createElement('div', container, user.id); // idElement

    createElement('div', container, user.name + ' ' + user.lastName, {id: 'userNameRow'} ); // nameElement

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

function showAddUserForm(login = '', name = '', lastName = '', email = '', action = handleSaveUser) {
    const parentSelector = '#form form';

    createElement('input', parentSelector, '', {
        name: 'login',
        type: 'text',
        placeholder: 'Enter login',
        value: login,
    }); // login input

    createElement('input', parentSelector, '', {
        name: 'name',
        type: 'text',
        placeholder: 'Enter name',
        value: name,
    }); // name input

    createElement('input', parentSelector, '', {
        name: 'lastName',
        type: 'text',
        placeholder: 'Enter last name',
        value: lastName,
    }); // lastName input

    createElement('input', parentSelector, '', {
        name: 'email',
        type: 'text',
        placeholder: 'Enter email',
        value: email,
    }); // email input

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
    const email = formElements.email.value;

    const user = {
        login,
        name,
        lastName,
        email,
        id: Date.now(), // TODO: think about other options
    };

    const isValid = validate(user);

    if (!isValid) {
    } else {
        saveUser(user);
        cleanElement('#form form');
    }
}

function handleEditUser(id) {
    let user = users.find((user) => user.id === id);

    user.login = formElements.login.value;
    user.name = formElements.name.value;
    user.lastName = formElements.lastName.value;
    user.email = formElements.email.value;

    const isValid = validate(user);

    if (!isValid) {
    } else {
        updateStorage();
        showUserRow(user);
        cleanElement('#form form');
    }
}

function validate(user) {
    if (
        user.login === '' ||
        user.name === '' ||
        user.lastName === '' ||
        user.email === ''
    ) {
        const parent = document.getElementById('error');
        const errorMessage = document.createElement('p');
        const btnMessage = document.createElement('button');
        parent.innerHTML = '';
        errorMessage.textContent = 'Будь ласка, заповніть обов`язкові поля форми!';
        btnMessage.textContent = 'X';
        parent.appendChild(errorMessage);
        errorMessage.appendChild(btnMessage);
        btnMessage.addEventListener('click', () => {
            errorMessage.remove();
        });
        return false;
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
    // const confirmMessage = confirm(
    //     'Ви впевнені, що хочете видалити користувача?'
    // );
    // if (confirmMessage) {
        users.splice(indexToRemove, 1);
        removeElement(`div[data-user-id="${id}"]`);
        updateStorage();
   // }
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

        createElement('div', container, `Login: ${user.login}`); // idElement
        createElement('div', container, `Name: ${user.name}`); // nameElement
        createElement('div', container, `Last Name: ${user.lastName}`);
        createElement('div', container, `Email: ${user.email}`);
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
        showAddUserForm(user.login, user.name, user.lastName, user.email, action = () => handleEditUser(id));
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