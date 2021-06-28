"use strict";

const express = require("express");
const Controller = require("./home-controller");


const controller = new Controller();
const router = express.Router();

router.get("/", controller.homePage);

module.exports = router;