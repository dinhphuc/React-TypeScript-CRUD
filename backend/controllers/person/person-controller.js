"use strict";
const axios = require("axios");

const BaseController = require("../../core/base-controller");


class PersonController extends BaseController {

    constructor() {
        super();

        this.list = this.list.bind(this);
        this.detail = this.detail.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.del = this.del.bind(this);
    }


    async list(req, res) {

        try {
            let data = await this._facade.getListPerson();
            return this._handleResult(data, res);

        } catch (error) {
            res.render('err/occurs-error', {
                layout: false,
                err: error
            });
        }

    }

    async detail(req, res) {
        try {
            let id = req.params.id.trim();
            let data = await this._facade.getDetailPerson(id);

            return this._handleResult(data, res);


        } catch (error) {
            this._handleError(error.message, res);
        }
    }

    async create(req, res) {
        try {
            if (this._handleValidationResult(req, res)) {
                return false;
            }

            let person = {
                fullname: req.body.FullName,
                address: req.body.Address,
                age: Number(req.body.Age),
            };
 
            let data = await this._facade.addPerson(person);

            this._handleResult(data, res);
        } catch (error) {
            console.log(error);
            this._handleError({
                code: 500,
                message: error.message
            }, res);
        }
    }

    async update(req, res) {
        try {
            if (this._handleValidationResult(req, res)) {
                return false;
            }
            console.log(req.body.Id);


            let person = {
                id: req.body.Id,
                fullname: req.body.FullName,
                address: req.body.Address,
                age: Number(req.body.Age),
            };

            let data = await this._facade.updatePerson(person.id, person);

            this._handleResult(data, res);
        } catch (error) {
            this._handleError(error.message, res);
        }
    }

    async del(req, res) {
        const id = req.body.id;
        console.log(id);
        try {

            const person = await this._facade.getDetailPerson(id);

            if (!person) {
                return this._handleError('Person does not exist', res);
            }

            let data = await this._facade.delPerson(id);
            this._handleResult(data, res);
        } catch (error) {
            this._handleError(error.message, res);
        }

    }

}

module.exports = PersonController;