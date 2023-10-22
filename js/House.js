'use strict';

class House {
    /**
     *
     * @param {string} address
     * @param {number} floors
     * @param {Apartment []} apartments
     */
    constructor(address, floors, apartments) {
        this.address = address;
        this.floors = floors;
        this.apartments = apartments || [];
    }

}