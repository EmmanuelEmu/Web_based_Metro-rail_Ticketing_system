const { Router } = require("express");
const Controller = require("../Controller/controller");
const Login = require("../Controller/login")

const router = Router();
router.get("/hello", Controller.hello);

router.get("/me", Controller.getUser);
router.post("/login", Login.testLogin);

module.exports = {router};