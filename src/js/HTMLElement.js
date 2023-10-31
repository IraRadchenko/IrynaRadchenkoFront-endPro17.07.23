'use strict'

class HTMLElement {
    constructor(tagName, attributes = {}) {
        this.element = document.createElement(tagName);

        for(const [key, value] of Object.entries(attributes)) {
            this.element.setAttribute(key, value);
        }
    }
    appendTo(parentElement) {
        parentElement.appendChild(this.element);
    }
    setText(text) {
        this.element.textContent = text;
    }
    onClick(callback) {
        this.element.addEventListener('click', callback);
    }
}