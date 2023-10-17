'use strict';

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayInfoOfPerson() {

       const alertUser =  createElement(
            'div',
            message,
            '',
            {
                className: 'alert alert-dark',
                rol: "alert",
            }
        )
        alertUser.innerHTML = `<p>Owner:</p><div>Name- ${this.name}</div> <div>Age- ${this.age}</div>`;
    }
}