const burgerRouter = require("express").Router();

const { getAllBurgers } = require('../controllers/burgers.controller');


burgerRouter.get("/burgers", getAllBurgers);

module.exports = {
    burgerRouter
}