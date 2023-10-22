'use strict';

class Apartment {
    /**
     *
     * @param {number} number
     * @param {Person[]} residents
     */
    constructor(number, residents) {
        this.number = number;
        this.residents = residents || [];
    }
}