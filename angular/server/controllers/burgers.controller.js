const { burgers } = require('../models/burgers.model');

function getAllBurgers(req , res) {
    return res.json(burgers);
}

module.exports = {
    getAllBurgers
}