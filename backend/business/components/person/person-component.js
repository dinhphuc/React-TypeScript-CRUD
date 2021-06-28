"use strict";

const BaseCore = require("../../../core/base-core");
const PersonEntity = require("../../entities/mongodb/person-entity"); 


class PersonComponent extends BaseCore {
    constructor() {
        super();

        this._personEntity = new PersonEntity;
    }

    async getListPerson() {

        let persons = await this._personEntity.list();
        return persons;
    }


    async getDetailPerson(id) {
        if (!id) {
            throw {
                message: "Invalid input"
            }
        }

        let person = await this._personEntity.findById(id);
        return person;
    }

    async updatePerson(id, person) {
        if (!person) {
            throw {
                message: "Invalid input"
            }
        }

        let result = await this._personEntity.update(id, person);

        if (!result) {
            throw {
                message: "An occurs err"
            }
        }

        return result;
    }
    async addPerson(person) {
        if (!person) {
            throw {
                message: "Invalid input"
            }
        }

        let result = await this._personEntity.add(person);

        if (!result) {
            throw {
                message: "An occurs err"
            }
        }

        return result;
    }
    async delPerson(id) {
        if (!id) {
            throw {
                message: "Invalid input"
            }
        }

        let person = await this._personEntity.findById(id);

        if (!person) {
            throw {
                message: "Person does not exist"
            }

        }

        await this._personEntity.remove(id);
        return true;
    }

}

module.exports = PersonComponent;
