'use strict'

let arr =  [1,2, [1.1,1.2,1.3], 3];
let list = document.getElementById("list");

function generateList(array) {
    let ul = document.createElement("ul");
    ul.style.listStyleType = 'none';
    for (let item of array) {
        let li = document.createElement("li");
        if (Array.isArray(item)) {
            let nestedList = generateList(item);
            li.appendChild(nestedList);
        } else {
            li.innerHTML = item;
        }
        ul.appendChild(li);
    }
    return ul;
}

list.appendChild(generateList(arr));