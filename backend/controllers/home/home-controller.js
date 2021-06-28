"use strict";

const BaseController = require("../../core/base-controller");


class HomeController extends BaseController {

    async homePage(req, res) {

        try {
            return res.render("home")
        } catch (error) {
            console.log(error);
        }

    }

}

module.exports = HomeController;