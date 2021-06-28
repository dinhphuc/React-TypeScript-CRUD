'use strict';

const BaseCore = require('../../core/base-core');
const AccountComponent = require('../components/account/account-component');
const PersonComponent = require('../components/person/person-component'); 

class Facade extends BaseCore {

    constructor() {
        super();

        this._accountComponent = new AccountComponent;
        this._personComponent = new PersonComponent; 
    }

 

    // person
    async updatePerson(id, person) {
        return this._personComponent.updatePerson(id, person);
    }
    async addPerson(person) {
        return this._personComponent.addPerson(person);
    }

    async delPerson(id) {
        return this._personComponent.delPerson(id);
    }

    async getDetailPerson(id) {
        return this._personComponent.getDetailPerson(id);
    }
    async getListPerson() {
        return this._personComponent.getListPerson();
    }

    // account
    async verifyAccount(input) {
        return this._accountComponent.verifyAccount(input);
    }
 
}

module.exports = Facade;
