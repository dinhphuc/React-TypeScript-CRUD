"use strict";

const express = require("express");
const Controller = require("./person-controller");


const controller = new Controller();
const router = express.Router();

router.get("/", controller.list);
router.get("/edit/:id", controller.detail);
router.post("/create", controller.create);
router.post("/update/:id", controller.update);
router.delete("/del", controller.del); 

module.exports = router;